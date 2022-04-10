import {useEffect, useState} from "react";
import "../styles/globals.css";
import {supabase} from "../utils/supabaseClient";
import AuthComponent from "../components/AuthComponent";
import {Provider, useDispatch, useSelector} from "react-redux";
import {chain, defaultChains, InjectedConnector, WagmiProvider} from 'wagmi'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletLinkConnector } from 'wagmi/connectors/walletLink'
import store from "../store";
import {authActions} from "../store/auth-slice";

// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)
const infuraId = process.env.INFURA_ID

// Chains for connectors to support
const chains = defaultChains

// Set up connectors
const connectors = ({ chainId }) => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    chain.mainnet.rpcUrls[0]
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
  ]
}

function MyApp({Component, pageProps}) {
  const session = useSelector((state) => state.auth.session);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.logIn(supabase.auth.session()));

    supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(authActions.logIn(session));
    });
  }, []);

  return (
    <div className="h-screen bg-white">
      {!session ? <AuthComponent /> : <Component {...pageProps} />}
    </div>
  );
}

function MyAppWithProvider({Component, pageProps}) {
  return (
    <Provider store={store}>
      <WagmiProvider autoConnect connectors={connectors}>
        <MyApp Component={Component} pageProps={pageProps} />
      </WagmiProvider>
    </Provider>
  );
}

export default MyAppWithProvider;
