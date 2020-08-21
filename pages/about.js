import Layout from "../components/Layout";
import { useFetchUser } from "../lib/user";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import TeamMembers from "../components/TeamMembers";

function About() {
  const { user, loading } = useFetchUser();

  return (
    <>
      <Topbar user={user} loading={loading} />
      <Layout user={user} loading={loading}>
        <h2>Made with ❤️ by </h2>
        <TeamMembers />
      </Layout>
      <Footer />
    </>
  );
}

export default About;
