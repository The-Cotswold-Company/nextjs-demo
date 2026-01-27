import { getPostById } from "@/api/post";
import { Post } from "@/components/post";

interface PageProps {
  params: Promise<{ postId: string }>;
}

export default async function SinglePostPage({ params }: PageProps) {
  const { postId } = await params;

  return (
    <main>
      {/* TODO: Fetch a single post and render here */}
      {/* <Post post={post} /> */}
    </main>
  );
}
