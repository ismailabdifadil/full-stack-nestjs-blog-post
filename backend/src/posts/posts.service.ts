import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Post } from './schemas/post.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePostDto } from './dto/create-post-dto';
import { Request } from 'express';

interface RequestWithUser extends Request {
  user: {
    email: string;
    sub: string;
  };
}

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async getPosts(): Promise<Post[]> {
    return this.postModel.find().sort({ createdAt: -1 }).populate('author', 'username').exec();
  }

  async createPost(post: CreatePostDto, req: RequestWithUser): Promise<Post> {
    const newPost = new this.postModel({
      ...post,
      author: req.user.sub,
      excerpt: post.excerpt || post.content.substring(0, 40),
    });

    const createdPost = await newPost.save();
    return createdPost;
  }
}
