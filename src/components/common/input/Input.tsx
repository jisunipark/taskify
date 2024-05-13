import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

interface InputProps {
  type?: 'text' | 'email' | 'password';
  label: string;
  placeholder?: string;
}

export default function Input({ type = 'text', label, placeholder }: InputProps) {
  return (
    <div className={cx('wrap')}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}
