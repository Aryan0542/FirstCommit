export default function ErrorState({ onRetry }) {
  return (
    <div className="w-full flex items-center justify-center py-16 px-4">
      <div
        className="
          w-full
          max-w-md
          text-center
          
          bg-[#15171C]
          rounded-2xl
          border border-white/10
          p-8
        "
      >
        <div className="space-y-6">
          
          {/* Message */}
          <p className="text-gray-300 leading-relaxed">
            Something went wrong. Please try again.
          </p>

          {/* Optional Retry */}
          {onRetry && (
            <button
              onClick={onRetry}
              className="
                inline-flex items-center justify-center
                
                rounded-xl
                px-4 py-2.5
                
                text-sm
                font-medium
                text-gray-200
                
                bg-white/5
                border border-white/10
                
                transition
                duration-200
                ease-out
                
                hover:bg-white/10
                hover:border-white/20
                
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white/20
              "
            >
              Retry
            </button>
          )}

        </div>
      </div>
    </div>
  );
}
