import instance from '@/lib/axios';
import { Invitation, Invitations } from '@/types/dataType';

interface RespondInfo {
  inviteAccepted: boolean;
}

// 내가 받은 초대 목록 조회
export const getMyInvitationList = async (size?: number, cursorId?: number, title?: string) => {
  const query = `?size=${size}&cursorId=${cursorId}&title=${title}`;
  const res = await instance.get(`invitations${query}`);
  return res.data as Invitations;
};

// 초대 응답
export const respondInvitation = async (invitationId: number, body: RespondInfo) => {
  const res = await instance.put(`invitations/${invitationId}`, body);
  return res.data as Invitation;
};
