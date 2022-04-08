import { useEffect, useState } from "react";
import "../styles/globals.css";
import { supabase } from "../utils/supabaseClient";
import AuthComponent from "../components/AuthComponent";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../store";
import { authActions } from "../store/auth-slice";

function MyApp({ Component, pageProps }) {
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

function MyAppWithProvider({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MyApp Component={Component} pageProps={pageProps} />
    </Provider>
  );
}

export default MyAppWithProvider;
