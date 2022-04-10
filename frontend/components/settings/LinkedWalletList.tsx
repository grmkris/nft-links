import { useWallets } from "../../hooks/useWallets";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const LinkedWalletList = () => {

  const { isLoading, error, data, isFetching } = useWallets();

  if (isLoading || isFetching) return <Skeleton enableAnimation={true} count={5} /> // Simple, single-line loading skeleton

  if (data.error || error) return "An error has occurred: " + data.error.message;

  return (
    <div>
      {data.data.map((wallet) => (
        <div key={wallet.id}>
          <p>{wallet.wallet}</p>
        </div>
      ))}
    </div>
  )
}