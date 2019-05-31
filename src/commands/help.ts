import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class help implements IBotCommand {

    private readonly _command = "help"

    help(): string {
        return "Tells you all the commands we have!"
    }
    
    isThisCommand(command: string): boolean {   
        return command === this._command;
    }


    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void>{
        
        let embed = new Discord.RichEmbed()
            .addField("$ban", "Bans the mentioned user. This is subjected to administrators only.")
            .addField("$kick", "Kicks the mentioned user. This is subjected to administrators only.")
            .addField("$purge", "Deletes the desired number of messages from the channel. This is subjected to administrators only.")
            .addField("$botinfo", "Tells you about the bot, and who made it!")
            .addField("$poll", "Creates a poll")
            .addField("$ping", "Pong!")
            .addField("$dailydoggo", "your daily kyoot doggo!")
            .addField("$warn", "Warns the mentioned user. This is subjected to administrators only. Members will be kicked if warned. **This has been disabled for improvement!**")
            .addField("$woops", "The time the owner spammed a server with @everyone 84 times, and some of his favriote quotes.")
            .addField("$biggae", "Whoops! I've been **disabled**!")
            .setFooter("Is a command not here? Contact @dang#1215")
            .setImage(msgObject.guild.iconURL)
            .setColor("0xff0000")
            msgObject.author.send(embed)
            msgObject.channel.send("Check your dms!")
    }

}