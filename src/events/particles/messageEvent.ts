import Ws from './../../helpers/Ws'
import messageTemplate from '../../helpers/messageTemplate'

function messageEvent(message:any, ws:Ws, wss:any) {
    wss.clients.forEach((client:any) => {
        if (client.seekingID == ws.id) {
            client.send(messageTemplate(message.data, 'message', undefined))
        }
    })
}

export default messageEvent