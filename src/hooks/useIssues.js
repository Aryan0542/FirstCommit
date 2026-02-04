import { useEffect, useState } from "react";
import { fetchIssues } from "../services/githubApi";
import { useDebounce } from "./useDebounce";

const PER_PAGE = 30;

export const useIssues = (filters) => {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const debouncedSearch = useDebounce(filters.search, 500);

  /**
   * Reset page when filters change
   */
  useEffect(() => {
    setPage(1);
  }, [
    filters.language,
    filters.label,
    filters.sort,
    debouncedSearch,
  ]);

  useEffect(() => {
    const loadIssues = async () => {
      try {
        setError(null);

        // ⭐ Only skeleton once
        if (issues.length === 0) {
          setIsInitialLoading(true);
        } else {
          setIsFetching(true);
        }

        const response = await fetchIssues({
          ...filters,
          search: debouncedSearch,
          page,
          per_page: PER_PAGE,
        });

        // 🚨 NEVER clear issues before fetch
        setIssues(response.items);
        setTotalCount(response.total_count);

      } catch (err) {
        setError(err.message);
      } finally {
        setIsInitialLoading(false);
        setIsFetching(false);
      }
    };

    loadIssues();

  }, [
    filters.language,
    filters.label,
    filters.sort,
    debouncedSearch,
    page,
  ]);

  return {
    issues,
    error,
    page,
    setPage,
    totalCount,
    perPage: PER_PAGE,
    isInitialLoading,
    isFetching,
  };
};
