// src/components/ProfileDetails.jsx
import React from "react";
import { useQuery } from "react-query";

const fetchUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!response.ok) throw new Error("Network error");
  return response.json();
};

const ProfileDetails = () => {
  const { data: user, isLoading, error } = useQuery("user", fetchUser);

  if (isLoading) return <p>Loading user details...</p>;
  if (error) return <p>Error loading user details: {error.message}</p>;

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Profile Details</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Company:</strong> {user.company?.name}</p>
    </div>
  );
};

export default ProfileDetails;
