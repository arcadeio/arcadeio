import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class dailydoggo implements IBotCommand {

    private readonly _command = "dailydoggo"

    help(): string {
        return "your daily kyoot doggo!"
        
    }
    
    isThisCommand(command: string): boolean {   
        return command === this._command;
    }


    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void>{
        
        let embed = new Discord.RichEmbed()
            .addField("Heres the daily doggo!", "https://random.dog/fd652134-a14a-41a8-ab4b-da05c0c8198d.mp4")
            .setDescription("awww soooo cute")
            .setColor("0,255,0")
        msgObject.author.send(embed)
        msgObject.channel.send("Doggo!")
    }

}