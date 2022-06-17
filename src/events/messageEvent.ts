import Ws from './../helpers/Ws'
import seekingEvent from './particles/seekingEvent'
import messageEvent from './particles/messageEvent'

import { print, endPrint } from './particles/printEvent'

function onMessageEvent(message: any, ws: Ws, wss: any) {
    message = JSON.parse(message)

    if (message.event == 'status') {
        if (message.data.status == 'seeking') {
            seekingEvent(message, ws, wss)
        }

        else if (message.data.status == 'print') {
            print(ws, wss)
        }
        else if (message.data.status == 'endPrint') {
            endPrint(ws, wss)
        }
    }

    else if (message.event == 'message') {
        messageEvent(message, ws, wss)
    }
}

export default onMessageEvent