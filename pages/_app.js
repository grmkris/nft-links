import "../styles/globals.css";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen bg-white">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
