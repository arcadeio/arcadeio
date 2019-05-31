import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class testCommand implements IBotCommand {

    private readonly _command = "testCommand"

    help(): string {
        return "This command does absolutely nothing! How fun :-)"
    }
    
    isThisCommand(command: string): boolean {   
        return command === this._command;
    }


    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void>{
        
        //Let us know it all went well!
        msgObject.channel.send("Hey, this is a test command! Why is this here? I dunno.");
    }

}