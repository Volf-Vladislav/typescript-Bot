"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.endPrint = exports.print = void 0;
var messageTemplate_1 = __importDefault(require("../../helpers/messageTemplate"));
function print(ws, wss) {
    wss.clients.forEach(function (client) {
        if (client.seekingID == ws.id) {
            client.send((0, messageTemplate_1.default)('print', 'status', undefined));
        }
    });
}
exports.print = print;
function endPrint(ws, wss) {
    wss.clients.forEach(function (client) {
        if (client.seekingID == ws.id) {
            client.send((0, messageTemplate_1.default)('endPrint', 'status', undefined));
        }
    });
}
exports.endPrint = endPrint;
