import { IconProps } from '@/types/iconType';

export default function UnsubscribeIcon({ fill, ...styleProps }: IconProps) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...styleProps}
    >
      <g id="unsubscribe_FILL1_wght300_GRAD0_opsz24 1">
        <path
          id="Vector"
          d="M50 45.8332L21.0816 27.3316C20.2216 26.7814 19.3442 26.7333 18.4495 27.1873C17.5547 27.6413 17.0673 28.3625 16.9872 29.3507C16.907 29.8689 16.9658 30.3683 17.1634 30.8491C17.3611 31.3298 17.6976 31.7171 18.173 32.0109L47.9728 51.0495C48.6171 51.4394 49.2937 51.6344 50.0025 51.6344C50.7113 51.6344 51.3862 51.4394 52.0272 51.0495L81.827 32.0109C82.3024 31.7171 82.6456 31.3298 82.8565 30.8491C83.0675 30.3683 83.1196 29.8689 83.0128 29.3507C82.9327 28.3625 82.4452 27.648 81.5505 27.2074C80.6557 26.7667 79.7783 26.8215 78.9183 27.3717L50 45.8332ZM79.1666 93.7497C73.9637 93.7497 69.538 91.9255 65.8895 88.2771C62.241 84.6285 60.4167 80.2028 60.4167 74.9999C60.4167 69.797 62.241 65.3713 65.8895 61.7227C69.538 58.0742 73.9637 56.25 79.1666 56.25C84.3696 56.25 88.7953 58.0742 92.4438 61.7227C96.0923 65.3713 97.9165 69.797 97.9165 74.9999C97.9165 80.2028 96.0923 84.6285 92.4438 88.2771C88.7953 91.9256 84.3696 93.7498 79.1666 93.7498V93.7497ZM69.8719 76.8428H88.4707C88.9667 76.8428 89.3963 76.6585 89.7595 76.2899C90.1227 75.9214 90.3044 75.4914 90.3044 74.9999C90.3044 74.5084 90.1201 74.0784 89.7515 73.7099C89.3829 73.3413 88.9529 73.157 88.4614 73.157H69.8626C69.3666 73.157 68.937 73.3413 68.5738 73.7099C68.2106 74.0784 68.0289 74.5084 68.0289 74.9999C68.0289 75.4914 68.2132 75.9214 68.5818 76.2899C68.9504 76.6585 69.3804 76.8428 69.8719 76.8428ZM17.9488 81.2498C15.8775 81.2498 14.1044 80.5123 12.6294 79.0372C11.1543 77.5622 10.4167 75.789 10.4167 73.7177V26.2821C10.4167 24.2108 11.1543 22.4376 12.6294 20.9626C14.1044 19.4875 15.8775 18.75 17.9488 18.75H82.0511C84.1224 18.75 85.8956 19.4875 87.3706 20.9626C88.8457 22.4376 89.5832 24.2108 89.5832 26.2821V50.1122C87.9326 49.3804 86.2392 48.8315 84.5031 48.4656C82.767 48.0997 80.9882 47.9167 79.1666 47.9167C71.6221 47.9167 65.2221 50.5444 59.9666 55.7999C54.7112 61.0553 52.0834 67.4553 52.0834 74.9999C52.0834 76.0416 52.1475 77.0832 52.2758 78.1248C52.404 79.1665 52.623 80.2081 52.9328 81.2498H17.9488Z"
          fill={fill || '#D9D9D9'}
        />
      </g>
    </svg>
  );
}