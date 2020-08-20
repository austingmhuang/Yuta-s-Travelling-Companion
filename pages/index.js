import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import { useFetchUser } from "../lib/user";

export default function Home() {
  const { user, loading } = useFetchUser();
  return (
    <>
      <Topbar />
      <Layout home user={user} loading={loading}>
        <Head>
          <title>CC13 Trip App</title>
        </Head>
        <Main />
      </Layout>
      <Footer />
    </>
  );
}

// import Layout from "../components/layout";
// import { useFetchUser } from "../lib/user";

// function Home() {
//   const { user, loading } = useFetchUser();

//   return (
//     <Layout user={user} loading={loading}>
//       <h1>Next.js and Auth0 Example</h1>

//       {loading && <p>Loading login info...</p>}

//       {!loading && !user && (
//         <>
//           <p>
//             To test the login click in <i>Login</i>
//           </p>
//           <p>
//             Once you have logged in you should be able to click in{" "}
//             <i>Profile</i> and <i>Logout</i>
//           </p>
//         </>
//       )}

//       {user && (
//         <>
//           <h4>Rendered user info on the client</h4>
//           <img src={user.picture} alt="user picture" />
//           <p>nickname: {user.nickname}</p>
//           <p>name: {user.name}</p>
//         </>
//       )}
//     </Layout>
