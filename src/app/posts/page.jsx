import Link from "next/link";
import React from "react";

export const getPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export default async function Posts() {
  const posts = await getPost();

  return (
    <div className="mt-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.body}</p>
            <p className="text-sm text-gray-400 mt-3">Post ID: {post.id}</p>
            <Link href={`/posts/${post.id}`}>
              {" "}
              <button className="btn bg-sky-400 p-2 rounded-3xl">Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
