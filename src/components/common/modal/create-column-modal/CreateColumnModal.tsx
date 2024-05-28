import classNames from 'classnames/bind';
import ButtonPair from '@/components/common/button-pair/ButtonPair';
import Input from '@/components/common/input/Input';
import styles from './CreateColumnModal.module.scss';

const cx = classNames.bind(styles);

interface CreateColumnModalProps {
  closeClick: () => void;
}

export default function CreateColumnModal({ closeClick }: CreateColumnModalProps) {
  return (
    <form method="dialog" className={cx('wrap')}>
      <span className={cx('modal-title')}>새 컬럼 생성</span>
      <Input type="text" label="이름" placeholder="컬럼 이름" />
      <div onClick={closeClick} className={cx('button')}>
        <ButtonPair type="modal" primaryText="생성" secondaryText="취소" />
      </div>
    </form>
  );
}
