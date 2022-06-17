"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Bot_1 = __importDefault(require("./../bot/Bot"));
var messageTemplate_1 = __importDefault(require("./messageTemplate"));
function connectionSession(ws, targetTime) {
    var timer = 0;
    var intervalID = setInterval(function () {
        timer++;
        if (timer >= targetTime) {
            if (ws.readyState == 1) {
                ws.status = 'chating';
                ws.send((0, messageTemplate_1.default)('finded', 'status', 'xxx000bot000xxx'));
                var bot = new Bot_1.default('ru-RU', 'male', ws);
                bot.start();
            }
            clearInterval(intervalID);
            timer = 0;
        }
    }, 1000);
}
exports.default = connectionSession;
