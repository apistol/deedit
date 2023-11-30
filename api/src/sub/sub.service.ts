import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sub, SubDocument } from './sub.schema';
import { User } from '../auth/auth.schema';
import { isEmpty } from 'class-validator';
import { PostDocument, Post } from '../posts/post.schema';

@Injectable()
export class SubService {
  constructor(
    @InjectModel(Sub.name) private subModel: Model<SubDocument>,
    @InjectModel(Post.name) private postModel: Model<PostDocument>,
  ) {}

  async uploadSubImage(
    subName: string,
    file: Express.Multer.File,
  ): Promise<Sub> {
    try {
      if (!file) {
        throw new HttpException('No file provided', HttpStatus.BAD_REQUEST);
      }

      const imagePath = `uploads/images/${file.filename}`;

      const updatedSub = await this.postModel.findOneAndUpdate(
        { sub: subName.toLowerCase() },
        { subName: imagePath },
        { new: true }, // Return the updated document
      );


      if (!updatedSub) {
        throw new HttpException('Sub not found', HttpStatus.NOT_FOUND);
      }

      return updatedSub;
    } catch (e) {
      console.error(e);
      throw new HttpException(
        'Sub service error: uploadSubImage',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
