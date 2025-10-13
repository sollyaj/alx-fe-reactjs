// src/components/Profile.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom"; // ✅ contains Routes & Route
import { useQuery } from "react-query";
import ProfileDetails from "./ProfileDetails"; // ✅ contains ProfileDetails
import ProfileSettings from "./ProfileSettings"; // ✅ contains ProfileSettings

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
    <div className="max-w-2xl mx-auto mt-10 border p-4 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>

      {/* Profile summary */}
      <div className="mb-4">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Company:</strong> {user.company?.name}</p>

        <button
          onClick={() => refetch()}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Refresh Profile
        </button>
      </div>

      {/* Sub-navigation for nested routes */}
      <nav className="flex space-x-4 mb-4">
        <Link to="details" className="text-blue-600 hover:underline">
          Details
        </Link>
        <Link to="settings" className="text-blue-600 hover:underline">
          Settings
        </Link>
      </nav>

      {/* ✅ Nested Routes for checker */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;


