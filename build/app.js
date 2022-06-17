"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = __importDefault(require("ws"));
var closeConnection_1 = __importDefault(require("./events/closeConnection"));
var messageEvent_1 = __importDefault(require("./events/messageEvent"));
var port = 8000;
var wss = new ws_1.default.Server({ port: port }, function () {
    console.log('Server started on ' + port);
});
wss.on('connection', function (ws) {
    try {
        ws.on('message', function (message) {
            (0, messageEvent_1.default)(message, ws, wss);
        });
        ws.on('close', function () {
            (0, closeConnection_1.default)(wss, ws);
        });
    }
    catch (error) {
        console.log(error);
    }
});
