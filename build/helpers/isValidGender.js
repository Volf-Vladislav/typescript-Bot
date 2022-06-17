"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidGender(client, ws) {
    if (client != ws && client.readyState == 1) {
        if ((client.gender == ws.seekingGender || client.seekingGender == 'any')
            && (ws.gender == client.seekingGender || ws.seekingGender == 'any')) {
            return true;
        }
        else
            return false;
    }
    else
        return false;
}
exports.default = isValidGender;
