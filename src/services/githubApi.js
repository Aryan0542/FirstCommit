import axios from "axios";

/**
 * Centralized GitHub HTTP client.
 * Keeps networking predictable and configurable as the app scales.
 */
const githubClient = axios.create({
  baseURL: "https://api.github.com",
  timeout: 10000, // 10s — protects UI from hanging on slow networks
  headers: {
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json",
  },
});

/**
 * Builds a GitHub search query string safely and flexibly.
 * Ensures required qualifiers are always present while allowing future expansion.
 */
const buildIssueQuery = (filters = {}) => {
  const qualifiers = ["good first issue", "is:open"];

  if (filters.language) {
    qualifiers.push(`language:${filters.language}`);
  }

  if (filters.repo) {
    qualifiers.push(`repo:${filters.repo}`);
  }

  if (filters.label) {
    qualifiers.push(`label:"${filters.label}"`);
  }

  if (filters.assignee) {
    qualifiers.push(`assignee:${filters.assignee}`);
  }

  return qualifiers.join("+");
};

/**
 * Fetches issues from GitHub Search API.
 * Designed for readability, flexibility, and future scaling.
 */
export const fetchIssues = async (filters = {}) => {
  try {
    const params = {
      q: buildIssueQuery(filters),
      sort: filters.sort || "created",
      order: filters.order || "desc",
      per_page: filters.perPage || 20,
      page: filters.page || 1,
    };

    const response = await githubClient.get("/search/issues", { params });

    // Return only what consumers need — not the entire axios response
    return response.data.items;
  } catch (error) {
    // Normalize errors so UI layers never deal with axios internals
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Failed to fetch GitHub issues";

    throw new Error(message);
  }
};
