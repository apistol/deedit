import {Controller, Get, Post, Body, Param, UseInterceptors, UploadedFile, Res} from '@nestjs/common';
import { SubService } from './sub.service';
import { CreateSubDto } from "./create-sub.dto";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import { Response } from 'express';

@Controller('sub')
export class SubController {
    constructor(private readonly subService: SubService) {}

    @Post()
    async createSub(@Body() createSubDto: CreateSubDto) {
        return this.subService.uploadSubImage(null, null);
    }


    @Get()
    async getSubs() {
        // TODO add middleware for auth
        const user = null

        return this.subService.uploadSubImage(null, null);
    }

    @Get("/:id")
    async getSub(@Param('id') id: number) {
        return this.subService.uploadSubImage(null, null);
    }

    @Post('/:name/image')
    @UseInterceptors(FileInterceptor('file', {
            storage: diskStorage({
            destination: './uploads/images',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                const filename = `${uniqueSuffix}-${file.originalname}`;
                callback(null, filename);
            },
        }),
    }))
    async uploadSubImage(@UploadedFile() file: Express.Multer.File, @Param('name') name: string) {
        return this.subService.uploadSubImage(name, file);
    }

    @Get('/:filename/image')
    getSubImage(@Param('filename') filename: string, @Res() res: Response) {
        return res.sendFile(filename, { root: './uploads/images' });
    }
}
