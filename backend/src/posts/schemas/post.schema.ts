import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema({
  timestamps: true,
})
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  //   Store the excerpt of the post by default the first 40 words from the content
  excerpt: string;

  @Prop({ required: true, ref: 'User' })
  author: string;


  @Prop({ required: true })
  tags: string[];

  @Prop({ required: true })
  coverImage: string;

  //   Add a method to the Post class to generate the excerpt
  generateExcerpt() {
    return this.content.substring(0, 40);
  }
}

export const PostSchema = SchemaFactory.createForClass(Post);
