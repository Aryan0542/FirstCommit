export default function EmptyState({ onResetFilters }) {
  return (
    <div className="w-full flex items-center justify-center py-24 px-4">
      <div
        className="
          w-full
          max-w-xl
          text-center
          
          rounded-2xl
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-sm
          p-10
        "
      >
        <div className="space-y-5">
          
          {/* Headline */}
          <h2 className="text-xl font-semibold tracking-tight text-gray-100">
            No issues found
          </h2>

          {/* Supporting Text */}
          <p className="text-sm leading-relaxed text-gray-400 max-w-md mx-auto">
            Your current filters returned no results. Try broadening your search
            or resetting the filters to discover more issues.
          </p>

          {/* Optional Action */}
          {onResetFilters && (
            <button
              onClick={onResetFilters}
              className="
                mt-3
                inline-flex items-center justify-center
                
                rounded-xl
                px-5 py-2.5
                
                text-sm font-medium
                text-gray-200
                
                bg-white/5
                border border-white/10
                
                transition-all
                duration-200
                ease-out
                
                hover:bg-white/10
                hover:border-white/20
                hover:-translate-y-[1px]
                
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white/20
              "
            >
              Reset Filters
            </button>
          )}

        </div>
      </div>
    </div>
  );
}
