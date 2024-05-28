import classNames from 'classnames/bind';
import InputModal from '@/components/common/modal/input-modal/InputModal';
import useModal from '@/hooks/useModal';
import AddIcon from '@/assets/icons/AddIcon';
import styles from './TaskItem.module.scss';

const cx = classNames.bind(styles);

export default function AddTask() {
  const openModal = useModal();

  const handleCreateCardClick = () => {
    // TODO 할 일 생성 모달
    openModal(({ close }) => <InputModal closeClick={close} />);
  };

  return (
    <button type="button" onClick={handleCreateCardClick} className={cx('wrap')}>
      <div className={cx('add-button')}>
        <AddIcon />
      </div>
    </button>
  );
}
