import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './task.schema';

@Injectable()
export class TaskService {
    // constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

    async createTask(createTaskDto: any): Promise<any> {
        // TODO save to BE
        return new Task(createTaskDto);
    }

    // async findAllTasks(): Promise<Task[]> {
    //     return this.taskModel.find().exec();
    // }

    // Add other necessary methods like updateTask, deleteTask, etc.
}
