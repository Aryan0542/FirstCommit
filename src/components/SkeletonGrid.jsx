import IssueCardSkeleton from "./IssueCardSkeleton";

export default function SkeletonGrid({ count = 6 }) {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
      "
    >
      {Array.from({ length: count }).map((_, i) => (
        <IssueCardSkeleton key={i} />
      ))}
    </div>
  );
}
