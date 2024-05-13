import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './Section.module.scss';

const cx = classNames.bind(styles);

interface SectionProps {
  children: ReactNode;
}

export default function Section({ children }: SectionProps) {
  return <div className={cx('wrap')}>{children}</div>;
}
