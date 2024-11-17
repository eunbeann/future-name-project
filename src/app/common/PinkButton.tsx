interface PinkButtonProps {
  text: string;
  onClick?: () => void;
}

export default function PinkButton({ text, onClick }: PinkButtonProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="320"
      height="90"
      viewBox="0 0 180 45"
      fill="none"
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <rect y="0.924316" width="180" height="44" fill="white" />
      <path d="M177.097 0.925293H0V40.9253H177.097V0.925293Z" fill="#F132FF" />
      <path
        d="M177.097 0.925293H0L4.42742 3.92529H177.097V0.925293Z"
        fill="#A5A5A5"
      />
      <path
        d="M4.42742 3.92529L0 0.925293V40.9253H4.42742V3.92529Z"
        fill="#656565"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="var(--font-dunggeunmo)"
        fontSize="24"
        fill="white"
        stroke="black"
        strokeWidth="4"
        paintOrder="stroke"
        style={{
          letterSpacing: "-0.5px",
        }}
      >
        {text}
      </text>
    </svg>
  );
}
