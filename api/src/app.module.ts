import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {AuthModule} from "./auth/auth.module";
import {PostModule} from "./posts/post.module";
import {VoteModule} from "./vote/vote.module";
import {SubModule} from "./sub/sub.module";
import { ConfigModule } from '@nestjs/config';

const url = `mongodb+srv://apistol5395:OscarDiego@cluster0.iewtgka.mongodb.net/deedit`;
console.log("Server started! ");

@Module({
    imports:[
        MongooseModule.forRoot(url),
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        AuthModule,
        PostModule,
        VoteModule,
        SubModule
    ]
})
export class AppModule {}
