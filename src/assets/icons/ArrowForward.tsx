import { IconProps } from '@/types/iconType';

export default function ArrowForward({ fill, ...styleProps }: IconProps) {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...styleProps}
    >
      <g id="arrow_forward_ios_FILL0_wght300_GRAD0_opsz24 1">
        <path
          id="Vector"
          d="M11.7129 8.99998L6.0634 3.35046C5.91437 3.20142 5.84177 3.02402 5.8456 2.81826C5.84945 2.61248 5.9259 2.43508 6.07493 2.28606C6.22397 2.13702 6.40137 2.0625 6.60713 2.0625C6.8129 2.0625 6.9903 2.13702 7.13933 2.28606L12.8812 8.03942C13.0167 8.17499 13.1172 8.32691 13.1826 8.49518C13.248 8.66345 13.2807 8.83172 13.2807 8.99998C13.2807 9.16824 13.248 9.33651 13.1826 9.50479C13.1172 9.67305 13.0167 9.82497 12.8812 9.96054L7.1278 15.7139C6.97877 15.8629 6.80328 15.9355 6.60136 15.9317C6.39945 15.9279 6.22397 15.8514 6.07493 15.7024C5.9259 15.5533 5.85138 15.3759 5.85138 15.1702C5.85138 14.9644 5.9259 14.787 6.07493 14.638L11.7129 8.99998Z"
          fill={fill || '#333236'}
        />
      </g>
    </svg>
  );
}
