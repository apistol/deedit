import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthDocument = User & Document;

@Schema()
export class User {
    constructor(createUserDto: any) {
        this.id = createUserDto.id
        this.username = createUserDto.username
        // this.email = createUserDto.email
        this.phone = createUserDto.email
        this.password = createUserDto.password
        this.createdAt = createUserDto.createdAt
        this.updatedAt = createUserDto.updatedAt


    }

    @Prop({ required: false })
    id: string;

    @Prop({ required: false })
    username: string;

    // @Prop({ required: true })
    // email: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ default: false })
    password: string;

    @Prop({ default: false })
    createdAt: string;

    @Prop({ default: false })
    updatedAt: string;
}

export const AuthSchema = SchemaFactory.createForClass(User);
