import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {AbstractDocument} from "@app/common";

@Schema({ versionKey : false})
export class PostDocument extends AbstractDocument{
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

export const PostSchema = SchemaFactory.createForClass(PostDocument);
