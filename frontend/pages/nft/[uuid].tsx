import { useRouter } from "next/router";
import { useEffect } from "react";
import {supabaseServerClient} from "../../utils/server/supabaseServer";

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
  // get nft information from supabase client
  const nft = await supabaseServerClient.from('nfts').select('*').match({
    id: uuid,
  })
  const data = nft.data

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
    <div>
      <h1>View NFT</h1>
      <div>{data.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element.active}</h2>
            <p>{element.chain}</p>
            <p>{element.created_at}</p>
            <p>{element.id}</p>
            <p>{element.limit}</p>
            <p>{element.metadata}</p>
            <p>{element.user}</p>
          </div>
        )
      })}</div>
    </div>
  );
};

export default ViewNFT;