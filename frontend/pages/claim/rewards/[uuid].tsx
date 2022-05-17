import { useRouter } from "next/router";
import { useEffect } from "react";
import {supabaseServerClient} from "../../../utils/server/supabaseServer";
import Layout from "../../../components/layout/Layout";

export async function getServerSideProps({ query }) {
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
  return { props: { data } }
}

const ViewNFT = ({data}) => {
  const router = useRouter();
  const { uuid } = router.query;

  useEffect(() => {
    console.log(data);
  }, [uuid, data]);

  return (
    <Layout>
      <h1>View Reward program</h1>
      <div>{data.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element.name}</h2>
            <p>{element.description}</p>
            <p>{element.created_at}</p>
          </div>
        )
      })}</div>
    </Layout>
  );
};

export default ViewNFT;