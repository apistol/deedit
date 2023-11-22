import { Controller, Get, Post, Body } from '@nestjs/common';
// import { TaskService } from './task.service';
import {UserDto} from "./signin-user.dto";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/signin')
    async signin(@Body() userDto: UserDto) {
        return this.authService.signin(userDto)
    }


    @Post('/signup')
    async signup(@Body() userDto: UserDto) {
        return this.authService.signup(userDto)
    }

}
