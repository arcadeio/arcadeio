import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class ban implements IBotCommand {

    private readonly _command = "ban"

    help(): string {
        return "Bans the mentioned user. This is subjected to administrators only."
    }
    
    isThisCommand(command: string): boolean {   
        return command === this._command;
    }


    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void>{
        
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let kickLog = `${msgObject.author.username}: ${suppliedReason}`;

        msgObject.delete(5000);

        if(!msgObject.member.hasPermission("BAN_MEMBERS"))
    {
        msgObject.channel.send(`Nice try ${msgObject.author.username}, but ya'll dont have permission to do this.`)
        return;
    }

    if (!mentionedUser)
    {
        msgObject.channel.send(`Sorry ${msgObject.author.username}, I couldn't find that user to ban! :-(`);
        return;
    }


        msgObject.guild.member(mentionedUser).ban(kickLog)
        mentionedUser.send(`⚠ You've been banned in **${msgObject.guild.name}** for **${suppliedReason}**! ⚠`)
            .then(console.log)
            .catch(console.error)
    }
}