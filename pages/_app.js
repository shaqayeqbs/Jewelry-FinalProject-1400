import "../styles/globals.css";
import Layout from "../components/Layout/layout";
import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AuthContextProvider } from "../components/store/auth-context";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
