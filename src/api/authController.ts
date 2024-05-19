import { Inputs } from '@/components/auth/auth-form/SignInForm';
import instance from '@/lib/axios';

// 로그인
export const signin = async (body: Inputs) => {
  const res = await instance.post('auth/login', body);
  return res.data;
};

// 비밀번호 변경
export const changePassword = async (body: { password: string; newPassword: string }) => {
  const res = await instance.put('auth/password', body);
  return res.data;
};
