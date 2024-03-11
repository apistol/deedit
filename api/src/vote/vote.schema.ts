import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type VoteDocument = Vote & Document

@Schema()
export class Vote {
  constructor(createVoteDto: any) {
    this.value = createVoteDto.value
    this.username = createVoteDto.username
    this.postId = createVoteDto.postId
    this.commentId = createVoteDto.commentId
  }

  @Prop({ required: false })
  value: string

  @Prop({ required: true })
  username: string

  @Prop({ default: false })
  postId: string

  @Prop({ default: false })
  commentId: string
}

export const VoteSchema = SchemaFactory.createForClass(Vote)
