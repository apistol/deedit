import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthDocument = User & Document;

@Schema()
export class User {
    constructor(createUserDto: any) {
        this.username = createUserDto.username
        this.email = createUserDto.email
        this.password = createUserDto.password

    }

    @Prop({ required: false })
    username: string;

    @Prop({ required: true })
    email: string;

    @Prop({ default: false })
    password: string;
}

export const AuthSchema = SchemaFactory.createForClass(User);
