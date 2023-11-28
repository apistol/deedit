import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vote, VoteDocument } from './vote.schema';

@Injectable()
export class VoteService {
  constructor(@InjectModel(Vote.name) private voteModel: Model<VoteDocument>) {}

  async vote(voteData: any): Promise<Vote> {
    try {
      const vote = await this.voteModel.create(voteData);

      console.log('Vote: ' + JSON.stringify(vote));
      return vote; // Return the Vote instance, not userDto
    } catch (e) {
      console.error(e);
      throw new HttpException(
          'Post service error: createPost',
          HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
