import instance from '@/lib/axios';
import { Dashboard, Dashboards, Invitation, Invitations } from '@/types/dataType';

interface DashboardInfo {
  title: string;
  color: string;
}

// 대시보드 생성
export const createDashboard = async (body: DashboardInfo) => {
  const res = await instance.post('dashboards', body);
  return res.data as Dashboard;
};

// 대시보드 목록 조회
export const getDashboardList = async (
  navigationMethod: 'infiniteScroll' | 'pagenation',
  cursorId?: number,
  page?: number,
  size?: number,
) => {
  const query = `?navigationMethod=${navigationMethod}&cursorId=${cursorId}&page=${page}&size=${size}`;
  const res = await instance.get(`dashboards${query}`);
  return res.data as Dashboards;
};

// 대시보드 상세 조회
export const getDashboardDetail = async (dashbaordId: number) => {
  const res = await instance.get(`dashboards/${dashbaordId}`);
  return res.data as Dashboard;
};

// 대시보드 수정
export const editDashboard = async (dashbaordId: number, body: DashboardInfo) => {
  const res = await instance.put(`dashboards/${dashbaordId}`, body);
  return res.data as Dashboard;
};

// 대시보드 삭제
export const deleteDashboard = async (dashbaordId: number) => {
  const res = await instance.delete(`dashboards/${dashbaordId}`);
  return res.data;
};

// 대시보드 초대하기
export const inviteToDashboard = async (dashbaordId: number) => {
  const res = await instance.post(`dashboards/${dashbaordId}/invitations`, dashbaordId);
  return res.data as Invitation;
};

// 대시보드 초대 불러오기
export const getDashboardInvitation = async (dashbaordId: number, page?: number, size?: number) => {
  const query = `?page=${page}&size=${size}`;
  const res = await instance.get(`dashboards/${dashbaordId}/invitations${query}`);
  return res.data as Invitations;
};

// 대시보드 초대 취소
export const cancelDashboardInvitation = async (dashbaordId: number, invitationId: number) => {
  const res = await instance.delete(`dashboards/${dashbaordId}/invitations/${invitationId}`);
  return res.data;
};
