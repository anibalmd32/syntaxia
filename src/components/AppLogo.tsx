import { useId } from "react";

export const AppLogo = ({ className = "" }: { className?: string }) => {
  const id = useId();

  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 280 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Syntaxia</title>
      <defs>
        <linearGradient id={id} x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#00C6FF" />
          <stop offset="100%" stopColor="#5A4FCF" />
        </linearGradient>
      </defs>
      <g transform="translate(10, 18)">
        {/* Icono abstracto S formado por < /> */}
        <path
          d="M15 10 L5 20 L15 30"
          stroke={`url(#${id})`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6"
        />
        <path
          d="M45 10 L55 20 L45 30"
          stroke={`url(#${id})`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6"
        />
        <path
          d="M25 45 L35 5"
          stroke={`url(#${id})`}
          strokeLinecap="round"
          strokeOpacity="0.5"
          strokeWidth="4"
        />
      </g>
      <text
        className="fill-base-content"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="40"
        fontWeight="800"
        letterSpacing="-1.5"
        x="75"
        y="52"
      >
        Syntax<tspan fill={`url(#${id})`}>ia</tspan>
      </text>
    </svg>
  );
};
