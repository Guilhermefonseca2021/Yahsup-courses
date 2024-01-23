import { User } from "./user";

export interface Video {
  _id?: string;
  title: string;
  description: string;
  published?: string;
  author?: User;
  authorId?: string;
}
