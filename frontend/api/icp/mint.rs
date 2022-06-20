#[macro_use]
extern crate candid;
#[macro_use]
extern crate thiserror;
#[macro_use] extern crate log;

use std::{
    collections::HashMap,
    env,
    fs::{self, File},
    path::{Path, PathBuf},
    // process,
    time::Duration,
	error::Error,
};

use anyhow::{bail, Context, Result};
use candid::Principal;
use cid::Cid;
use clap::{ArgEnum, Parser};
use dialoguer::Confirm;
use garcon::{Delay, Waiter};
use ic_agent::{
    agent::http_transport::ReqwestHttpReplicaV2Transport, identity::BasicIdentity, Agent,
    AgentError,
};
use sha2::{Digest, Sha256};
use types::*;

use uriparse::URI;
use url::Url;

// use auris::URI;

use http::{StatusCode};
use vercel_lambda::{lambda, error::VercelError, IntoResponse, Request, Response};

// use log::Level;

mod types;

fn handler(req: Request) -> Result<impl IntoResponse, VercelError> {
	env_logger::init();
	// let (parts, body) = req.into_parts();
	// let body = serde_json::from_slice(&body);
	let test = req.uri().to_string();
    
	// info!("this is a debug {}", "message");
	error!("received {test}");

	parseit(test);
	
	let response = Response::builder()
		.status(StatusCode::OK)
		.header("Content-Type", "text/plain")
		.body("Hello Rust?")
		.expect("Internal Server Error");

		Ok(response)
}

async fn parseit(s: String) -> Result<(), url::ParseError> {
	let u = Url::parse(&s)?;
	let q = query(u);
	println!("parsed params: {:?}", q);

	//mint nft
    if let Err(e) = rmain().await {
        eprintln!("{}", e);
        // process::exit(1);
    }

	Ok(())
 }

 #[derive(Parser)]
struct Args {
    #[clap(arg_enum)]
    /// The network the canister is running on.
    network: Network,
    /// The DIP-721 compliant NFT container.
    canister: Principal,
    /// The owner of the new NFT.
    #[clap(long)]
    owner: Principal,
    /// The CID of the file on IPFS.
    #[clap(long, conflicts_with_all(&["asset-canister", "uri"]))]
    ipfs_location: Option<String>,
    /// The principal of the file's asset canister on the IC.
    #[clap(long, conflicts_with_all(&["ipfs-location", "uri"]))]
    asset_canister: Option<Principal>,
    /// The URI of the file on the internet.
    #[clap(long, conflicts_with_all(&["ipfs-location", "asset-canister"]), requires("hash"))]
    uri: Option<String>,
    /// The path to the file. Required if you want the file contents sent to
    /// the smart contract.
    #[clap(long, required_unless_present_any(&["asset-canister", "uri", "ipfs-location"]))]
    file: Option<PathBuf>,
    /// The SHA-256 hash of the file. SHA2 is required if `--uri` is specified
    #[clap(long, group("hash"))]
    sha2: Option<String>,
    /// Calculates the SHA-256 hash of the file and includes it.
    #[clap(long, conflicts_with("sha2"), requires("file"), group("hash"))]
    sha2_auto: bool,
    /// The MIME type of the file. Can be inferred if `--file` is specified,
    /// required otherwise.
    #[clap(long, required_unless_present("file"))]
    mime_type: Option<String>,
    /// Skips confirmation for a minted NFT with no `--file`.
    #[clap(short)]
    yes: bool,
}

#[derive(Clone, ArgEnum)]
pub enum Network {
    /// The mainnet at <https://ic0.app/>.
    Ic,
    /// The local replica at <http://localhost:8000/>.
    Local,
}

#[derive(Deserialize)]
struct DefaultIdentity {
    default: String,
}

async fn get_agent(network: Network) -> Result<Agent> {
    let url = match network {
        Network::Local => "http://localhost:8000",
        Network::Ic => "https://ic0.app",
    };
    let user_home = env::var_os("HOME").unwrap();
    let file = File::open(Path::new(&user_home).join(".config/dfx/identity.json"))
        .context("Configure an identity in `dfx` or provide an --identity flag")?;
    let default: DefaultIdentity = serde_json::from_reader(file)?;
	// let pemfile = PathBuf::from_str("/home/gitpod/.config/dfx/identity/default/identity.pem");
    let pemfile = PathBuf::from("/home/gitpod/.config/dfx/identity/default/identity.pem");
    // let pemfile = PathBuf::from_iter([
    //     &*user_home,
    //     ".config/dfx/identity/".as_ref(),
    //     default.default.as_ref(),
    //     "identity.pem".as_ref(),
    // ]);
    let identity = BasicIdentity::from_pem_file(pemfile)?;
	// let key_pair: Ed25519KeyPair = 
	// let identity = BasicIdentity::from_key_pair(key_pair: Ed25519KeyPair)
    let agent = Agent::builder()
        .with_transport(ReqwestHttpReplicaV2Transport::create(url)?)
        .with_identity(identity)
        .build()?;
    if let Network::Local = network {
        agent.fetch_root_key().await?;
    }
    Ok(agent)
}

fn get_waiter() -> impl Waiter {
    Delay::builder()
        .throttle(Duration::from_millis(500))
        .timeout(Duration::from_secs(300))
        .build()
}

async fn rmain() -> Result<()> {
    let mint = Args::parse();
    if mint.file.is_none()
        && !mint.yes
        && !Confirm::new()
            .with_prompt("Are you sure you don't want to specify a file? No content will be uploaded, only metadata!")
            .interact()?
    {
        println!("Aborted upload");
        return Ok(())
    }
    let canister = mint.canister;
    let owner = mint.owner;
    let agent = get_agent(mint.network).await?;
    let res = agent
        .query(&canister, "supportedInterfacesDip721")
        .with_arg(Encode!()?)
        .call()
        .await;
    let res = if let Err(AgentError::ReplicaError { reject_code: 3, .. }) = &res {
        res.context(format!(
            "canister {canister} does not appear to be a DIP-721 NFT canister"
        ))?
    } else {
        res?
    };
    let interfaces = Decode!(&res, Vec<InterfaceId>)?;
    if !interfaces.contains(&InterfaceId::Mint) {
        bail!("canister {canister} does not support minting");
    }
    let mut metadata = HashMap::new();
    use MetadataVal::*;
    if let Some(ipfs_location) = mint.ipfs_location {
        metadata.insert("locationType", Nat8Content(1));
        let cid: Cid = ipfs_location.parse()?;
        metadata.insert("location", BlobContent(cid.to_bytes()));
    } else if let Some(asset_canister) = mint.asset_canister {
        metadata.insert("locationType", Nat8Content(2));
        metadata.insert("location", TextContent(format!("{asset_canister}")));
    // } else if let Some(uri) = mint.uri {
    //     URI::try_from(&*uri)?;
    //     // URI::try_from(&'uri)?;
    //     metadata.insert("locationType", Nat8Content(3));
    //     metadata.insert("location", TextContent(uri));
    } else {
        metadata.insert("locationType", Nat8Content(4));
    }
    if let Some(sha2) = mint.sha2 {
        let hex = hex::decode(sha2)?;
        metadata.insert("contentHash", BlobContent(hex));
    }
    let (data, content_type) = if let Some(file) = mint.file {
        let data = fs::read(&file)?;
        if mint.sha2_auto {
            metadata.insert(
                "contentHash",
                BlobContent(Vec::from_iter(Sha256::digest(&data))),
            );
        }
        let content_type = mint
            .mime_type
            .or_else(|| mime_guess::from_path(&file).first().map(|m| format!("{m}")));
        (data, content_type)
    } else {
        (vec![], mint.mime_type)
    };
    let content_type = content_type.unwrap_or_else(|| String::from("application/octet-stream"));
    metadata.insert("contentType", TextContent(content_type));
    let metadata = MetadataPart {
        purpose: MetadataPurpose::Rendered,
        data: &data,
        key_val_data: metadata,
    };
    let waiter = get_waiter();
    let res = agent
        .update(&mint.canister, "mintDip721")
        .with_arg(Encode!(&owner, &[metadata], &data)?)
        .call_and_wait(waiter)
        .await;
    let res = if let Err(AgentError::ReplicaError { reject_code: 3, .. }) = &res {
        res.context(format!("canister {canister} does not support minting"))?
    } else {
        res?
    };
    let MintReceipt { token_id, id } = Decode!(&res, Result<MintReceipt, MintError>)??;
    println!("Successfully minted token {token_id} to {owner} (transaction id {id})");
    Ok(())
}

fn query(u: Url) -> HashMap<String, String> {
	u.query_pairs().into_owned().collect()
 }

// Start the runtime with the handler
fn main() -> Result<(), Box<dyn Error>> {
	Ok(lambda!(handler))
}