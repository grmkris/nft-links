import { useRouter } from "next/router";
import { useEffect } from "react";
import {supabaseServerClient} from "../../utils/server/supabaseServer";
import NftCard from "@/nft/NftCard";

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
      <div className='grid place-items-center h-screen'>
        {data[0] &&
          <>
            <NftCard nft={data[0]} />
            {// big flashy button for claiming the nft reward
            }
            <button className='btn btn-lg btn-accent'>Claim</button>
          </>
        }
      </div>
    </div>
  );
};

export default ViewNFT;