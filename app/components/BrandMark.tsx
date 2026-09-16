export default function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <g transform="translate(50 50)">
        <rect
          x="-24"
          y="-24"
          width="34"
          height="34"
          rx="5"
          fill="#16296b"
          transform="rotate(45)"
        />
        <rect
          x="8"
          y="-9"
          width="18"
          height="18"
          rx="3"
          fill="#6fa1ff"
          opacity="0.9"
          transform="translate(10,0) rotate(45)"
        />
        <rect
          x="-26"
          y="-9"
          width="18"
          height="18"
          rx="3"
          fill="#6fa1ff"
          opacity="0.55"
          transform="translate(-10,0) rotate(45)"
        />
      </g>
    </svg>
  );
}