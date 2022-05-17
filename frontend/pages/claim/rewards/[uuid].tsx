import {useRouter} from "next/router";
import React from "react";
import {supabaseServerClient} from "../../../utils/server/supabaseServer";
import Layout from "../../../components/layout/Layout";
import NftCard from "../../../components/nft/NftCard";


export async function getServerSideProps({query}) {
  // Fetch data from external API
  console.log("getting serverside props for claim rewards page");
  const uuid = query.uuid;
  if (!uuid) {
    return {
      props: {
        error: "No uuid provided",
      },
    };
  }
  // get nfts information from supabase client, from from reward_program inner join  reward_group reward_nft

  const reward_program = await supabaseServerClient.from('reward_program')
    .select(`
      *,
      reward_groups(*, groups(*, user_groups(*))),
      reward_nft(*, nft(*))
    `).match({
      id: uuid,
    })

  const data = reward_program.data

  // Pass data to the page via props
  return {props: {data}}
}

const ViewNFT = ({data}) => {
  const router = useRouter();
  const {uuid} = router.query;

  return (
    <Layout>
      <div>{data.map((element, index) => {
        return (
          <div key={index}>

            <div className="flex flex-col m-10">
              <h1 className={"text-lg"}>{element.name}</h1>
              <p>{element.description}</p>
              <p>Created: {new Date(element.created_at).toLocaleString()}</p>

            </div>
            <div className="divider text-lg text-success">Reward</div>
            <div className="grid place-items-center">
              <NftCard nft={data[0].reward_nft[0].nft}/>
            </div>
      </div>
      )
      })}</div>
    </Layout>
  );
};

export default ViewNFT;