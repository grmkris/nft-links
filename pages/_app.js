import "../styles/globals.css";

function MyApp({Component, pageProps}) {
  return (
    <div className="h-screen bg-white">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
