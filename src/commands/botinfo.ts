import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class botinfo implements IBotCommand {

    private readonly _command = "botinfo"

    help(): string {
        return "Tells you about the server!"
    }
    
    isThisCommand(command: string): boolean {   
        return command === this._command;
    }


    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void>{
        
        let embed = new Discord.RichEmbed()
                        .setColor([5,200,10])
                        .setTitle("Bot Info")
                        .addField("About me!","Hey! I'm Arcade.io Bot! I aint gonna lie I'm a pretty handsome and nice bot, yet yall know I'm a robot. Let me tell you a little bit about myself. I'm son to Arcade.io bot and Arcadie.io bot. My brother, Arcade.io botie is a nice brother! Anyways, my hooman is continuously adding things and polishing my code, so if I go offline, dont panniiiccc!")
                        .setImage(msgObject.guild.iconURL)

        msgObject.channel.send(embed)
            .catch(console.error);
    }

}