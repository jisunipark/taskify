import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import GoBack from '@/components/common/go-back/GoBack';
import InputForm from '@/components/common/input-form/InputForm';
import Input from '@/components/common/input/Input';
import Section from '@/components/common/section/Section';
import Sections from '@/components/common/sections/Sections';
import styles from './Account.module.scss';

const cx = classNames.bind(styles);

export default function Account() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(`/dashboard/${userId}`);
  };

  return (
    <div className={cx('wrap')}>
      <GoBack onClick={handleBackClick} />
      <Sections>
        <Section>
          <div className={cx('title')}>
            <h3>프로필</h3>
          </div>
          <div className={cx('all-inputs')}>
            <InputForm buttonText="저장" hasFile={true}>
              <Input type="email" label="이메일" />
              <Input type="text" label="닉네임" />
            </InputForm>
          </div>
        </Section>
        <Section>
          <div className={cx('title')}>
            <h3>비밀번호 변경</h3>
          </div>
          <InputForm buttonText="변경">
            <Input type="password" label="현재 비밀번호" />
            <Input type="password" label="새 비밀번호" />
            <Input type="password" label="새 비밀번호 확인" />
          </InputForm>
        </Section>
      </Sections>
    </div>
  );
}
