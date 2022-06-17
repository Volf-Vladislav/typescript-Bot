class Model {
    public createUser(model:number): Object {
        if (model == 1) return this.girl()
        else if (model == 2) return this.boy()
        else if (model == 3) return this.men()
        else return this.oldMen()
    }

    private girl(): Object {
        return {
            data: {
                age: '22',
                name: 'Эльвира',
                work: 'Я работаю слесарем',
                hobby: 'Пишу стихи',
                greeting: 'Привет)',
                status: 'Отлично, вчера написала новый стих'
            }
        }
    }

    private boy(): Object {
        return {
            data: {
                age: '16',
                name: 'не скажу я аноним',
                work: 'я учусь на каменьшика',
                hobby: 'играю в доту',
                greeting: 'привет)',
                status: 'да норм'
            }
        }
    }

    private men(): Object {
        return {
            data: {
                age: '44',
                name: 'Сергей',
                work: 'Лично я работаю в сбере но уборщиком',
                hobby: 'Пью пиво)',
                greeting: 'Здравствуй',
                status: 'Как обычно, семья, работа, дети'
            }
        }
    }

    private oldMen(): Object {
        return {
            data: {
                age: '65',
                name: 'Александр',
                work: 'Я на пенсии',
                hobby: 'На рыбалку хожу',
                greeting: 'Приветствую',
                status: 'Да нормально, но при Сталине было лучше'
            }
        }
    }
}

export default Model