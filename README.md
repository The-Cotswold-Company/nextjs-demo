## Introduction

This Next.js project provides a starting point for building a blog application.

## Setup

1. Install dependencies:

```bash
   npm install
```

2. Start the development server:

```bash
   npm run dev
```

## Pair Programming Tasks

### Task 1: Display Posts List

Fetch and display blog posts on the Posts page (`/posts`).

**Resources provided:**

- `<Post />` component at `src/components/post.tsx`
- `https://jsonplaceholder.typicode.com/posts` API endpoint for mock posts data

### Task 2: Create Single Post Route

The `<Post />` component includes a link to individual post pages (`/posts/[postId]`), but the route doesn't exist yet. Your task is to set up the dynamic routing in Next.js to display a single post when users click these links.

**Resources provided:**

- `https://jsonplaceholder.typicode.com/posts/[postId]` API endpoint for mock post data
