import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import { userInfo } from "os";

export default class biggae implements IBotCommand {

    private readonly _command = "biggae"

    help(): string {
        return "You're now a big gay!"
    }
    
    isThisCommand(command: string): boolean {   
        return command === this._command;
    }


    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void>{
        
        msgObject.member.addRole('big gay')
  .then(console.log)
  .catch(console.error);

    let embed = new Discord.RichEmbed()
        .addField("HAHA! BIG GAY!",`Hey, ${msgObject.author.username}! YOU'RE NOW A BIG GAY!`)
        .setColor("RED")
        msgObject.channel.send(embed)
    }

}