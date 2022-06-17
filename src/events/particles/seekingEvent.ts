import Ws from '../../helpers/Ws'
import isValidGender from '../../helpers/isValidGender'
import messageTemplate from '../../helpers/messageTemplate'
import connectionSession from './../../helpers/connectionSession'

function seekingEvent(message: any, ws: Ws, wss: any) {
    if(ws.status != 'chating') {
        connectionSession(ws, 1) 
    }

    ws.gender = message.data.gender
    ws.seekingGender = message.data.seekingGender
    ws.id = message.data.id

    wss.clients.forEach((client: any) => {
        if (isValidGender(client, ws)) {
            if (ws.status != 'chating' && client.status != 'chating') {
                ws.status = 'chating'
                client.status = 'chating'
                ws.seekingID = client.id
                client.seekingID = ws.id

                if (ws.id != client.id) {
                    ws.send(messageTemplate('finded', 'status', client.id))
                    client.send(messageTemplate('finded', 'status', ws.id))
                }
            }
        }
    })
}

export default seekingEvent