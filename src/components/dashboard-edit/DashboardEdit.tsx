import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import Button from '@/components/common/button/Button';
import ColorChips from '@/components/common/color-chips/ColorChips';
import GoBack from '@/components/common/go-back/GoBack';
import InputForm from '@/components/common/input-form/InputForm';
import Input from '@/components/common/input/Input';
import PageControl from '@/components/common/page-control/PageControl';
import Section from '@/components/common/section/Section';
import Sections from '@/components/common/sections/Sections';
import DashboardDelete from '@/components/dashboard-edit/dashboard-delete/DashboardDelete';
import List from '@/components/dashboard-edit/list/List';
import AddBoxIcon from '@/assets/icons/AddBoxIcon';
import styles from './DashboardEdit.module.scss';

const cx = classNames.bind(styles);

export default function DashboardEdit() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className={cx('wrap')}>
      <GoBack onClick={handleBackClick} />
      <Sections>
        <Section>
          <div className={cx('title')}>
            <h3>비브리지</h3>
            <ColorChips />
          </div>
          <InputForm buttonText="변경">
            <Input label="대시보드 이름" />
          </InputForm>
        </Section>
        <Section>
          <div className={cx('title')}>
            <h3>구성원</h3>
            <div className={cx('control')}>
              <span>1 페이지 중 1</span>
              <PageControl />
            </div>
          </div>
          <List label="이름" section="members" />
        </Section>
        <Section>
          <div className={cx('title')}>
            <h3>초대 내역</h3>
            <div className={cx('control')}>
              <span>1 페이지 중 1</span>
              <PageControl />
              <Button type="invitation" icon={<AddBoxIcon fill="white" />}>
                초대하기
              </Button>
            </div>
          </div>
          <List label="이메일" section="invitation" />
        </Section>
      </Sections>
      <DashboardDelete />
    </div>
  );
}
