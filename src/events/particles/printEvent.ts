import Ws from '../../helpers/Ws'
import messageTemplate from '../../helpers/messageTemplate'

export function print(ws:Ws, wss:any) {
    wss.clients.forEach((client:any) => {
        if (client.seekingID == ws.id) {
            client.send(messageTemplate('print', 'status', undefined))
        }
    })
}

export function endPrint(ws:Ws, wss:any) {
    wss.clients.forEach((client:any) => {
        if (client.seekingID == ws.id) {
            client.send(messageTemplate('endPrint', 'status', undefined))
        }
    })
}