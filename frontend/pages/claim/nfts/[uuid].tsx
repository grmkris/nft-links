import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NftCard from '@/nft/NftCard';
import { supabaseServerClient } from '../../../utils/server/supabaseServer';

export async function getServerSideProps({ query }) {
  // Fetch data from external API
  console.log('getting serverside props');
  const uuid = query.uuid;
  if (!uuid) {
    return {
      props: {
        error: 'No uuid provided',
      },
    };
  }
  // get nfts information from supabase client
  const nft = await supabaseServerClient.from('nfts').select('*').match({
    id: uuid,
  });
  const data = nft.data;

  // Pass data to the page via props
  return { props: { data } };
}

const ViewNFT = ({ data }) => {
  const router = useRouter();
  const { uuid } = router.query;

  useEffect(() => {
    console.log(data);
  }, [uuid, data]);

  return (
    <div>
      <div className='grid h-screen place-items-center'>
        {data[0] && (
          <>
            <NftCard nft={data[0]} />
            {
              // big flashy button for claiming the nft reward
            }
            <button className='btn btn-accent btn-lg'>Claim</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ViewNFT;
