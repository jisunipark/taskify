import classNames from 'classnames/bind';
import ButtonPair from '@/components/common/button-pair/ButtonPair';
import Button from '@/components/common/button/Button';
import ModalWrapper from '@/components/common/modal/ModalWrapper';
import styles from './ConfirmModal.module.scss';

const cx = classNames.bind(styles);

interface ConfirmModalProps {
  message: string;
  hasButtonPair?: boolean;
}

export default function ConfirmModal({ message, hasButtonPair = false }: ConfirmModalProps) {
  return (
    <ModalWrapper>
      <form method="dialog" className={cx('wrap')}>
        <span className={cx('modal-text')}>{message}</span>
        <div className={cx('button')}>
          {hasButtonPair ? (
            <ButtonPair type="modal" primaryText="삭제" secondaryText="취소" />
          ) : (
            <Button type="modal">확인</Button>
          )}
        </div>
      </form>
    </ModalWrapper>
  );
}
