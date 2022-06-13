import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NftCard from '@/nft/NftCard';
import { supabaseServerClient } from '../../../utils/server/supabaseServer';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { ContractTransaction } from 'ethers';

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
  const { data: web3account } = useAccount();
  const [tx, setTx] = useState<ContractTransaction | undefined>();

  useEffect(() => {
    console.log(data);
  }, [uuid, data]);

  return (
    <div>
      <div className='grid h-screen place-items-center'>
        {data[0] && (
          <>
            <NftCard nft={data[0]} />
            {!web3account && (
              <>
                <div className='mt-4 text-2xl font-bold'>To claim, please:</div>

                <div className='flex w-full max-w-lg flex-col'>
                  <div className='card rounded-box grid h-32 flex-grow place-items-center bg-base-300'>
                    <ConnectButton />
                  </div>
                  <div className='divider'>OR</div>
                  <div className='card rounded-box grid h-32 flex-grow place-items-center bg-base-300'>
                    <button className={'btn btn-primary'}>Login</button>
                  </div>
                </div>
              </>
            )}
            {web3account && (
              <>
                <ConnectButton />
                <button
                  className='btn btn-accent btn-lg'
                  onClick={async () => {
                    console.log('claiming nft');
                    const claimedNft = await fetch('/api/nft/claim', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ uuid: uuid, address: web3account.address }),
                    });
                    const tx = (await claimedNft.json()) as ContractTransaction;
                    console.log(tx);
                    setTx(tx);
                  }}
                  disabled={!!tx}
                >
                  {tx ? 'Claimed' : 'Claim'}
                </button>
              </>
            )}
            {tx && <div className='badge badge-accent badge-outline'>{tx.hash}</div>}
          </>
        )}
      </div>
    </div>
  );
};

export default ViewNFT;
