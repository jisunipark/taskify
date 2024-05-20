import instance from '@/lib/axios';
import { Members } from '@/types/dataType';

// 대시보드 멤버 목록 조회
export const getDashboardMemberList = async (dashboardId: number, page?: number, size?: number) => {
  const query = `?page=${page}&size=${size}&dashboardId=${dashboardId}`;
  const res = await instance.get(`members${query}`);
  return res.data as Members;
};

// 대시보드 멤버 삭제
export const deleteDashboardMember = async (memberId: number) => {
  const res = await instance.delete(`members/${memberId}`);
  return res.data;
};
