//part two variables
const partTwoScreen = document.querySelector('#p2gameScreen')
const partTwoDialogue = document.querySelector('.p2dialogue')
const partTwoDetective = document.querySelector('.p2detectivetwo')
const firstButton = document.querySelector('.p2button1')
const secondButton = document.querySelector('.p2button2')
const thirdButton = document.querySelector('.p2button3')
const buttonNext = document.querySelector('.p2next')
const text = document.querySelector('.text')
const pasta = document.querySelector('.pasta')
const toolBox = document.querySelector('.toolbox')
const photo = document.querySelector('.photo')
const keys = document.querySelector('.keys')
const bedroom = document.querySelector('.bedroom')
let gameStart = false
console.log(pasta)
const gameActive = function () {
  gameStart = true
  text.innerText = `You arrived at the Peterson residence

    Dr.Reid: Nothing looks out of place here but we need to look around`
  firstButton.style.visibility = `hidden`
  secondButton.style.visibility = `hidden`
  thirdButton.style.visibility = `hidden`
  buttonNext.style.visibility = `hidden`
  bedroom.style.visibility = `hidden`
  keys.style.visibility = `hidden`
}

const clickDetective = function () {
  partTwoDetective.addEventListener('click', function () {
    text.innerText = `What exactly are we looking for here

We need to get access to the bedroom maybe their is a key somewhere?
`
  })
}

function clickKey() {
  keys.addEventListener('click', function () {
    text.innerText = `You found the bedroom key`
    keys.style.visibility = `hidden`
    bedroom.style.visibility = `visible`
    bedroom.addEventListener('click', function () {
      window.location = `./bedroom.html`
    })
  })
}

pasta.addEventListener('click', function () {
  text.innerText = `An uneaten plate of pasta`
  firstButton.style.visibility = 'visible'
  firstButton.innerText = `Examine Pasta`
  secondButton.style.visibility = `visible`
  secondButton.innerText = `Search Pasta`
  firstButton.addEventListener('click', function () {
    firstButton.style.visibility = `hidden`
    text.innerText = `This pasta has teeth in it that's disgusting!`
  })
  secondButton.addEventListener('click', function () {
    secondButton.style.visibility = `hidden`
    text.innerText = `You find a key in the pasta
      
      David: Someone is playing mind games.`
    pasta.style.visibility = `hidden`
    keys.style.visibility = `visible`
  })
})

clickKey()
clickDetective()
gameActive()
