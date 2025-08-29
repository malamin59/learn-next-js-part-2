import React from "react";

// ✅ Utility function to fetch post
export const getSinglePost = async (post_id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);

  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
};

// ✅ Dynamic Metadata
export async function generateMetadata({ params }) {
  const { id } = params;
  const singlePost = await getSinglePost(id);

  return {
    title: singlePost.title,
    description: singlePost.body,
  };
}

// ✅ Page Component
export default async function SinglePost({ params }) {
  const { id } = params;
  const singlePost = await getSinglePost(id);

  return (
    <div className="mt-12 max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        {singlePost.title}
      </h1>
      <p className="text-gray-700 mb-6">{singlePost.body}</p>
      <p className="text-sm text-gray-400">Post ID: {singlePost.id}</p>
    </div>
  );
}
