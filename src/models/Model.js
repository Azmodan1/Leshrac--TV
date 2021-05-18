export class Game {
  name = 'Violin Charades'
}
const myGame = new Game('leshrac')

const p = document.createElement('p')
p.textContent = `I like ${myGame.name}.`

const heading = document.createElement('h1')
heading.textContent = 'Как стан Лешрака!'

const leshracs = document.createElement('h2')
leshracs.textContent = 'Diabolic!'

const root = document.querySelector('#root')
root.append(heading, p, leshracs)
