"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class help {
    constructor() {
        this._command = "help";
    }
    help() {
        return "Tells you all the commands we have!";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
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
                .setColor("0xff0000");
            msgObject.author.send(embed);
            msgObject.channel.send("Check your dms!");
        });
    }
}
exports.default = help;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBK0J0QyxDQUFDO0lBN0JHLElBQUk7UUFDQSxPQUFPLHFDQUFxQyxDQUFBO0lBQ2hELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFHSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDOUIsUUFBUSxDQUFDLE1BQU0sRUFBRSxvRUFBb0UsQ0FBQztpQkFDdEYsUUFBUSxDQUFDLE9BQU8sRUFBRSxxRUFBcUUsQ0FBQztpQkFDeEYsUUFBUSxDQUFDLFFBQVEsRUFBRSxvR0FBb0csQ0FBQztpQkFDeEgsUUFBUSxDQUFDLFVBQVUsRUFBRSwyQ0FBMkMsQ0FBQztpQkFDakUsUUFBUSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQztpQkFDbkMsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7aUJBQzFCLFFBQVEsQ0FBQyxhQUFhLEVBQUUseUJBQXlCLENBQUM7aUJBQ2xELFFBQVEsQ0FBQyxPQUFPLEVBQUUsbUpBQW1KLENBQUM7aUJBQ3RLLFFBQVEsQ0FBQyxRQUFRLEVBQUUsK0ZBQStGLENBQUM7aUJBQ25ILFFBQVEsQ0FBQyxTQUFTLEVBQUUsaUNBQWlDLENBQUM7aUJBQ3RELFNBQVMsQ0FBQywyQ0FBMkMsQ0FBQztpQkFDdEQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUNqQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDckIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDNUIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUNqRCxDQUFDO0tBQUE7Q0FFSjtBQWpDRCx1QkFpQ0MifQ==