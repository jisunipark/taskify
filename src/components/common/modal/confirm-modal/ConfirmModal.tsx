import classNames from 'classnames/bind';
import ButtonPair from '@/components/common/button-pair/ButtonPair';
import Button from '@/components/common/button/Button';
import Modal from '@/components/common/modal/Modal';
import styles from './ConfirmModal.module.scss';

const cx = classNames.bind(styles);

interface ConfirmModalProps {
  message: string;
  hasButtonPair?: boolean;
}

export default function ConfirmModal({ message, hasButtonPair = false }: ConfirmModalProps) {
  return (
    <Modal>
      <div className={cx('wrap')}>
        <span className={cx('modal-text')}>{message}</span>
        <div className={cx('button')}>
          {hasButtonPair ? (
            <ButtonPair type="modal" primaryText="삭제" secondaryText="취소" />
          ) : (
            <Button type="modal">확인</Button>
          )}
        </div>
      </div>
    </Modal>
  );
}
