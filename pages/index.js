import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <Topbar />
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Main />
      </Layout>
      <Footer />
    </>
  );
}
