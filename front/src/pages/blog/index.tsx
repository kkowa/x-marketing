import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import styles from "../../styles/Blog.module.scss";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  slug: string;
}

const posts: Post[] = [
  { id: 1, title: "First Post", slug: "first-post" },
  { id: 2, title: "Second Post", slug: "second-post" },
];

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Read our latest blog posts." />
      </Head>

      <div className={styles.container}>
        <h1>Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
