import { Game } from '@models/Model'
export class Same {
  name = 'Aiti'
}

const mySame = new Same('leshrac')

const s = document.createElement('p')
s.textContent = `I like ${mySame.name}.`

const lemao = document.createElement('h1')
lemao.textContent = 'Оп мизантроп'

const kefao = document.createElement('h2')
kefao.textContent = 'Валерф!'

const root = document.querySelector('#root')
root.append(lemao, s, kefao)

console.log(Game)
