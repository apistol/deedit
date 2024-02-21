import { Controller, Post, Body, Get } from '@nestjs/common';
import { LoginDto, SignUpDto } from "./signin-user.dto";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("signup")
    signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string}> {
        return this.authService.signUp(signUpDto);
    }

    @Get('/login')
    login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
      return this.authService.login(loginDto);
    }
}
