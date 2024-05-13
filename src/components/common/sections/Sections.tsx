import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './Sections.module.scss';

const cx = classNames.bind(styles);

interface SectionsProps {
  children: ReactNode;
}

export default function Sections({ children }: SectionsProps) {
  return <div className={cx('wrap')}>{children}</div>;
}
