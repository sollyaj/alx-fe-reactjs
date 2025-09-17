import { useState } from "react";
import Search from "./components/Search";
import UserList from "./components/UserList";
import { fetchUserData } from "./services/githubService";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [queryParams, setQueryParams] = useState(null);

  const handleSearch = async (params) => {
    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);
    setQueryParams(params);

    try {
      const results = await fetchUserData({ ...params, page: 1 });
      const detailedUsers = await Promise.all(
        results.map(async (user) => (await axios.get(user.url)).data)
      );
      setUsers(detailedUsers);
    } catch {
      setError("Looks like we can’t find any users.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    if (!queryParams) return;

    const nextPage = page + 1;
    setLoading(true);

    try {
      const results = await fetchUserData({ ...queryParams, page: nextPage });
      const detailedUsers = await Promise.all(
        results.map(async (user) => (await axios.get(user.url)).data)
      );
      setUsers((prev) => [...prev, ...detailedUsers]);
      setPage(nextPage);
    } catch {
      setError("Could not load more users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search (Advanced)</h1>
      <Search onSearch={handleSearch} loading={loading} error={error} users={users} />


      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <UserList users={users} />

      {users.length > 0 && (
        <div className="mt-6 text-center">
          <button
            onClick={handleLoadMore}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}


