// src/components/Profile.jsx
import React from "react";
import { useQuery } from "react-query";

const fetchUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!response.ok) throw new Error("Network error");
  return response.json();
};

const Profile = () => {
  const { data: user, error, isLoading, refetch } = useQuery("user", fetchUser);

  if (isLoading) return <p>Loading profile...</p>;
  if (error) return <p>Error loading profile: {error.message}</p>;

  return (
    <div className="max-w-md mx-auto mt-10 border p-4 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-2">User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Company:</strong> {user.company?.name}</p>
      <button
        onClick={() => refetch()}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Refresh Profile
      </button>
    </div>
  );
};

export default Profile;
