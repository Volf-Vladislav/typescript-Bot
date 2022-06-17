"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var messageTemplate_1 = __importDefault(require("../../helpers/messageTemplate"));
function messageEvent(message, ws, wss) {
    wss.clients.forEach(function (client) {
        if (client.seekingID == ws.id) {
            client.send((0, messageTemplate_1.default)(message.data, 'message', undefined));
        }
    });
}
exports.default = messageEvent;
