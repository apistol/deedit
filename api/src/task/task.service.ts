import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './task.schema';

@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

    async createTask(createTaskDto: any): Promise<Task> {
        const createdTask = new Task(createTaskDto);
        this.taskModel.create(createdTask);
        console.log("Task created:" + JSON.stringify(createdTask))
        return createdTask;
    }

    async findAllTasks(): Promise<Task[]> {
        return this.taskModel.find().exec();
    }

    // Add other necessary methods like updateTask, deleteTask, etc.
}
