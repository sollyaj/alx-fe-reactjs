import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PostsComponent from "./components/PostsComponent";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      {/* Navigation */}
      <div className="p-4 flex justify-center space-x-4">
        <Link to="/" className="text-blue-600 hover:underline">Posts</Link>
        <Link to="/profile" className="text-blue-600 hover:underline">Profile</Link>
      </div>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<PostsComponent />} />
        {/* Note the wildcard * for nested routing inside Profile.jsx */}
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;


