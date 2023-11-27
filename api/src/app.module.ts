import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {AuthModule} from "./auth/auth.module";
import {PostModule} from "./posts/post.module";

const url = `mongodb+srv://apistol5395:OscarDiego@cluster0.iewtgka.mongodb.net/deedit`;
console.log("Server started! ");

@Module({
    imports:[
        MongooseModule.forRoot(url),
        AuthModule,
        PostModule
    ]
})
export class AppModule {}
