import classNames from 'classnames/bind';
import ButtonPair from '@/components/common/button-pair/ButtonPair';
import Input from '@/components/common/input/Input';
import styles from './InviteModal.module.scss';

const cx = classNames.bind(styles);

interface InviteModalProps {
  closeClick: () => void;
}

export default function InviteModal({ closeClick }: InviteModalProps) {
  return (
    <form method="dialog" className={cx('wrap')}>
      <span className={cx('modal-title')}>초대하기</span>
      <Input type="email" label="이메일" placeholder="email@taskify.com" />
      <div onClick={closeClick} className={cx('button')}>
        <ButtonPair type="modal" primaryText="초대" secondaryText="취소" />
      </div>
    </form>
  );
}
