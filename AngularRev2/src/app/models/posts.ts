import {Account} from './account';
import {Content} from './content';

export class Posts {
  postId: number;
  authorId: Account;
  parentPostId: number;
  flaggedForReview: boolean;
  likes: number;
  dislikes: number;
  lastActivityDate: number;
  contentId: Content;
}
