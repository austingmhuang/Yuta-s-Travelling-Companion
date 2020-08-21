import Layout from "../components/Layout";
import { useFetchUser } from "../lib/user";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

function About() {
  const { user, loading } = useFetchUser();

  return (
    <>
      <Topbar user={user} loading={loading} />
      <Layout user={user} loading={loading}>
        <p>Made by Austin, Yuta, Jesus, Florian and Eduardo</p>
      </Layout>
      <Footer />
    </>
  );
}

export default About;
