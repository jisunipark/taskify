import classNames from 'classnames/bind';
import CreateCardModal from '@/components/common/modal/create-card-modal/CreateCardModal';
import useModal from '@/hooks/useModal';
import AddIcon from '@/assets/icons/AddIcon';
import styles from './TaskItem.module.scss';

const cx = classNames.bind(styles);

export default function AddTask() {
  const openModal = useModal();

  const handleCreateCardClick = () => {
    openModal(({ close }) => <CreateCardModal closeClick={close} />);
  };

  return (
    <button type="button" onClick={handleCreateCardClick} className={cx('wrap')}>
      <div className={cx('add-button')}>
        <AddIcon />
      </div>
    </button>
  );
}
