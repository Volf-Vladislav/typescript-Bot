export const greeting: string[] = ['привет', 'здравствуй', 'доброе утро', 'добрый день', 'добрый вечер']
export const status: string[] = ['дела', 'жизнь', 'делаешь']
export const agree: string[] = ['ок', 'ясно', 'понял', 'поняла', 'понятно']
export const name: string[] = ['как зовут', 'твоё имя', 'твое имя', 'как звать', 'вас зовут', 'тебя зовут']
export const work: string[] = ['работаешь', 'твоя работа', 'зарабатываешь', 'работаете']
export const hobby: string[] = ['занимаешься', 'твоё имя', 'твое имя', 'как звать', 'занимаетесь']
export const age: string[] = ['лет', 'возраст', 'годиков']

export function findWord(word: string, str: string[]) {
    for (let i = 0; i <= str.length; i++) {
        if (word.indexOf(str[i]) >= 0) {
            return true
        }
    }

    return false
}