import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, AuthSchema } from './auth.schema';
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: "jwt"}),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                return {
                    secret: config.get<string>("JWT_SECRET"),
                    signOptions: {
                        expiresIn: config.get<string | number>("JWT_EXPIRE"),
                    } 
                }
            }
        }),
        MongooseModule.forFeatureAsync([
            {
              name: User.name,
              useFactory: () => {
                const schema = AuthSchema;
                schema.plugin(require('mongoose-unique-validator'), { message: 'Your email is already taken' }); // or you can integrate it without the options   schema.plugin(require('mongoose-unique-validator')
                return schema;
              },
            },
          ]),
        MongooseModule.forFeature([{ name: "User", schema: AuthSchema }]), 
        ConfigModule, 
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}

