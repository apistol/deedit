import { Controller, Post, Body, Res } from '@nestjs/common'
import { LoginDto, SignUpDto } from './signin-user.dto'
import { Response } from 'express'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto, @Res() response: Response) {
    const { token } = await this.authService.signUp(signUpDto)
    response
      .cookie('JWT_TOKEN', token, {
        httpOnly: true,
        secure: false, // Folosiți secure: false dacă testați local fără HTTPS
        sameSite: 'strict',
      })
      .send({ success: true })
    return { message: 'Inregistrare cu succes!' }
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() response: Response) {
    const { token } = await this.authService.login(loginDto)
    response
      .cookie('JWT_TOKEN', token, {
        httpOnly: true,
        secure: false, // Folosiți secure: false dacă testați local fără HTTPS
        sameSite: 'strict',
      })
      .send({ success: true })
    return { message: 'Conectare cu succes!' }
  }
}
