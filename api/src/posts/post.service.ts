import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Post, PostDocument } from './post.schema'
import { Sub, SubDocument } from './subs/sub.schema'
import { Comment, CommentDocument } from './comments/comment.schema'
import { Vote, VoteDocument } from './votes/vote.schema'

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<PostDocument>,
    @InjectModel(Sub.name) private subModel: Model<SubDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    @InjectModel(Vote.name) private voteModel: Model<VoteDocument>,
  ) {}

  async createPost(createPostDto: any): Promise<Post> {
    try {
      // find sub
      const subRecord = await this.subModel
        .find({ name: createPostDto.name })
        .exec()

      // create post
      const createdPost = new Post({
        ...createPostDto,
        sub: subRecord[0] || 'default',
      })
      await this.postModel.create(createdPost)

      console.log('Post created:' + JSON.stringify(createdPost))
      return createdPost
    } catch (e) {
      console.error(e)
      throw new HttpException(
        'Post service error: createPost',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  async getPosts(user): Promise<Post[]> {
    try {
      //  TODO get user from auth middleware user
      const userData = user

      const postRecord = await this.postModel.find().exec()

      //  TODO get user votes and verify if any postRecord includes it or not, then set key "userVote": -1 | 0 | 1
      console.log('Posts returned:' + JSON.stringify(postRecord))
      return postRecord
    } catch (e) {
      console.error(e)
      throw new HttpException(
        'Post service error: getPosts',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  async getPost(id: number): Promise<Post> {
    try {
      const postRecord = await this.postModel.find({ _id: id }).exec()

      console.log('Posts returned:' + JSON.stringify(postRecord[0]))
      return postRecord[0]
    } catch (e) {
      console.error(e)
      throw new HttpException(
        'Post service error: getPosts',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  async commentOnPost(createPostDto: any): Promise<Comment> {
    try {
      const postRecord = await this.commentModel
        .find({ _id: createPostDto.postIdentifier })
        .exec()

      if (!postRecord) {
        throw new HttpException(
          'Post service error: no post attached to comment',
          HttpStatus.INTERNAL_SERVER_ERROR,
        )
      }
      const commentRecord = await this.commentModel.create(createPostDto)

      const filter = { identifier: createPostDto.postIdentifier }
      const update = { $push: { comments: commentRecord._id } }
      await this.postModel.updateOne(filter, update)

      console.log('Comment : ' + JSON.stringify(commentRecord))
      return commentRecord
    } catch (e) {
      console.error(e)
      throw new HttpException(
        'Post service error: commentOnPost',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }
}
