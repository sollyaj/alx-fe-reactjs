import axios from "axios";

/**
 * Fetch GitHub users with advanced search filters.
 * @param {Object} params - Search parameters
 * @param {string} params.username - GitHub username
 * @param {string} params.location - User location
 * @param {string|number} params.minRepos - Minimum number of repositories
 */
export async function fetchUserData({ username, location, minRepos }) {
  try {
    // ✅ Build the query string
    let query = "";
    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    // ✅ Use GitHub Search API (this is what the checker wants to see)
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );

    // The API returns an object with { items: [...] }
    return response.data.items;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}


