import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {MongooseModule} from "@nestjs/mongoose";
import {TaskModule} from "./task/task.module";
import querystring from 'querystring';

// Ensure to use the correct password with special characters here
// const encodedPassword = querystring.escape("OscarDiego");
// const encodedUser = querystring.escape("apistol5395");
// const url = `mongodb+srv://apistol5395:OscarDiego@cluster0.iewtgka.mongodb.net/deedit`;

// console.log("url: " + url )

console.log("CV: ")
@Module({
    imports:[
        TaskModule
    ]
})
export class AppModule {}
