import Head from "next/head";
import styles from "../styles/about.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our company." />
      </Head>

      <main className={styles.main}>
        <h1>About Us</h1>
        <p>We are a company dedicated to providing the best services.</p>
      </main>
    </div>
  );
}
