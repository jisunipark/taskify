import classNames from 'classnames/bind';
import ButtonPair from '@/components/common/button-pair/ButtonPair';
import Input from '@/components/common/input/Input';
import ConfirmModal from '@/components/common/modal/confirm-modal/ConfirmModal';
import useModal from '@/hooks/useModal';
import styles from './EditColumnModal.module.scss';

const cx = classNames.bind(styles);

interface EditColumnModalProps {
  closeClick: () => void;
}

export default function EditColumnModal({ closeClick }: EditColumnModalProps) {
  const openModal = useModal();

  const handleColumnDeleteClick = () => {
    closeClick();
    openModal(({ close }) => (
      <ConfirmModal
        closeClick={close}
        message="컬럼의 모든 카드가 삭제됩니다."
        hasButtonPair={true}
      />
    ));
  };

  return (
    <form method="dialog" className={cx('wrap')}>
      <span className={cx('modal-title')}>컬럼 관리</span>
      <Input type="text" label="이름" placeholder="컬럼 이름" />
      <div className={cx('bottom')}>
        <button type="button" onClick={handleColumnDeleteClick} className={cx('delete-button')}>
          삭제하기
        </button>
        <div onClick={closeClick} className={cx('buttons')}>
          <ButtonPair type="modal" primaryText="생성" secondaryText="취소" />
        </div>
      </div>
    </form>
  );
}
