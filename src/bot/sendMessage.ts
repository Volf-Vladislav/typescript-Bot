import Model from './Model'
import {greeting, status, hobby, work, age, name, agree, findWord} from './regular'

function sendMessage(message: string, strategy:number): string {
    message = message.replace(/[^a-zа-яё\s]/gi, '')
    const user:any = new Model().createUser(strategy)

    if (findWord(message, greeting)) {
        return user.data.greeting
    }
    else if (findWord(message, status)) {
        return user.data.status
    }
    else if (findWord(message, name)) {
        return user.data.name
    }
    else if (findWord(message, agree)) {
        return 'Что ' + message + '?'
    }
    else if (findWord(message, work)) {
        return user.data.work
    }
    else if (findWord(message, hobby)) {
        return user.data.hobby
    }
    else if (findWord(message, age)) {
        return user.data.age
    }
    else return 'Ты смотрел фильм хранители от снайдера?'
}

export default sendMessage