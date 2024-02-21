import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './auth.schema';
import * as bcrypt from "bcryptjs";
import { JwtService } from '@nestjs/jwt';
import { LoginDto, SignUpDto } from './signin-user.dto';


@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { name, email, password } = signUpDto;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      // Attempt to create the user
      const user = await this.userModel.create({
        name,
        email,
        password: hashedPassword,
      });

      // Sign the JWT token
      const token = this.jwtService.sign({ id: user.id });

      return { token };
    } catch (error) {
      // Check if the error is due to a duplicate key
      if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
        throw new ConflictException('Email already exists');
      } else {
        // If it's not a duplicate key error, rethrow the original error
        throw error;
      }
    }
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({ id: user._id });

    return { token };
  }
}

