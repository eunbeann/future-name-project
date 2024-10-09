interface PinkButtonProps {
  text: string;
  onClick?: () => void;
}

export default function PinkButton({ text }: PinkButtonProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="180"
        height="45"
        viewBox="0 0 180 45"
        fill="none"
      >
        <rect y="0.924316" width="180" height="44" fill="white" />
        <path
          d="M177.097 0.925293H0V40.9253H177.097V0.925293Z"
          fill="#F132FF"
        />
        <path
          d="M177.097 0.925293H0L4.42742 3.92529H177.097V0.925293Z"
          fill="#A5A5A5"
        />
        <path
          d="M4.42742 3.92529L0 0.925293V40.9253H4.42742V3.92529Z"
          fill="#656565"
        />
        =
        <text
          x="40"
          y="30"
          fontFamily="var(--font-dunggeunmo)"
          fontSize="30"
          fill="white"
          stroke="black"
          strokeWidth="1.5"
          style={{
            letterSpacing: "-3px",
          }}
        >
          {text}
        </text>
        =
      </svg>
    </>
  );
}
