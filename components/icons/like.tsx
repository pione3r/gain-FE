interface LikeProps {
  width?: number
  height?: number
}

export default function Like({ width = 24, height = 20 }: LikeProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 4.15428C8 -0.540161 1 -0.0401611 1 5.95987C1 11.9599 10 16.9601 10 16.9601C10 16.9601 19 11.9599 19 5.95987C19 -0.0401611 12 -0.540161 10 4.15428Z"
        stroke="#767676"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
