import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type VoteDocument = Vote & Document

@Schema()
export class Vote {
  constructor(createVoteDto: any) {
    this.username = createVoteDto.username
    this.value = createVoteDto.value
    this.commentId = createVoteDto.commentId
    this.postId = createVoteDto.postId
  }

  @Prop()
  username: string

  @Prop()
  value: string

  @Prop()
  commentId: string

  @Prop()
  postId: string
}

export const VoteSchema = SchemaFactory.createForClass(Vote)
