import classNames from 'classnames/bind';
import ArrowForward from '@/assets/icons/ArrowForward';
import styles from './GoBack.module.scss';

const cx = classNames.bind(styles);

interface GoBackProps {
  onClick: () => void;
}

export default function GoBack({ onClick }: GoBackProps) {
  return (
    <button type="button" onClick={onClick} className={cx('wrap')}>
      <ArrowForward />
      <span>돌아가기</span>
    </button>
  );
}
