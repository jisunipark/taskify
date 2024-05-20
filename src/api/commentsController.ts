import instance from '@/lib/axios';
import { Comment, Comments } from '@/types/dataType';

export interface CommentInfo {
  content: string;
  cardId: number;
  columnId: number;
  dashboardId: number;
}

export interface CommentContentInfo {
  content: string;
}

// 댓글 생성
export const createComment = async (body: CommentInfo) => {
  const res = await instance.post('comments', body);
  return res.data as Comment;
};

// 댓글 목록 조회
export const getCommentList = async (cardId: number, size?: number, cursorId?: number) => {
  const query = `?size=${size}&cursorId=${cursorId}&cardId=${cardId}`;
  const res = await instance.get(`comments${query}`);
  return res.data as Comments;
};

// 댓글 수정
export const editComment = async (commentId: number, body: CommentContentInfo) => {
  const res = await instance.put(`comments/${commentId}`, body);
  return res.data;
};

// 댓글 삭제
export const deleteComment = async (commentId: number) => {
  const res = await instance.delete(`comments/${commentId}`);
  return res.data;
};
