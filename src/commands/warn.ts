import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class warn implements IBotCommand {

    private readonly _command = "warn"

    help(): string {
        return "Warns the mentioned user. This is subjected to administrators only. Members will be kicked if warned."
    }
    
    isThisCommand(command: string): boolean {   
        return command === this._command;
    }


    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void>{
        
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let kickLog = `${msgObject.author.username}: ${suppliedReason}`;

        msgObject.delete(5000);

        if(!msgObject.member.hasPermission("ADMINISTRATOR"))
    {
        msgObject.channel.send(`Nice try ${msgObject.author.username}, but ya'll dont have permission to do this.`)
        return;
    }

    if (!mentionedUser)
    {
        msgObject.channel.send(`Sorry ${msgObject.author.username}, I couldn't find that user to warn! :-(`);
        return;
    }


        msgObject.guild.member(mentionedUser).kick(kickLog)
        mentionedUser.send(`⚠ You've been warned in **${msgObject.guild.name}** for **${suppliedReason}**. This results in you being kicked. ⚠`)
            .then(console.log)
            .catch(console.error)
    }
}