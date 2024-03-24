import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {PostsRepository} from "./posts.repository";

@Injectable()
export class PostsService {

  constructor(private readonly postsRepository: PostsRepository) {}

  create(createPostDto: CreatePostDto) {
    return this.postsRepository.create({
      ...createPostDto,
      // timestamp: new Date(),
      user: "1"
    });
  }

  findAll() {
    return this.postsRepository.findAll();
  }

  findOne(_id: string) {
    return this.postsRepository.findOne({_id});
  }

  update(_id: string, updatePostDto: UpdatePostDto) {
    return this.postsRepository.findOneAndUpdate({_id}, {$set: updatePostDto});
  }

  remove(_id: string) {
    return this.postsRepository.findOneAndDelete({_id});
  }
}
