import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/blog.module.scss";

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
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Read our latest blog posts." />
      </Head>

      <main className={styles.main}>
        <h1>Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
