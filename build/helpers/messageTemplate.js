"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function messageTemplate(data, event, id) {
    var msg = {
        data: data,
        event: event,
        id: id
    };
    return JSON.stringify(msg);
}
exports.default = messageTemplate;
