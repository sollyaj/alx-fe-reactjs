import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // or 'react-query'
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsComponent from "./components/PostsComponent";

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

export default App;

