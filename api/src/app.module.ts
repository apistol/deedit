import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {MongooseModule} from "@nestjs/mongoose";
import { UsersModule } from './users/users.module';

// Ensure to use the correct password with special characters here
const encodedPassword = encodeURIComponent("OscarDiego");
const encodedUser = encodeURIComponent("apistol5395");
const url = `mongodb+srv://${encodedUser}:${encodedPassword}@cluster0.iewtgka.mongodb.net/deedit`;

console.log("url: " + url )
@Module({
    imports:[
        MongooseModule.forRoot(url),
        UsersModule
    ]
})
export class AppModule {}
