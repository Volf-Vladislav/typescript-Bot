"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var messageTemplate_1 = __importDefault(require("../helpers/messageTemplate"));
var sendMessage_1 = __importDefault(require("./sendMessage"));
var Bot = /** @class */ (function () {
    function Bot(language, gender, ws) {
        this.model = this.getRandomArbitrary(1, 4);
        this.printSpeed = 150;
        this.readSpeed = 50;
        this.language = language;
        this.gender = gender;
        this.ws = ws;
    }
    Bot.prototype.start = function () {
        var _this = this;
        this.ws.onmessage = function (message) {
            message = JSON.parse(message.data);
            if (message.event == 'message') {
                var msg = message.data.data.toLowerCase();
                _this.readSimulation(msg);
            }
        };
    };
    Bot.prototype.getRandomArbitrary = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    Bot.prototype.printSimulation = function (msg) {
        var _this = this;
        this.ws.send((0, messageTemplate_1.default)('print', 'status', undefined));
        setTimeout(function () {
            _this.ws.send((0, messageTemplate_1.default)({ data: (0, sendMessage_1.default)(msg, _this.model) }, 'message', undefined));
            _this.ws.send((0, messageTemplate_1.default)('endPrint', 'status', undefined));
        }, (0, sendMessage_1.default)(msg, this.model).length * this.printSpeed);
    };
    Bot.prototype.readSimulation = function (msg) {
        var _this = this;
        setTimeout(function () {
            _this.printSimulation(msg);
        }, msg.length * this.readSpeed);
    };
    return Bot;
}());
exports.default = Bot;
