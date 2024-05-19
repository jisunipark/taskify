export interface User {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Member extends User {
  isOwner: boolean;
}

export interface Members {
  members: Member[];
  totalCount: number;
}
