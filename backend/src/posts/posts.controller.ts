import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostDocument } from './schemas/post.schema';
import { CreatePostDto } from './dto/create-post-dto';
import { JwtAuthGuard } from 'src/auth/guards/auth-guard';
import { Request } from 'express';

interface RequestWithUser extends Request {
  user: {
    email: string;
    sub: string;
  };
}

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get()
  async getPosts(): Promise<PostDocument[]> {
    return this.postService.getPosts();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createPost(
    @Body() post: CreatePostDto,
    @Req() req: RequestWithUser,
  ): Promise<PostDocument> {
    console.log('the post is', post);
    return this.postService.createPost(post, req);
  }
}
