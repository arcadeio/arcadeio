import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class woops implements IBotCommand {

    private readonly _command = "woops"

    help(): string {
        return "The time the owner spammed a server with @everyone 84 times, and some of his favriote quotes."
    }
    
    isThisCommand(command: string): boolean {   
        return command === this._command;
    }


    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void>{
        
        let embed = new Discord.RichEmbed()
            .addField("Quote 1"," “ANDWATMAKESYOURPHONEMOREIMPORTANTTHANMYLESON?!?” - Greensoap")
        msgObject.channel.send(embed)
    }

}