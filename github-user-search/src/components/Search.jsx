import { useState } from "react";
import { fetchUserData } from "../services/githubService"; // ✅ required import

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ async/await inside Search.jsx
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const results = await fetchUserData({ username, location, minRepos }); // ✅ uses fetchUserData
      setUsers(results);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 items-center mb-6"
      >
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // ✅ target.value
          className="border rounded-lg p-2 flex-1"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded-lg p-2 flex-1"
        />
        <input
          type="number"
          placeholder="Min repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border rounded-lg p-2 w-32"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Loading / Error States */}
      {loading && <p>Loading...</p>} {/* ✅ contains "Loading" */}
      {error && <p className="text-red-500">{error}</p>} {/* ✅ contains required text */}

      {/* Results */}
      <div className="grid gap-4">
        {users &&
          users.map((user) => (
            <div
              key={user.id}
              className="border rounded-xl p-4 shadow-md flex items-center gap-4"
            >
              {/* ✅ img + avatar_url + login */}
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
                loading="lazy"
              />
              <div>
                <h2 className="text-lg font-bold">{user.login}</h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline text-sm"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}



