import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type PostDocument = Post & Document

@Schema()
export class Post {
  constructor(createPostDto: any) {
    this.identifier = createPostDto.identifier
    this.title = createPostDto.title
    this.slug = createPostDto.slug
    this.sub = createPostDto.sub
    this.body = createPostDto.body
    this.subName = createPostDto.subName
    this.username = createPostDto.username
    this.user = createPostDto.user
    this.comments = createPostDto.comments
    this.votes = createPostDto.votes
  }

  @Prop()
  identifier: string // 7 char id

  @Prop()
  title: string

  @Prop()
  slug: string

  @Prop()
  sub: string

  @Prop()
  body: string

  @Prop()
  subName: string

  @Prop()
  username: string

  @Prop()
  user: string

  @Prop()
  comments: string

  @Prop()
  votes: string
}

export const PostSchema = SchemaFactory.createForClass(Post)
