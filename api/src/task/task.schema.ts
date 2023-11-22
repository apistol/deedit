import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
    constructor(createTaskDto: any) {
        this.title = createTaskDto.title
        this.description = createTaskDto.description
        this.isCompleted = createTaskDto.isCompleted

    }

    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop({ default: false })
    isCompleted: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
