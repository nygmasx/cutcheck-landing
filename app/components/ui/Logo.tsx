export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background square with rounded corners */}
      <rect width="32" height="32" rx="2" fill="#CCFF00" />

      {/* Letter "C" */}
      <text
        x="16"
        y="16"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="20"
        fontWeight="bold"
        fill="#000000"
        textAnchor="middle"
        dominantBaseline="central"
        letterSpacing="-0.05em"
      >
        C
      </text>
    </svg>
  );
}
