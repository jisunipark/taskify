import classNames from 'classnames/bind';
import ButtonPair from '@/components/common/button-pair/ButtonPair';
import ColorChips from '@/components/common/color-chips/ColorChips';
import Input from '@/components/common/input/Input';
import styles from './CreateDashboardModal.module.scss';

const cx = classNames.bind(styles);

interface CreateDashboardModalProps {
  closeClick: () => void;
}

export default function CreateDashboardModal({ closeClick }: CreateDashboardModalProps) {
  return (
    <form method="dialog" className={cx('wrap')}>
      <span className={cx('modal-title')}>새로운 대시보드</span>
      <Input type="text" label="대시보드 이름" placeholder="대시보드 이름" />
      <ColorChips />
      <div onClick={closeClick} className={cx('button')}>
        <ButtonPair type="modal" primaryText="생성" secondaryText="취소" />
      </div>
    </form>
  );
}
