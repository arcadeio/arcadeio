import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class ping implements IBotCommand {

    private readonly _command = "ping"

    help(): string {
        return "Pong!"
    }
    
    isThisCommand(command: string): boolean {   
        return command === this._command;
    }


    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void>{
        
        //Pong!
        msgObject.channel.send(`Pong!`);
    }

}