import WebSocket from 'ws'

import Ws from './helpers/Ws'

import closeConnection from './events/closeConnection'
import messageEvent from './events/messageEvent'

const port: number = 8000

const wss = new WebSocket.Server({ port: port }, () => {
    console.log('Server started on ' + port)
})

wss.on('connection', (ws:Ws) => {
    try {
        ws.on('message', message => {
            messageEvent(message, ws, wss)
        })

        ws.on('close', () => {
            closeConnection(wss, ws)
        })
    }
    catch (error) {
        console.log(error)
    }
})
