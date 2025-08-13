import React from "react";

export const getSinglePost = async (post_id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
  const data = await res.json();
  return data;
};

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
