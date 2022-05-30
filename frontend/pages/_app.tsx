import '../styles/globals.css';
import AuthComponent from '@/AuthComponent';
import { chain, defaultChains, InjectedConnector, WagmiProvider } from 'wagmi';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { WalletLinkConnector } from 'wagmi/connectors/walletLink';
import { UserProvider, useUser } from '@supabase/supabase-auth-helpers/react';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import 'react-loading-skeleton/dist/skeleton.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactRotatingText from 'react-rotating-text';

const infuraId = process.env.INFURA_ID;
const chains = defaultChains;

const connectors = ({ chainId }) => {
  const rpcUrl = chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ?? chain.mainnet.rpcUrls[0];
  return [
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true },
    }),
    new WalletConnectConnector({
      options: {
        infuraId,
        qrcode: true,
      },
    }),
    new WalletLinkConnector({
      options: {
        appName: 'My wagmi app',
        jsonRpcUrl: `${rpcUrl}/${infuraId}`,
      },
    }),
  ];
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

function MyApp({ Component, pageProps }) {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="grid place-items-center h-screen">
        <div className={"animate-bounce"}>Loading <ReactRotatingText items={['NFTs 🎁', 'Metadata 📜', 'Zombies 🧟‍♀️']} /></div>
      </div>
    )
  }
  if (!user) {
    return <AuthComponent />;
  }
  return (
    <Component {...pageProps} />
  );
}

function MyAppWithProvider({ Component, pageProps }) {
  return (
    <UserProvider supabaseClient={supabaseClient}>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider autoConnect connectors={connectors}>
          <ToastContainer />
          <MyApp Component={Component} pageProps={pageProps} />
        </WagmiProvider>
      </QueryClientProvider>
    </UserProvider>
  );
}

export default MyAppWithProvider;
