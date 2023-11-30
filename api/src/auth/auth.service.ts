import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './auth.schema';
import { UserDto } from './signin-user.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async signin(userDto: UserDto): Promise<any> {
    // Verify if user exists in the DB based on your logic

    const userExists = await this.userModel.findOne(
        { phone: userDto.phone, password: userDto.password },
        {},
        {}, // Return the updated document
    );

    if(!userExists){
      throw new Error('User not found');
    }

    // TODO jsonwebtoken

    // For example, check the password, create JWT token, etc.

    return {
      success:userExists.username,
    };
  }


  async signup(userDto: UserDto): Promise<any> {

    const exists = await this.userModel.exists({ username: userDto.username });
    if (exists) {
      // Handle case where user doesn't exist
      throw new Error('User user already exists');
    }

    const user = new this.userModel(userDto).save();

    console.log('User signed in: ' + JSON.stringify(user));
    return {
      success: userDto.username,
      jwt: ""
    }; // Return the User instance, not userDto
  }

}
