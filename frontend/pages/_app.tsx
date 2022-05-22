import '../styles/globals.css'
import AuthComponent from '../components/AuthComponent'
import { chain, defaultChains, InjectedConnector, WagmiProvider } from 'wagmi'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletLinkConnector } from 'wagmi/connectors/walletLink'
import { UserProvider, useUser } from '@supabase/supabase-auth-helpers/react'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import 'react-loading-skeleton/dist/skeleton.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { QueryClient, QueryClientProvider } from 'react-query'
// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)
const infuraId = process.env.INFURA_ID

// Chains for connectors to support
const chains = defaultChains

// Set up connectors
const connectors = ({ chainId }) => {
  const rpcUrl = chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ?? chain.mainnet.rpcUrls[0]
  return [
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true }
    }),
    new WalletConnectConnector({
      options: {
        infuraId,
        qrcode: true
      }
    }),
    new WalletLinkConnector({
      options: {
        appName: 'My wagmi app',
        jsonRpcUrl: `${rpcUrl}/${infuraId}`
      }
    })
  ]
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
})

function MyApp({ Component, pageProps }) {
  const { user } = useUser()

  return (
    <div>
        {!user ? <AuthComponent /> : <Component {...pageProps} />}
    </div>
  )
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
  )
}

export default MyAppWithProvider
