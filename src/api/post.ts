interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getAllPosts() {
  await sleep(3000);

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Error fetching posts");
  }

  return (await res.json()) as Post[];
}

async function getPostById(id: number) {
  await sleep(3000);

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}}`);

  if (!res.ok) {
    throw new Error(`Error fetching post ${id}}`);
  }

  return (await res.json()) as Post;
}

export type { Post };
export { getAllPosts, getPostById };
