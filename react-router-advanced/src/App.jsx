import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // or 'react-query'
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsComponent from "./components/PostsComponent";
import Profile from "./components/Profile";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="p-4 flex justify-center space-x-4">
        <Link to="/" className="text-blue-600 hover:underline">Posts</Link>
        <Link to="/profile" className="text-blue-600 hover:underline">Profile</Link>
      </div>

      <Routes>
        <Route path="/" element={<PostsComponent />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

