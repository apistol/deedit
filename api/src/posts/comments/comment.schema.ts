import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type CommentDocument = Comment & Document

@Schema()
export class Comment {
  constructor(createCommentDto: any) {
    this.identifier = createCommentDto.identifier
    this.body = createCommentDto.body
    this.username = createCommentDto.username
    this.user = createCommentDto.user
    this.post = createCommentDto.post
    this.votes = createCommentDto.votes
  }

  @Prop()
  identifier: string

  @Prop()
  body: string

  @Prop()
  username: string

  @Prop()
  user: string

  @Prop()
  post: string

  @Prop()
  votes: string
}

export const CommentSchema = SchemaFactory.createForClass(Comment)
