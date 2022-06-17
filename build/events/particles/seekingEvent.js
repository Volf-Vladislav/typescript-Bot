"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isValidGender_1 = __importDefault(require("../../helpers/isValidGender"));
var messageTemplate_1 = __importDefault(require("../../helpers/messageTemplate"));
var connectionSession_1 = __importDefault(require("./../../helpers/connectionSession"));
function seekingEvent(message, ws, wss) {
    if (ws.status != 'chating') {
        (0, connectionSession_1.default)(ws, 1);
    }
    ws.gender = message.data.gender;
    ws.seekingGender = message.data.seekingGender;
    ws.id = message.data.id;
    wss.clients.forEach(function (client) {
        if ((0, isValidGender_1.default)(client, ws)) {
            if (ws.status != 'chating' && client.status != 'chating') {
                ws.status = 'chating';
                client.status = 'chating';
                ws.seekingID = client.id;
                client.seekingID = ws.id;
                if (ws.id != client.id) {
                    ws.send((0, messageTemplate_1.default)('finded', 'status', client.id));
                    client.send((0, messageTemplate_1.default)('finded', 'status', ws.id));
                }
            }
        }
    });
}
exports.default = seekingEvent;
