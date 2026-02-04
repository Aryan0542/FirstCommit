import React, { useState } from 'react';
import { useIssues } from '../hooks/useIssues';
import IssueCard from '../components/IssueCard';
import SkeletonGrid from '../components/SkeletonGrid';
import ErrorState from '../components/ErrorState';
import EmptyState from '../components/EmptyState';
import Pagination from '../components/Pagination';

// Move this OUTSIDE the component
const defaultFilters = {
  language: "",
  label: "good first issue",
  sort: "updated",
  search: "",
  page: 1, // ⭐ required for pagination
};

const Home = () => {
  /* -----------------------------
     Filter State
  ------------------------------ */
  const [filters, setFilters] = useState(defaultFilters);

  /* -----------------------------
     Data Fetch
  ------------------------------ */
  const {
  issues,
  error,
  page,
  setPage,
  totalCount,
  perPage,
  isInitialLoading,
  isFetching,
} = useIssues(filters);


  /* -----------------------------
     Filter Mutation Pathway
  ------------------------------ */
  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,

      // Reset pagination when filters change
      ...(key !== "page" && { page: 1 }),
    }));
  };

  const handleResetFilters = () => {
    setFilters(defaultFilters);
  };

  /* -----------------------------
     Render Flow
  ------------------------------ */
  let content;

if (isInitialLoading) {
  content = <SkeletonGrid />;
} else if (error) {
  content = <ErrorState />;
} else if (!issues.length) {
  content = <EmptyState onResetFilters={handleResetFilters} />;
} else {
  content = (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {issues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        totalCount={totalCount}
        perPage={perPage}
        isFetching={isFetching}
      />
    </>
  );
}

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-20">

          {/* Hero Section */}
          <section className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Track and Manage Your Issues
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              A centralized platform for tracking bugs, feature requests, and development tasks with clarity and precision.
            </p>
          </section>

          {/* Issues Section */}
          <section className="rounded-3xl border border-gray-200 bg-gray-50/70 backdrop-blur-sm p-8 space-y-8">

            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-semibold text-gray-900">
                Recent Issues
              </h2>

              {/* Subtle background refetch indicator */}
              {isFetching && issues?.length > 0 && (
                <span className="text-sm text-gray-400 animate-pulse">
                  Updating…
                </span>
              )}
            </div>

            {/* Future FilterBar plugs into:
                filters + updateFilter */}

            {content}

          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
