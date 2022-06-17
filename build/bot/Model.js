"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model = /** @class */ (function () {
    function Model() {
    }
    Model.prototype.createUser = function (model) {
        if (model == 1)
            return this.girl();
        else if (model == 2)
            return this.boy();
        else if (model == 3)
            return this.men();
        else
            return this.oldMen();
    };
    Model.prototype.girl = function () {
        return {
            data: {
                age: '22',
                name: 'Эльвира',
                work: 'Я работаю слесарем',
                hobby: 'Пишу стихи',
                greeting: 'Привет)',
                status: 'Отлично, вчера написала новый стих'
            }
        };
    };
    Model.prototype.boy = function () {
        return {
            data: {
                age: '16',
                name: 'не скажу я аноним',
                work: 'я учусь на каменьшика',
                hobby: 'играю в доту',
                greeting: 'привет)',
                status: 'да норм'
            }
        };
    };
    Model.prototype.men = function () {
        return {
            data: {
                age: '44',
                name: 'Сергей',
                work: 'Лично я работаю в сбере но уборщиком',
                hobby: 'Пью пиво)',
                greeting: 'Здравствуй',
                status: 'Как обычно, семья, работа, дети'
            }
        };
    };
    Model.prototype.oldMen = function () {
        return {
            data: {
                age: '65',
                name: 'Александр',
                work: 'Я на пенсии',
                hobby: 'На рыбалку хожу',
                greeting: 'Приветствую',
                status: 'Да нормально, но при Сталине было лучше'
            }
        };
    };
    return Model;
}());
exports.default = Model;
