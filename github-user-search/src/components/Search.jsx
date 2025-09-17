// src/components/Search.jsx
import { useState } from "react";

export default function Search({ onSearch }) {
  const [formData, setFormData] = useState({
    username: "",
    location: "",
    minRepos: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username.trim()) {
      onSearch(formData);
      setFormData({ username: "", location: "", minRepos: "" }); // reset form
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-4 w-full"
    >
      <div>
        <label htmlFor="username" className="block text-sm font-medium mb-1">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter GitHub username..."
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium mb-1">
          Location
        </label>
        <input
          id="location"
          name="location"
          type="text"
          value={formData.location}
          onChange={handleChange}
          placeholder="e.g., San Francisco"
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="minRepos" className="block text-sm font-medium mb-1">
          Minimum Repositories
        </label>
        <input
          id="minRepos"
          name="minRepos"
          type="number"
          min="0"
          value={formData.minRepos}
          onChange={handleChange}
          placeholder="e.g., 10"
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}

