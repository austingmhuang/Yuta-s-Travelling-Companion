import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import { useFetchUser } from "../lib/user";

export default function Home() {
  const { user, loading } = useFetchUser();
  return (
    <>
      <Topbar user={user} loading={loading} />
      <Layout home user={user} loading={loading}>
        <Main user={user} />
      </Layout>
      <Footer />
    </>
  );
}
