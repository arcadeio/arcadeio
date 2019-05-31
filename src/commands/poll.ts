import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class poll implements IBotCommand {

    private readonly _command = "poll"

    help(): string {
        return "Creates a poll"
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }


    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        msgObject.delete(0);

        if (args.length < 1) { return; }

        let pollEmbed = new Discord.RichEmbed()
            .setTitle("Lets Vote!")
            .setDescription(args.join(" "))

        let pollMessage = await msgObject.channel.send(pollEmbed)
        await (pollMessage as Discord.Message).react("✅");
        await (pollMessage as Discord.Message).react("❎");
    }

}