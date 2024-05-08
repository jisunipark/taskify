import { IconProps } from '@/types/iconType';

export default function VerticalStroke({ fill, ...styleProps }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="34"
      viewBox="0 0 2 34"
      fill="none"
      {...styleProps}
    >
      <path d="M1 0V34" stroke={fill || '#D9D9D9'} />
    </svg>
  );
}
