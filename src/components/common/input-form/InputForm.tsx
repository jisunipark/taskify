import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import Button from '@/components/common/button/Button';
import AddIcon from '@/assets/icons/AddIcon';
import styles from './InputForm.module.scss';

const cx = classNames.bind(styles);

interface InputFormProps {
  children: ReactNode;
  buttonText: string;
  hasFile?: boolean;
}

export default function InputForm({ children, buttonText, hasFile = false }: InputFormProps) {
  return (
    <form className={cx('wrap')}>
      <div className={cx('all-inputs')}>
        {hasFile && (
          <div className={cx('file-input')}>
            <AddIcon />
          </div>
        )}
        <div className={cx('text-inputs')}>{children}</div>
      </div>
      <Button type="normal">{buttonText}</Button>
    </form>
  );
}
