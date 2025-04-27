import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './schemas/post.schema';
import { PostsController } from './posts.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  ],
  providers: [PostsService, JwtService],
  controllers: [PostsController],
  exports: [PostsService],
})
export class PostsModule {}
