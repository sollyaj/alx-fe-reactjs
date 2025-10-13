// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PostsComponent from "./components/PostsComponent";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* ✅ Navigation Bar */}
        <div className="p-4 flex justify-center space-x-4">
          <Link to="/" className="text-blue-600 hover:underline">Posts</Link>
          <Link to="/profile" className="text-blue-600 hover:underline">Profile</Link>
        </div>

        {/* ✅ Routing Setup */}
        <Routes>
          <Route path="/" element={<PostsComponent />} />
          <Route path="/profile/*" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



