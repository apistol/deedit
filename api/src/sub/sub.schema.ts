import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubDocument = Sub & Document;

@Schema()
export class Sub {
    constructor(createSubDto: any) {
        this.identifier = createSubDto.identifier
        this.title = createSubDto.title
        this.slug = createSubDto.slug
        this.sub = createSubDto.sub
        this.body = createSubDto.body
        this.subName = createSubDto.subName
        this.username = createSubDto.username
        this.user = createSubDto.user
        this.comments = createSubDto.comments
        this.votes = createSubDto.votes
    }

    @Prop()
    identifier: string; // 7 char id

    @Prop()
    title: string;

    @Prop()
    slug: string;

    @Prop()
    sub: string;

    @Prop()
    body: string;

    @Prop()
    subName: string;

    @Prop()
    username: string;

    @Prop()
    user: string;

    @Prop()
    comments: string;

    @Prop()
    votes: string;
}

export const SubSchema = SchemaFactory.createForClass(Sub);
