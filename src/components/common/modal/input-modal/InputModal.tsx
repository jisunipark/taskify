import classNames from 'classnames/bind';
import ButtonPair from '@/components/common/button-pair/ButtonPair';
import styles from './InputModal.module.scss';

const cx = classNames.bind(styles);

interface InputModalProps {
  closeClick: () => void;
}

export default function InputModal({ closeClick }: InputModalProps) {
  return (
    <form method="dialog" className={cx('wrap')}>
      <span className={cx('modal-text')}>새로운 대시보드</span>
      <div onClick={closeClick} className={cx('button')}>
        <ButtonPair type="modal" primaryText="삭제" secondaryText="취소" />
      </div>
    </form>
  );
}
