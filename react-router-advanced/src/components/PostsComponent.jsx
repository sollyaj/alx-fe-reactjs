// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query"; // or 'react-query'

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    error,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // cache for 1 minute
  });

  if (isLoading) return <p className="text-center mt-10">Loading posts...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Error: {error.message}</p>;

  return (
    <div className="max-w-3xl mx-auto p-4 mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Posts</h2>
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Refetch
        </button>
      </div>

      {isFetching && <p className="text-sm text-gray-500">Refreshing data...</p>}

      <ul className="space-y-4 mt-4">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="border rounded-xl p-4 shadow-sm bg-white">
            <h3 className="font-semibold text-lg mb-1">{post.title}</h3>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
