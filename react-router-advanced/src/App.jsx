// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PostsComponent from "./components/PostsComponent";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./hooks/useAuth"; // ✅ use it here

function App() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <BrowserRouter>
      <div>
        <div className="p-4 flex justify-center space-x-4">
          <Link to="/" className="text-blue-600 hover:underline">Posts</Link>
          <Link to="/profile" className="text-blue-600 hover:underline">Profile</Link>
          <Link to="/blog/1" className="text-blue-600 hover:underline">Sample Blog</Link>

          {/* Mock login/logout */}
          {isAuthenticated ? (
            <button onClick={logout} className="ml-4 bg-gray-200 px-3 py-1 rounded">Logout</button>
          ) : (
            <button onClick={login} className="ml-4 bg-gray-200 px-3 py-1 rounded">Login</button>
          )}
        </div>

        <Routes>
          <Route path="/" element={<PostsComponent />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          {/* ✅ Protected route */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
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






