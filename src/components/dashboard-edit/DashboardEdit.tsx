import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import Button from '@/components/common/button/Button';
import GoBack from '@/components/common/go-back/GoBack';
import Input from '@/components/common/input/Input';
import Section from '@/components/common/section/Section';
import Sections from '@/components/common/sections/Sections';
import DashboardDelete from '@/components/dashboard-edit/dashboard-delete/DashboardDelete';
import List from '@/components/dashboard-edit/list/List';
import ListItem from '@/components/dashboard-edit/list/ListItem';
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
          <h3>비브리지</h3>
          <Input label="대시보드 이름" />
          <Button type="normal">변경</Button>
        </Section>
        <Section>
          <h3>구성원</h3>
          <h4>이름</h4>
          <List section="members" />
        </Section>
        <Section>
          <h3>비브리지</h3>
          <h4>이메일</h4>
          <List section="invitation" />
        </Section>
      </Sections>
      <DashboardDelete />
    </div>
  );
}
