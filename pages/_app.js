import "../styles/globals.css";
import Layout from "../components/Layout/layout";
import Head from "next/head";
import '@fortawesome/fontawesome-free/css/all.min.css';



function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
