import { type Post } from "@/types";
import Link from "next/link";

interface PostProps {
  post: Post;
}

function Post({ post }: PostProps) {
  const { id, title } = post;

  return (
    <article className="post">
      <h2>{title}</h2>
      <Link href={`/posts/${id}`}>View post</Link>
    </article>
  );
}

export { Post };
