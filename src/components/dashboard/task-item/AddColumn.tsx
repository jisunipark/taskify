import classNames from 'classnames/bind';
import InputModal from '@/components/common/modal/input-modal/InputModal';
import useModal from '@/hooks/useModal';
import AddIcon from '@/assets/icons/AddIcon';
import styles from './TaskItem.module.scss';

const cx = classNames.bind(styles);

export default function AddColumn() {
  const openModal = useModal();

  const handleCreateColumnClick = () => {
    // TODO 컬럼 생성 모달
    openModal(({ close }) => <InputModal closeClick={close} />);
  };

  return (
    <button type="button" onClick={handleCreateColumnClick} className={cx('wrap', 'add-column')}>
      <span>새로운 컬럼 추가하기</span>
      <div className={cx('add-button')}>
        <AddIcon />
      </div>
    </button>
  );
}
