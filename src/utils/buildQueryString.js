/**
 * Builds a GitHub search query from filters.
 * Pure function — no framework dependencies.
 */
export const buildGithubQuery = (filters = {}) => {
  const segments = ["is:open"]; // always enforced

  if (filters.label) {
    segments.push(filters.label);
  }

  if (filters.language) {
    segments.push(`language:${filters.language}`);
  }

  if (filters.search) {
    // encode user input safely
    segments.push(encodeURIComponent(filters.search));
  }

  // Future filters plug in effortlessly:
  // if (filters.repo) segments.push(`repo:${filters.repo}`)

  return segments.join("+");
};
