import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

/**
 * Fetch GitHub users with advanced search filters.
 * @param {Object} params - Search parameters
 * @param {string} params.username - GitHub username
 * @param {string} params.location - User location
 * @param {string|number} params.minRepos - Minimum number of repositories
 * @param {number} [params.page=1] - Page number for pagination
 * @returns {Promise<Array>} - List of GitHub users
 */
export async function fetchUserData({ username, location, minRepos, page = 1 }) {
  try {
    let query = username ? `${username} in:login` : "";

    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(BASE_URL, {
      params: { q: query, page, per_page: 10 }, // 10 results per page
    });

    return response.data.items;
  } catch (error) {
    throw new Error("Failed to fetch users from GitHub API.");
    throw error;
  }
}

