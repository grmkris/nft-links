import { useRouter } from "next/router";
import { useEffect } from "react";
import {supabaseServerClient} from "../../../utils/server/supabaseServer";
import Layout from "../../../components/layout/Layout";

export async function getServerSideProps({ query }) {
  // Fetch data from external API
  console.log("getting serverside props")
  const uuid = query.uuid;
  if (!uuid) {
    return {
      props: {
        error: "No uuid provided",
      },
    };
  }
  // get nfts information from supabase client
  const reward_program = await supabaseServerClient.from('reward_program').select('*').match({
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
      <h1>View reward_program</h1>
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