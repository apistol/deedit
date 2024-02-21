import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type SubDocument = Sub & Document

@Schema()
export class Sub {
  constructor(createSubDto: any) {
    this.name = createSubDto.name
    this.title = createSubDto.title
    this.description = createSubDto.description
    this.imageUrn = createSubDto.imageUrn
    this.bannerUrn = createSubDto.bannerUrn
    this.user = createSubDto.user
    this.posts = createSubDto.posts
  }

  @Prop()
  name: string

  @Prop()
  title: string

  @Prop()
  description: string

  @Prop()
  imageUrn: string

  @Prop()
  bannerUrn: string

  @Prop()
  user: string

  @Prop()
  posts: string
}

export const SubSchema = SchemaFactory.createForClass(Sub)
