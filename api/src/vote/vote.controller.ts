import { Controller, Get, Post, Body } from '@nestjs/common';
import {VoteService} from "./vote.service";
import {Vote} from "./vote.schema";

@Controller('vote')
export class VoteController {
    constructor(private readonly voteService: VoteService) {}

    @Post()
    async vote(@Body() bodyData:Vote) {
        return this.voteService.vote(bodyData)
    }

}
