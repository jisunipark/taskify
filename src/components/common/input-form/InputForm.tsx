import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import Button from '@/components/common/button/Button';
import styles from './InputForm.module.scss';

const cx = classNames.bind(styles);

interface InputFormProps {
  children: ReactNode;
  buttonText: string;
}

export default function InputForm({ children, buttonText }: InputFormProps) {
  return (
    <form className={cx('wrap')}>
      <div className={cx('inputs')}>{children}</div>
      <Button type="normal">{buttonText}</Button>
    </form>
  );
}
