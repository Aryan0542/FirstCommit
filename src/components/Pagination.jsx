export default function Pagination({
  page,
  setPage,
  totalCount,
  perPage,
  isFetching,
}) {
  const totalPages = Math.ceil(totalCount / perPage);

  const isPrevDisabled = page === 1 || isFetching;
  const isNextDisabled = page >= totalPages || isFetching;

  return (
    <div className="flex items-center justify-center gap-4 pt-6">
      <button
        onClick={() => setPage((p) => p - 1)}
        disabled={isPrevDisabled}
        className="
          px-4 py-2
          rounded-xl
          border border-white/10
          text-sm text-gray-300
          transition
          hover:bg-white/5
          disabled:opacity-40
          disabled:cursor-not-allowed
        "
      >
        Previous
      </button>

      <span className="text-sm text-gray-400 flex items-center gap-2">
        Page {page} of {Math.max(totalPages, 1)}

        {isFetching && (
          <span className="animate-pulse text-gray-500">
            • Updating…
          </span>
        )}
      </span>

      <button
        onClick={() => setPage((p) => p + 1)}
        disabled={isNextDisabled}
        className="
          px-4 py-2
          rounded-xl
          border border-white/10
          text-sm text-gray-300
          transition
          hover:bg-white/5
          disabled:opacity-40
          disabled:cursor-not-allowed
        "
      >
        Next
      </button>
    </div>
  );
}
