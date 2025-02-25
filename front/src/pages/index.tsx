import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>My Marketing Website</title>
          <meta
            name="description"
            content="Welcome to our marketing website!"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to X Marketinng</h1>

          <p className={styles.description}>
            {/* <code className={styles.code}>pages/index.tsx</code> */}
          </p>
        </main>
      </div>
    </Layout>
  );
}
