import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post, PostSchema } from './post.schema';
import {Sub, SubSchema} from "./subs/sub.schema";
import {Comment, CommentSchema} from "./comments/comment.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Post.name, schema: PostSchema },
            { name: Sub.name, schema: SubSchema },
            { name: Comment.name, schema: CommentSchema }]),
    ],
    controllers: [PostController],
    providers: [PostService],
})
export class PostModule {}

