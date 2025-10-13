// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PostsComponent from "./components/PostsComponent";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ import it

function App() {
  // Mock login state for demonstration
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div>
        {/* Navigation */}
        <div className="p-4 flex justify-center space-x-4">
          <Link to="/" className="text-blue-600 hover:underline">Posts</Link>
          <Link to="/profile" className="text-blue-600 hover:underline">Profile</Link>
          <Link to="/blog/1" className="text-blue-600 hover:underline">Sample Blog</Link>
          <button
            onClick={() => setIsAuthenticated(!isAuthenticated)}
            className="ml-4 bg-gray-200 px-3 py-1 rounded"
          >
            {isAuthenticated ? "Logout" : "Login"}
          </button>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<PostsComponent />} />
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* ✅ Protected route example */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;





