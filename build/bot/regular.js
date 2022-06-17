"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findWord = exports.age = exports.hobby = exports.work = exports.name = exports.agree = exports.status = exports.greeting = void 0;
exports.greeting = ['привет', 'здравствуй', 'доброе утро', 'добрый день', 'добрый вечер'];
exports.status = ['дела', 'жизнь', 'делаешь'];
exports.agree = ['ок', 'ясно', 'понял', 'поняла', 'понятно'];
exports.name = ['как зовут', 'твоё имя', 'твое имя', 'как звать', 'вас зовут', 'тебя зовут'];
exports.work = ['работаешь', 'твоя работа', 'зарабатываешь', 'работаете'];
exports.hobby = ['занимаешься', 'твоё имя', 'твое имя', 'как звать', 'занимаетесь'];
exports.age = ['лет', 'возраст', 'годиков'];
function findWord(word, str) {
    for (var i = 0; i <= str.length; i++) {
        if (word.indexOf(str[i]) >= 0) {
            return true;
        }
    }
    return false;
}
exports.findWord = findWord;
