//part two variables
const partTwoScreen = document.querySelector('#p2gameScreen')
const partTwoDialogue = document.querySelector('.p2dialogue')
const partTwoDetective = document.querySelector('.p2detectivetwo')
const firstButton = document.querySelector('.p2button1')
const secondButton = document.querySelector('.p2button2')
const thirdButton = document.querySelector('.p2button3')
const buttonNext = document.querySelector('.p2next')
const text = document.querySelector('.text')
const spaghetti = document.querySelector('.spaghetti')
const toolBox = document.querySelector('.toolbox')
const photo = document.querySelector('.photo')
const keys = document.querySelector('.keys')
const bedroom = document.querySelector('.door')
let gameStart = false

const gameActive = function () {
  gameStart = true
  text.innerText = `You arrived at the Peterson residence

    Dr.Reid: Nothing looks out of place here but we need to look around`
  firstButton.style.visibility = `hidden`
  secondButton.style.visibility = `hidden`
  thirdButton.style.visibility = `hidden`
  buttonNext.style.visibility = `hidden`
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
  })
}

clickKey()
clickDetective()
gameActive()
