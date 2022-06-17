import Ws from '../helpers/Ws'
import messageTemplate from '../helpers/messageTemplate'
import sendMessage from './sendMessage'

class Bot {
    private language: string
    private gender: string
    private model = this.getRandomArbitrary(1, 4)
    private ws: Ws
    private printSpeed:number = 150
    private readSpeed:number = 50

    constructor(language: string, gender: string, ws: Ws) {
        this.language = language
        this.gender = gender
        this.ws = ws
    }

    public start() {
        this.ws.onmessage = (message: any) => {
            message = JSON.parse(message.data)

            if (message.event == 'message') {
                const msg = message.data.data.toLowerCase()
                this.readSimulation(msg)
            }
        }
    }

    private getRandomArbitrary(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min)
    }

    private printSimulation(msg:string) {
        this.ws.send(messageTemplate('print', 'status', undefined))

        setTimeout(() => {
            this.ws.send(messageTemplate({ data: sendMessage(msg, this.model) }, 'message', undefined))
            this.ws.send(messageTemplate('endPrint', 'status', undefined))
        }, sendMessage(msg, this.model).length * this.printSpeed)
    }

    private readSimulation(msg:string) {
        setTimeout(() => {
            this.printSimulation(msg)
        }, msg.length * this.readSpeed)
    }
}

export default Bot