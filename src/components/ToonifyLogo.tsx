import { useId } from "react";

export const ToonifyLogo = ({ className = "" }: { className?: string }) => {
  const id = useId();

  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 260 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Toonify</title>
      <defs>
        <linearGradient id={id} x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#00C6FF" />
          <stop offset="100%" stopColor="#5A4FCF" />
        </linearGradient>
      </defs>
      <g transform="translate(10, 10)">
        <rect fill={`url(#${id})`} height="20" rx="10" width="60" x="0" y="0" />
        <rect
          fill={`url(#${id})`}
          height="36"
          rx="10"
          width="20"
          x="20"
          y="24"
        />
        <circle cx="30" cy="22" fill="white" opacity="0.5" r="2" />
      </g>
      <text
        className="fill-base-content"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="40"
        fontWeight="700"
        letterSpacing="-1"
        x="85"
        y="52"
      >
        Toon<tspan fill={`url(#${id})`}>ify</tspan>
      </text>
    </svg>
  );
};
