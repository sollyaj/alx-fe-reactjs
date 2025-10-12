import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // or 'react-query'
import "./index.css";
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
    <div className="App">
      <PostsComponent />
    </div>
  );
}

export default App;

