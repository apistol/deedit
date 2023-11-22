import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, AuthSchema } from './auth.schema';
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: AuthSchema }]),
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}

