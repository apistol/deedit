import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { SubController } from './sub.controller'
import { SubService } from './sub.service'
import { Sub, SubSchema } from './sub.schema'
import { PostSchema, Post } from '../posts/post.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Sub.name, schema: SubSchema },
      { name: Post.name, schema: PostSchema },
    ]),
  ],
  controllers: [SubController],
  providers: [SubService],
})
export class SubModule {}
