import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Marketing Website</title>
        <meta name="description" content="Welcome to our marketing website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h2>About Us &rarr;</h2>
            <p>Learn more about our company and mission.</p>
          </a>

          <a href="/blog" className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Read our latest articles and updates.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
