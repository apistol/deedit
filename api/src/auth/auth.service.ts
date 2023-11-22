import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './auth.schema';
import { UserDto } from './signin-user.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async signin(userDto: UserDto): Promise<User> {
    // Verify if user exists in the DB based on your logic
    // const exists = await this.userModel.exists({ username: userDto.username });
    //
    // if (!exists) {
    //   // Handle case where user doesn't exist
    //   throw new Error('User not found');
    // }

    // If user exists, you can perform further login logic here
    // For example, check the password, create JWT token, etc.

    // Convert UserDto to User instance (assuming they have similar properties)
    const user = new this.userModel(userDto).save();

    console.log('User signed in: ' + JSON.stringify(user));
    return user; // Return the User instance, not userDto
  }


  async signup(userDto: UserDto): Promise<User> {
    // Verify if user exists in the DB based on your logic
    const exists = await this.userModel.exists({ username: userDto.username });

    if (!exists) {
      // Handle case where user doesn't exist
      throw new Error('User not found');
    }

    // If user exists, you can perform further login logic here
    // For example, check the password, create JWT token, etc.

    // Convert UserDto to User instance (assuming they have similar properties)
    const user = new this.userModel(userDto);

    console.log('User signed in: ' + JSON.stringify(userDto));
    return user; // Return the User instance, not userDto
  }

}
