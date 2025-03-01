import { useRouter } from "next/router";
import styles from "@/styles/blog/BlogPost.module.scss";

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "First Post",
    slug: "first-post",
    content: "This is the first post.",
  },
  {
    id: 2,
    title: "Second Post",
    slug: "second-post",
    content: "This is the second post.",
  },
];

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className={styles.container}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
