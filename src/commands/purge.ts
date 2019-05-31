import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class purge implements IBotCommand {

    private readonly _command = "purge"

    help(): string {
        return "Deletes the desired number of messages from the channel. This is subjected to administrators only."
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        //Clean-up message
        msgObject.delete();

        if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
            msgObject.channel.send(`Sorry ${msgObject.author.username}, but this is only for Admins`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000);
                });
            return;

        }
    
        //Make sure that they have said how many messages to delete
        if(!args[0]){
            msgObject.channel.send(`Sorry ${msgObject.author.username}, but ya'll must give me a number of messages to get deleted, yeah!`)
            .then(msg => {
                (msg as Discord.Message).delete(5000);
            });
        return;

        }

        //Convert args[0] into a number
        let numberOfMessagesToDelete = Number(args[0]);

        //Make sure args[0] is actually a number
        if(numberOfMessagesToDelete == NaN)
        {
            msgObject.channel.send(`Sorry ${msgObject.author.username}, but ya'll that aint a valid numbah!`)
            .then(msg => {
                (msg as Discord.Message).delete(5000);
            });
        return;
        }

        //Make sure the number is an integer
        numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete);

        //Delete the desired number of messages
        msgObject.channel.bulkDelete(numberOfMessagesToDelete)
            .catch(console.error);
     }

}