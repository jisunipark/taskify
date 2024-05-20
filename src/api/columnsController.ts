import instance from '@/lib/axios';
import { Column, Columns } from '@/types/dataType';

export interface ColumnInfo {
  title: string;
  dashboardId: number;
}

export interface ColumnTitleInfo {
  title: string;
}

// 컬럼 생성
export const createColumn = async (body: ColumnInfo) => {
  const res = await instance.post('columns', body);
  return res.data as Column;
};

// 컬럼 목록 조회
export const getColumnList = async (dashboardId: number) => {
  const query = `?dashboardId=${dashboardId}`;
  const res = await instance.get(`columns${query}`);
  return res.data as Columns;
};

// 컬럼 수정
export const editColumn = async (columnId: number, body: ColumnTitleInfo) => {
  const res = await instance.put(`columns/${columnId}`, body);
  return res.data as Column;
};

// 컬럼 삭제
export const deleteColumn = async (columnId: number) => {
  const res = await instance.delete(`columns/${columnId}`);
  return res.data;
};

// 카드 이미지 업로드
export const uploadCardImage = async (columnId: number, url: string) => {
  const res = await instance.post(`columns/${columnId}/card-image`, url);
  return res.data;
};
