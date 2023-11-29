import {Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sub, SubDocument} from "./sub.schema";
import {User} from "../auth/auth.schema";
import { isEmpty } from 'class-validator'
import {PostDocument, Post} from "../posts/post.schema";

@Injectable()
export class SubService {
  constructor(
      @InjectModel(Sub.name) private subModel: Model<SubDocument>,
      @InjectModel(Post.name) private postModel: Model<PostDocument>,
  ) {}

  async createSub(createSubDto: any): Promise<Sub> {

    try {

      const { name, title, description } = createSubDto;
      const user: User = createSubDto.locals.user // TODO get user from auth middleware


      let errors: any = {}
      if (isEmpty(name)) errors.name = 'Name must not be empty'
      if (isEmpty(title)) errors.title = 'Title must not be empty'



      // find sub
      const subRecord = await this.subModel
        .find({ name: createSubDto.name.toLowerCase() })
        .exec();

      // create sub
      const createdSub = new Sub({
        ...createSubDto,
        sub: subRecord[0] || 'default',
      });
      if (subRecord.length > 0) errors.name = 'Sub exists already'





      await this.subModel.create(createdSub);

      console.log('Sub created:' + JSON.stringify(createdSub));
      return createdSub;
    } catch (e) {
      console.error(e);
      throw new HttpException(
        'Sub service error: createSub',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getSubs(user): Promise<Sub[]> {
    try {
      //  TODO get user from auth middleware user
      const userData = user;

      const subRecord = await this.subModel.find().exec();

      //  TODO get user votes and verify if any subRecord includes it or not, then set key "userVote": -1 | 0 | 1
      console.log('Subs returned:' + JSON.stringify(subRecord));
      return subRecord;
    } catch (e) {
      console.error(e);
      throw new HttpException(
        'Sub service error: getSubs',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getSub(data: any): Promise<Post[]> {
    try {
      const postsRecord = await this.postModel.find({ sub: data.sub }).exec();
      console.log('Subs returned:' + JSON.stringify(postsRecord));
      return postsRecord;
    } catch (e) {
      console.error(e);
      throw new HttpException(
        'Sub service error: getSub',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async uploadSubImage(subName: string, file: Express.Multer.File): Promise<Sub> {
    console.log(subName)
    console.log(file)
    try {
      if (!file) {
        throw new HttpException('No file provided', HttpStatus.BAD_REQUEST);
      }

      // Assuming 'path' is where you store the image path in the Sub schema
      const imagePath = `/images/${file.originalname}`; // Update this path as needed

      const updatedSub = await this.subModel.findOneAndUpdate(
          { name: subName.toLowerCase() },
          { imagePath },
          { new: true } // Return the updated document
      );

      if (!updatedSub) {
        throw new HttpException('Sub not found', HttpStatus.NOT_FOUND);
      }

      return updatedSub;    } catch (e) {
      console.error(e);
      throw new HttpException(
          'Sub service error: uploadSubImage',
          HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

}
