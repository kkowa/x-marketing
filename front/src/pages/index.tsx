import Head from "next/head";
import Link from "next/link";
import styles from "../styles/home.module.scss";

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

        <Link className={styles.card} href="/about">
          <h2>About Us &rarr;</h2>
          <p>Learn more about our company and mission.</p>
        </Link>

        <Link className={styles.card} href="/blog">
          <h2>Blog &rarr;</h2>
          <p>Read our latest articles and updates.</p>
        </Link>
      </main>
    </div>
  );
}
