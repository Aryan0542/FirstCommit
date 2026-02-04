import React from "react";

const IssueCard = ({ issue }) => {
  if (!issue) return null;

  const repoName = issue.repository_url
    ?.replace("https://api.github.com/repos/", "");

  const updatedAt = new Date(issue.updated_at).toLocaleDateString();

  return (
    <a
      href={issue.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        relative
        block

        bg-[#15171C]
        rounded-2xl
        border border-white/10
        p-6

        transform-gpu
        transition-all
        duration-200
        ease-out

        hover:-translate-y-1
        hover:border-white/20
        hover:shadow-xl hover:shadow-black/25

        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-emerald-400/40
      "
    >
      <div className="space-y-4">

        {/* Top Row */}
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm text-gray-400 truncate">
            {repoName}
          </p>

          {issue.labels?.some(l => l.name.toLowerCase().includes("good first")) && (
            <span
              className="
                shrink-0
                text-xs
                px-2.5 py-1
                rounded-full
                bg-emerald-400/10
                text-emerald-300
                border border-emerald-400/20
              "
            >
              Good First Issue
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="
            text-[15px]
            leading-relaxed
            font-semibold
            text-gray-100
            line-clamp-2
            transition-colors
            group-hover:text-white
          "
        >
          {issue.title}
        </h3>

        {/* Labels */}
        <div className="flex flex-wrap gap-2">
          {issue.labels?.slice(0, 3).map((label) => (
            <span
              key={label.id}
              className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300"
            >
              {label.name}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/5" />

        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="group-hover:text-gray-300 transition-colors">
            #{issue.number}
          </span>
          <span className="group-hover:text-gray-300 transition-colors">
            Updated {updatedAt}
          </span>
        </div>

      </div>
    </a>
  );
};

export default React.memo(IssueCard);
