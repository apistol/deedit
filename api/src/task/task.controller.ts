import { Controller, Get, Post, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import {CreateTaskDto} from "./create-task.dto";

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Post()
    async createTask(@Body() createTaskDto: CreateTaskDto) {

        return this.taskService.createTask(createTaskDto);
    }

    // @Get()
    // async findAllTasks() {
    //     return this.taskService.findAllTasks();
    // }

    // Add other endpoints as necessary
}
