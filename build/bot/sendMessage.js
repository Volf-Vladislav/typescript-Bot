"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = __importDefault(require("./Model"));
var regular_1 = require("./regular");
function sendMessage(message, strategy) {
    message = message.replace(/[^a-zа-яё\s]/gi, '');
    var user = new Model_1.default().createUser(strategy);
    if ((0, regular_1.findWord)(message, regular_1.greeting)) {
        return user.data.greeting;
    }
    else if ((0, regular_1.findWord)(message, regular_1.status)) {
        return user.data.status;
    }
    else if ((0, regular_1.findWord)(message, regular_1.name)) {
        return user.data.name;
    }
    else if ((0, regular_1.findWord)(message, regular_1.agree)) {
        return 'Что ' + message + '?';
    }
    else if ((0, regular_1.findWord)(message, regular_1.work)) {
        return user.data.work;
    }
    else if ((0, regular_1.findWord)(message, regular_1.hobby)) {
        return user.data.hobby;
    }
    else if ((0, regular_1.findWord)(message, regular_1.age)) {
        return user.data.age;
    }
    else
        return 'Ты смотрел фильм хранители от снайдера?';
}
exports.default = sendMessage;
