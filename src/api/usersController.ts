import instance from '@/lib/axios';
import { User } from '@/types/usersType';

export interface SignupInfo {
  email: string;
  nickname: string;
  password: string;
}

export interface MyInfo {
  nickname: string;
  profileImageUrl: string;
}

// 회원가입
export const signup = async (body: SignupInfo) => {
  const res = await instance.post('users', body);
  return res.data;
};

// 내 정보 조회
export const getMyInfo = async () => {
  const res = await instance.get('users/me');
  return res.data as User;
};

// 내 정보 수정
export const editMyInfo = async (body: MyInfo) => {
  const res = await instance.put('users/me', body);
  return res.data as User;
};

// 프로필 이미지 업로드
export const uploadMyImage = async (url: string) => {
  const res = await instance.put('users/me/image', url);
  return res.data;
};
