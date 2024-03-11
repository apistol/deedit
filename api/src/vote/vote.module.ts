import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Vote, VoteSchema } from './vote.schema'
import { VoteController } from './vote.controller'
import { VoteService } from './vote.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vote.name, schema: VoteSchema }]),
  ],
  controllers: [VoteController],
  providers: [VoteService],
})
export class VoteModule {}
