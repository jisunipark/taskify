export interface User {
  id: 0;
  nickname: string;
  email: string;
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

/* Dashboard */

export interface Dashboard {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  userId: number;
}

export interface Dashboards {
  cursorId: number;
  totalCount: number;
  dashboards: Dashboard[];
}

/* Invitation */

export interface InvitationUser {
  nickname: string;
  email: string;
  id: 0;
}
export interface Invitation {
  id: 0;
  inviter: InvitationUser;
  teamId: string;
  dashboard: Dashboard;
  invitee: InvitationUser;
  inviteAccepted: true;
  createdAt: string;
  updatedAt: string;
}

export interface Invitations {
  totalCount: number;
  invitations: Invitation[];
}

/* Comment */

export interface CommentUser {
  profileImageUrl: string;
  nickname: string;
  id: number;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  cardId: number;
  author: CommentUser;
}

export interface Comments {
  cursorId: number;
  comments: Comment[];
}

/* Column */

export interface Column {
  id: number;
  title: string;
  teamId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Columns {
  result: string;
  data: Column[];
}

/* Card */

export interface CardUser {
  profileImageUrl: string;
  nickname: string;
  id: number;
}

export interface Card {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: CardUser;
  imageUrl: string;
  teamId: string;
  columnId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Cards {
  cursorId: number;
  totalCount: number;
  cards: Card[];
}
