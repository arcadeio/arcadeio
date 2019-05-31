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
class woopsipinged {
    constructor() {
        this._command = "woopsipinged";
    }
    help() {
        return "The time the owner spammed a server with @everyone 84 times, and some of his favriote quotes.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let embed = new Discord.RichEmbed()
                .addField("Quote 1", " “ANDWATMAKESYOURPHONEMOREIMPORTANTTHANMYLESON?!?” - Greensoap");
        });
    }
}
exports.default = woopsipinged;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29vcHNpcGluZ2VkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3dvb3BzaXBpbmdlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBR3RDLE1BQXFCLFlBQVk7SUFBakM7UUFFcUIsYUFBUSxHQUFHLGNBQWMsQ0FBQTtJQWlCOUMsQ0FBQztJQWZHLElBQUk7UUFDQSxPQUFPLCtGQUErRixDQUFBO0lBQzFHLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFHSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDOUIsUUFBUSxDQUFDLFNBQVMsRUFBQyxnRUFBZ0UsQ0FBQyxDQUFBO1FBQzdGLENBQUM7S0FBQTtDQUVKO0FBbkJELCtCQW1CQyJ9