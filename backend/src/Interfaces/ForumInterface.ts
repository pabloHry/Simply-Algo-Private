export interface DatabaseForumInterface {
  msg: string;
  firstname: string;
  star1: boolean;
  star2: boolean;
  star3: boolean;
  star4: boolean;
  star5: boolean;
  _id: string;
}

export interface ForumInterface {
  msg: string;
  msgCreated: number;
  subjectCreated: number;
  subject: string;
  title: boolean;
  _id: string;
}
