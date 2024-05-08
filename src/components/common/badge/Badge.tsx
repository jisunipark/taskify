import classNames from 'classnames/bind';
import styles from './Badge.module.scss';

const cx = classNames.bind(styles);

interface BadgeProps {
  type: 'tag' | 'count';
  children: string;
}

export default function Badge({ children, type }: BadgeProps) {
  return <span className={cx('badge', type)}>{children}</span>;
}
