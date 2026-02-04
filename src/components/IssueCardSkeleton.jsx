export default function IssueCardSkeleton() {
  return (
    <div
      className="
        relative
        overflow-hidden
        
        bg-[#15171C]
        rounded-2xl
        border border-white/10
        p-6
      "
    >
      {/* Shimmer Layer */}
      <div
        className="
          absolute inset-0
          -translate-x-full
          animate-[shimmer_2.8s_infinite]
          bg-gradient-to-r
          from-transparent
          via-white/[0.04]
          to-transparent
        "
      />

      <div className="relative space-y-4">
        
        {/* Top Row */}
        <div className="flex items-start justify-between gap-4">
          <div className="h-4 w-32 rounded bg-white/5" />
          <div className="h-5 w-24 rounded-full bg-white/5" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <div className="h-4 w-[85%] rounded bg-white/5" />
          <div className="h-4 w-[60%] rounded bg-white/5" />
        </div>

        {/* Labels */}
        <div className="flex gap-2">
          <div className="h-5 w-16 rounded-full bg-white/5" />
          <div className="h-5 w-20 rounded-full bg-white/5" />
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/[0.04]" />

        {/* Metadata */}
        <div className="flex gap-4">
          <div className="h-3 w-12 rounded bg-white/5" />
          <div className="h-3 w-10 rounded bg-white/5" />
          <div className="h-3 w-20 rounded bg-white/5" />
        </div>

      </div>
    </div>
  );
}
