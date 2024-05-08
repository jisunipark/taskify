import classNames from 'classnames/bind';
import AddIcon from '@/assets/icons/AddIcon';
import styles from './TaskItem.module.scss';

const cx = classNames.bind(styles);

export default function AddColumn() {
  return (
    <button type="button" className={cx('wrap', 'add-column')}>
      <span>새로운 컬럼 추가하기</span>
      <div className={cx('add-button')}>
        <AddIcon />
      </div>
    </button>
  );
}
