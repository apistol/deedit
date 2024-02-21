import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { PostController } from './post.controller'
import { PostService } from './post.service'
import { Post, PostSchema } from './post.schema'
import { Sub, SubSchema } from './subs/sub.schema'
import { Comment, CommentSchema } from './comments/comment.schema'
import { Vote, VoteSchema } from '../vote/vote.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Post.name, schema: PostSchema },
      { name: Sub.name, schema: SubSchema },
      { name: Comment.name, schema: CommentSchema },
      { name: Vote.name, schema: VoteSchema },
    ]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
