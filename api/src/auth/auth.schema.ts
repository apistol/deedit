import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
 
export type AuthDocument = User & Document;

@Schema({timestamps: true})  
export class User extends Document {

    @Prop()
    name: string;

    @Prop({ unique: true})
    email: string;

    @Prop()
    password: string;

}

export const AuthSchema = SchemaFactory.createForClass(User);
