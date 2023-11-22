import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {MongooseModule} from "@nestjs/mongoose";
import {TaskModule} from "./task/task.module";
import querystring from 'querystring';
import {AuthModule} from "./auth/auth.module";

// Ensure to use the correct password with special characters here
// const encodedPassword = querystring.escape("OscarDiego");
// const encodedUser = querystring.escape("apistol5395");
const url = `mongodb+srv://apistol5395:OscarDiego@cluster0.iewtgka.mongodb.net/deedit`;

console.log("url: " + url )
@Module({
    imports:[
        MongooseModule.forRoot(url),
        TaskModule,
        AuthModule
    ]
})
export class AppModule {}
