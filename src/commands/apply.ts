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
        
        let embed = new Discord.RichEmbed()
            .addField("Application Process","Hey, I see you there! So, you want to apply to become a developer for the Arcade.io bot? Well, you're brave, aye?")
            .addField("Well then...","DM your homeboy @dang#1215, he'll get you started...")
            .addField("What are the questions?","Well, ya'll want to see the questions, dang you're efficient. Well, do $apply!questions and I'll DM you with the questions")
            .addField("Guten luck!","Well, not much to say!")
    }

}