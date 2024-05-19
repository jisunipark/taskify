import instance from '@/lib/axios';
import { User } from '@/types/usersType';

interface SigninInfo {
  email: string;
  password: string;
}

interface SigninResponse {
  user: User;
  accessToken: string;
}

interface PasswordInfo {
  password: string;
  newPassword: string;
}

// 로그인
export const signin = async (body: SigninInfo) => {
  const res = await instance.post('auth/login', body);
  return res.data as SigninResponse;
};

// 비밀번호 변경
export const changePassword = async (body: PasswordInfo) => {
  const res = await instance.put('auth/password', body);
  return res.data;
};
