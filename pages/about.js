import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import Topbar from "../components/Topbar";

function About() {
  const { user, loading } = useFetchUser();

  return (
    <>
      <Topbar user={user} loading={loading} />
      <Layout user={user} loading={loading}>
        <h1>Hi {user.name}!</h1>
        <p>Made by Austin, Yuta, Jesus, Florian and Eduardo</p>
      </Layout>
    </>
  );
}

export default About;
