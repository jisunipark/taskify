import { IconProps } from '@/types/iconType';

export default function CrownIcon({ fill, ...styleProps }: IconProps) {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...styleProps}
    >
      <g id="8541713_crown_icon 3" clipPath="url(#clip0_540_4887)">
        <path
          id="Vector"
          d="M14.5115 12.25H3.07821C2.83635 12.25 2.63846 12.4469 2.63846 12.6875V13.5625C2.63846 13.8031 2.83635 14 3.07821 14H14.5115C14.7534 14 14.9513 13.8031 14.9513 13.5625V12.6875C14.9513 12.4469 14.7534 12.25 14.5115 12.25ZM16.2705 3.5C15.5422 3.5 14.9513 4.08789 14.9513 4.8125C14.9513 5.00664 14.9953 5.18711 15.0722 5.35391L13.0824 6.54063C12.6591 6.79219 12.1122 6.65 11.8676 6.22344L9.62764 2.32422C9.92171 2.08359 10.1141 1.72266 10.1141 1.3125C10.1141 0.587891 9.5232 0 8.79487 0C8.06655 0 7.47564 0.587891 7.47564 1.3125C7.47564 1.72266 7.66803 2.08359 7.96211 2.32422L5.72216 6.22344C5.47756 6.65 4.92788 6.79219 4.50737 6.54063L2.52028 5.35391C2.59449 5.18984 2.64121 5.00664 2.64121 4.8125C2.64121 4.08789 2.0503 3.5 1.32198 3.5C0.593654 3.5 0 4.08789 0 4.8125C0 5.53711 0.590905 6.125 1.31923 6.125C1.39069 6.125 1.46215 6.11406 1.53086 6.10313L3.51795 11.375H14.0718L16.0589 6.10313C16.1276 6.11406 16.1991 6.125 16.2705 6.125C16.9988 6.125 17.5897 5.53711 17.5897 4.8125C17.5897 4.08789 16.9988 3.5 16.2705 3.5Z"
          fill={fill || '#FDD446'}
        />
      </g>
      <defs>
        <clipPath id="clip0_540_4887">
          <rect width="17.5897" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
