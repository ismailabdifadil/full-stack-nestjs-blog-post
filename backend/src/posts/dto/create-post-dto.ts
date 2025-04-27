export class CreatePostDto {
  title: string;
  content: string;
  author: string;
  tags: string[];
  coverImage: string;
  excerpt?: string;
}
