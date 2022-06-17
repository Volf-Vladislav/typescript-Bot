"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var seekingEvent_1 = __importDefault(require("./particles/seekingEvent"));
var messageEvent_1 = __importDefault(require("./particles/messageEvent"));
var printEvent_1 = require("./particles/printEvent");
function onMessageEvent(message, ws, wss) {
    message = JSON.parse(message);
    if (message.event == 'status') {
        if (message.data.status == 'seeking') {
            (0, seekingEvent_1.default)(message, ws, wss);
        }
        else if (message.data.status == 'print') {
            (0, printEvent_1.print)(ws, wss);
        }
        else if (message.data.status == 'endPrint') {
            (0, printEvent_1.endPrint)(ws, wss);
        }
    }
    else if (message.event == 'message') {
        (0, messageEvent_1.default)(message, ws, wss);
    }
}
exports.default = onMessageEvent;
