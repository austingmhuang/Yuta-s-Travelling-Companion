import Head from "next/head";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "CC13 Trip App!!!";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
          rel="stylesheet"
        ></link>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
    </div>
  );
}

// import Link from "next/link";

// function Header({ user, loading }) {
//   return (
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <Link href="/">
//               <a>Home</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/about">
//               <a>About</a>
//             </Link>
//           </li>
//           {!loading &&
//             (user ? (
//               <>
//                 <li>
//                   <Link href="/profile">
//                     <a>Client-rendered profile</a>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/advanced/ssr-profile">
//                     <a>Server rendered profile (advanced)</a>
//                   </Link>
//                 </li>
//                 <li>
//                   <a href="/api/logout">Logout</a>
//                 </li>
//               </>
//             ) : (
//               <li>
//                 <a href="/api/login">Login</a>
//               </li>
//             ))}
//         </ul>
//       </nav>

//       <style jsx>{`
//         header {
//           padding: 0.2rem;
//           color: #fff;
//           background-color: #333;
//         }
//         nav {
//           max-width: 42rem;
//           margin: 1.5rem auto;
//         }
//         ul {
//           display: flex;
//           list-style: none;
//           margin-left: 0;
//           padding-left: 0;
//         }
//         li {
//           margin-right: 1rem;
//         }
//         li:nth-child(2) {
//           margin-right: auto;
//         }
//         a {
//           color: #fff;
//           text-decoration: none;
//         }
//         button {
//           font-size: 1rem;
//           color: #fff;
//           cursor: pointer;
//           border: none;
//           background: none;
//         }
//       `}</style>
//     </header>
//   );
// }

// export default Header;
