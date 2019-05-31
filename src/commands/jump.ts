import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class jump implements IBotCommand {

    private readonly _command = "jump"

    help(): string {
        return "This command does absolutely nothing! How fun :-)"
    }
    
    isThisCommand(command: string): boolean {   
        return command === this._command;
    }


    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void>{
        
        let embed = new Discord.RichEmbed()
            .addField("jump", "jump")
        msgObject.author.send(embed)
        msgObject.channel.send("Check your direct messages")
    }

}