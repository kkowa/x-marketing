import Head from "next/head";
import Layout from "../components/Layout/Layout";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our company." />
      </Head>

      <div className={styles.container}>
        <h1>About Us</h1>
        <p>We are a company dedicated to providing the best services.</p>
      </div>
    </Layout>
  );
}
