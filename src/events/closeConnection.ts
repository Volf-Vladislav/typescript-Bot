import Ws from '../helpers/Ws'
import messageTemplate from '../helpers/messageTemplate'

function closeConnection(wss: any, ws: Ws) {
    wss.clients.forEach((client: any) => {
        if (client.seekingID == ws.id && ws.id != client.id) {
            client.send(messageTemplate('disconnected', 'status', undefined))
        }
    })
}


export default closeConnection