import { type SVGProps, useId } from "react";

interface AppLogoProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export const AppLogo = ({ className = "", ...props }: AppLogoProps) => {
  const id = useId();

  return (
    <svg
      aria-label="Syntaxia Logo"
      className={className}
      fill="none"
      height="100%"
      viewBox="0 0 245 70"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Syntaxia</title>
      <defs>
        <linearGradient id={id} x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#00C6FF" />
          <stop offset="100%" stopColor="#5A4FCF" />
        </linearGradient>
      </defs>

      <g transform="translate(1, 8)">
        <rect
          fill={`url(#${id})`}
          height="48"
          opacity="0.12"
          rx="8"
          width="60"
          x="8"
          y="4"
        />

        <rect
          fill="none"
          height="40"
          rx="6"
          stroke={`url(#${id})`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          width="52"
          x="12"
          y="8"
        />

        <circle cx="29" cy="28" fill="#ffffff" opacity="0.92" r="6" />
        <circle cx="47" cy="28" fill="#ffffff" opacity="0.92" r="6" />
        <circle cx="29" cy="28" fill={`url(#${id})`} r="3.5" />
        <circle cx="47" cy="28" fill={`url(#${id})`} r="3.5" />
        <line
          stroke={`url(#${id})`}
          strokeLinecap="round"
          strokeWidth="3"
          x1="38"
          x2="38"
          y1="6"
          y2="0"
        />
        <circle cx="38" cy="0" fill={`url(#${id})`} r="2" />
      </g>

      <text
        className="fill-base-content"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="40"
        fontWeight="800"
        letterSpacing="-1.5"
        x="78"
        y="50"
      >
        Syntax<tspan fill={`url(#${id})`}>ia</tspan>
      </text>
    </svg>
  );
};
