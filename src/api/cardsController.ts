import instance from '@/lib/axios';
import { Card, Cards } from '@/types/dataType';

export interface CardInfo {
  assigneeUserId: number;
  dashboardId: number;
  columnId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl: string;
}

export interface CardEditInfo {
  columnId: number;
  assigneeUserId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl: string;
}

// 카드 생성
export const createCard = async (body: CardInfo) => {
  const res = await instance.post('cards', body);
  return res.data as Card;
};

// 카드 목록 조회
export const getCardList = async (columnId: number, size?: number, cursorId?: number) => {
  const query = `?size=${size}&cursorId=${cursorId}&columnId=${columnId}`;
  const res = await instance.get(`cards${query}`);
  return res.data as Cards;
};

// 카드 수정
export const editCard = async (cardId: number, body: CardEditInfo) => {
  const res = await instance.put(`cards/${cardId}`, body);
  return res.data as Card;
};

// 카드 상세 조회
export const getCardDetail = async (cardId: number) => {
  const res = await instance.get(`cards/${cardId}/card-image`);
  return res.data as Card;
};

// 카드 삭제
export const deleteCard = async (cardId: number) => {
  const res = await instance.delete(`cards/${cardId}`);
  return res.data;
};
