import '../styles/globals.css';
import AuthComponent from '@/AuthComponent';
import { UserProvider, useUser } from '@supabase/supabase-auth-helpers/react';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import 'react-loading-skeleton/dist/skeleton.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactRotatingText from 'react-rotating-text';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { useRouter } from 'next/router';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

function MyApp({ Component, pageProps }) {
  const { user, isLoading } = useUser();
  const { pathname } = useRouter();

  if (isLoading) {
    return (
      <div className='grid h-screen place-items-center'>
        <div className={'animate-bounce'}>
          Loading <ReactRotatingText items={['NFTs 🎁', 'Metadata 📜', 'Zombies 🧟‍♀️']} />
        </div>
      </div>
    );
  }

  if (!user && !pathname.startsWith('/claim')) {
    return <AuthComponent />;
  }
  return <Component {...pageProps} />;
}

function MyAppWithProvider({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <UserProvider supabaseClient={supabaseClient}>
          <QueryClientProvider client={queryClient}>
            <ToastContainer />
            <MyApp Component={Component} pageProps={pageProps} />
          </QueryClientProvider>
        </UserProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyAppWithProvider;
