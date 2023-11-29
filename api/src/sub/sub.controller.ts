import {Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import { SubService } from './sub.service';
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('subs')
export class SubController {
    constructor(private readonly subService: SubService) {}

    @Get("/:sub")
    async createPost(@Param() sub: string) {
        return this.subService.getSub(sub);
    }
    @Post("/:name/image")
    @UseInterceptors(FileInterceptor('file'))
    async uploadSubImage(@UploadedFile() file: Express.Multer.File, @Param('name') name: string) {
        return this.subService.uploadSubImage(name, file);
    }
}
