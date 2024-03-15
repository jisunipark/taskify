import { IconProps } from '@/types/iconType';

export default function EllipseIcon({ fill, ...styleProps }: IconProps) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...styleProps}
    >
      <circle id="Ellipse 47" cx="15" cy="15" r="15" fill={fill || '#760DDE'} />
    </svg>
  );
}
