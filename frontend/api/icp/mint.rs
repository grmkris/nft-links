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
    process,
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

// use uriparse::URI;
use url::Url;

use auris::URI;

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

fn parseit(s: String) -> Result<(), url::ParseError> {
	let u = Url::parse(&s)?;
	let q = query(u);
	println!("parsed params: {:?}", q);

	//mint nft

	Ok(())
 }

#[derive(Clone, ArgEnum)]
pub enum Network {
    /// The mainnet at <https://ic0.app/>.
    Ic,
    /// The local replica at <http://localhost:8000/>.
    Local,
}

// #[derive(Deserialize)]
// struct DefaultIdentity {
//     default: String,
// }

// async fn get_agent(network: Network) -> Result<Agent> {
//     let url = match network {
//         Network::Local => "http://localhost:8000",
//         Network::Ic => "https://ic0.app",
//     };
//     let user_home = env::var_os("HOME").unwrap();
//     let file = File::open(Path::new(&user_home).join(".config/dfx/identity.json"))
//         .context("Configure an identity in `dfx` or provide an --identity flag")?;
//     let default: DefaultIdentity = serde_json::from_reader(file)?;
//     let pemfile = PathBuf::from_iter([
//         &*user_home,
//         ".config/dfx/identity/".as_ref(),
//         default.default.as_ref(),
//         "identity.pem".as_ref(),
//     ]);
//     let identity = BasicIdentity::from_pem_file(pemfile)?;
//     let agent = Agent::builder()
//         .with_transport(ReqwestHttpReplicaV2Transport::create(url)?)
//         .with_identity(identity)
//         .build()?;
//     if let Network::Local = network {
//         agent.fetch_root_key().await?;
//     }
//     Ok(agent)
// }

// fn get_waiter() -> impl Waiter {
//     Delay::builder()
//         .throttle(Duration::from_millis(500))
//         .timeout(Duration::from_secs(300))
//         .build()
// }

fn query(u: Url) -> HashMap<String, String> {
	u.query_pairs().into_owned().collect()
 }

// Start the runtime with the handler
fn main() -> Result<(), Box<dyn Error>> {
	Ok(lambda!(handler))
}