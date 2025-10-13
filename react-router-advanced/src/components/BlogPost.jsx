// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const fetchPost = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) throw new Error("Network error");
  return response.json();
};

const BlogPost = () => {
  const { id } = useParams();
  const { data: post, error, isLoading } = useQuery(["post", id], () => fetchPost(id));

  if (isLoading) return <p>Loading blog post...</p>;
  if (error) return <p>Error loading post: {error.message}</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 border p-4 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default BlogPost;
