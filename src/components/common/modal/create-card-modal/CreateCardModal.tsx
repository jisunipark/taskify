import classNames from 'classnames/bind';
import ButtonPair from '@/components/common/button-pair/ButtonPair';
import Input from '@/components/common/input/Input';
import styles from './CreateCardModal.module.scss';

const cx = classNames.bind(styles);

interface CreateCardModalProps {
  closeClick: () => void;
}

/* TODO 수정 필요 */
export default function CreateCardModal({ closeClick }: CreateCardModalProps) {
  return (
    <form method="dialog" className={cx('wrap')}>
      <span className={cx('modal-title')}>할 일 생성</span>
      <Input type="text" label="담당자" placeholder="이름을 입력해주세요" />
      <Input type="text" label="제목 *" placeholder="제목을 입력해주세요" />
      <Input type="text" label="설명 *" placeholder="설명을 입력해주세요" />
      <Input type="text" label="마감일" placeholder="날짜를 입력해주세요" />
      <Input type="text" label="태그" placeholder="입력 후 Enter" />
      <Input type="text" label="이미지" placeholder="이미지" /> {/* TODO 이미지 넣어야 함 */}
      <div onClick={closeClick} className={cx('button')}>
        <ButtonPair type="modal" primaryText="생성" secondaryText="취소" />
      </div>
    </form>
  );
}
