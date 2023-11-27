import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from "./create-post.dto";
import {CreateCommentDto} from "./comments/create-comment.dto";

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Post()
    async createPost(@Body() createPostDto: CreatePostDto) {
        return this.postService.createPost(createPostDto);
    }

    @Get()
    async getPosts() {
        return this.postService.getPosts();
    }

    @Get("/:id")
    async getPost(@Param('id') id: number) {
        return this.postService.getPost(id);
    }

    @Post("/comment")
    async commentOnPost(@Body() createCommentDto: CreateCommentDto ) {
        return this.postService.commentOnPost(createCommentDto);
    }
}
