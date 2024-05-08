import classNames from 'classnames/bind';
import LogoImg from '@/assets/LogoImg';
import LogoText from '@/assets/LogoText';
import styles from './LnbLogo.module.scss';

const cx = classNames.bind(styles);

export default function LnbLogo() {
  return (
    <div className={cx('logo')}>
      <LogoImg size="sm" className={cx('logo-img')} />
      <LogoText size="sm" className={cx('logo-text')} />
    </div>
  );
}
