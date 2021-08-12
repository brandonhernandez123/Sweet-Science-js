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
const bloodyNote = document.querySelector('.bloodynote')
const pantryLock = document.querySelector('.pantrylock')
const pantryKey = document.querySelector('.pantrykey')

let gameStart = false

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
  pantryKey.style.visibility = `hidden`
  pantryLock.style.visibility = `hidden`
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

photo.addEventListener('click', function () {
  text.innerText = `Its a family portrait but the fathers picture has his face cut out`
})

toolBox.addEventListener('click', function () {
  text.innerText = `I wonder why there is a toolbox sitting in the middle of the kitchen...`
  firstButton.style.visibility = `visible`
  firstButton.innerText = `Search Toolbox?`
  firstButton.addEventListener('click', function () {
    text.innerText = `A screwdriver is missing and there is plyers with blood all over them
    
    You found a key in the toolbox`
    firstButton.style.visibility = `hidden`
    pantryKey.style.visibility = `visible`
    toolBox.style.visibility = `hidden`
  })
})

bloodyNote.addEventListener('click', function () {
  text.innerText = `There is a bloody note stuck to the wall...`
  firstButton.style.visibility = `visible`
  firstButton.innerText = `Examine Bloody note`
  secondButton.style.visibility = `visible`
  secondButton.innerText = `Read Note?`
  firstButton.addEventListener('click', function () {
    text.innerText = `The blood is fresh...
      
      Reid: Stay sharp David this blood is fresh`
    firstButton.style.visibility = `hidden`
  })
  secondButton.addEventListener('click', function () {
    text.innerText = `Note reads: This whole family is a waste and whoever you are investigating this... You're making a huge mistake
    
    David: Someone had this all planned out.`
    secondButton.style.visibility = `hidden`
  })
})

pantryKey.addEventListener('click', function () {
  text.innerText = `You found the pantry key`
  pantryLock.style.visibility = `visible`
  pantryKey.style.visibility = `hidden`
  pantryLock.addEventListener('click', function () {
    text.innerText = `You find a jar with eyeballs
        
        Reid: This is brutal, we need to find who did this!`
  })
})

clickKey()
clickDetective()
gameActive()
