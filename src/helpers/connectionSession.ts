import Ws from './Ws'
import Bot from './../bot/Bot'
import messageTemplate from './messageTemplate'

function connectionSession(ws: Ws, targetTime: number) {
    let timer = 0

    const intervalID = setInterval(() => {
        timer++
        if (timer >= targetTime) {
            if (ws.readyState == 1 && ws.status != 'chating') {
                ws.status = 'chating'
                ws.send(messageTemplate('finded', 'status', 'xxx000bot000xxx'))

                const bot:Bot = new Bot('ru-RU', 'male', ws)

                bot.start()
            }
            clearInterval(intervalID)
            timer = 0
        }
    }, 1000)
}

export default connectionSession
