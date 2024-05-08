import classNames from 'classnames/bind';
import styles from './Badge.module.scss';

const cx = classNames.bind(styles);

interface BadgeProps {
  children: string;
}

export default function Badge({ children }: BadgeProps) {
  return <span className={cx('badge')}>{children}</span>;
}
