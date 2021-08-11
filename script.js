// Variables
const gameScreen = document.querySelector('#gameScreen')
let dialogueBox = document.querySelector('.dialogue')
const mainCharacter = document.querySelector('.mainChar')
const policeOfficer = document.querySelector('.officer')
const supportingCharacter = document.querySelector('.detectivetwo')
const corpse = document.querySelector('.corpse')
const purse = document.querySelector('.clueone')
const garbage = document.querySelector('.garbage')
const text = document.querySelector('.text')
const buttonOne = document.querySelector('.button1')
const buttonTwo = document.querySelector('.button2')
const buttonThree = document.querySelector('.button3')
const nextButton = document.querySelector('.next')
const copCar = document.querySelector('.car')
console.log(copCar)

let gameActive = false

const gameStart = function () {
  gameActive = true
  text.innerText =
    'The story begins here. It is currently 3 A.M, Dr.Reid arrives at the scene. He is greeted by his new partner David.'
  buttonOne.style.visibility = 'hidden'
  buttonTwo.style.visibility = 'hidden'
  buttonThree.style.visibility = 'hidden'
  nextButton.onclick = function () {
    text.innerText = `Dr. Reid: “You got here so fast David. Unfortunately we have to meet under these circumstances. I will be your mentor for this case”.
    
    Why Aren't you wearing a tie`
    nextButton.onclick = function () {
      text.innerText = `David: “I had to get here fast, I didn't want to be late to my first case and leave a bad impression”. I didnt want wear a tie over my police uniform, already cracking jokes huh`
      nextButton.onclick = function () {
        text.innerText = `Dr. Reid: *sigh*  it’s time to get to work.`
        nextButton.onclick = function () {
          text.innerText = `David: “ Alright Mr Reid, You can talk to the officer that first arrived on scene. He is over standing by his car”`
          nextButton.onclick = function () {
            text.innerText = `David: “According to what I was told The old lady was stabbed to death, no Sign of a murder weapon and no proof of identity has been found but we haven’t had the chance to look around yet.`
            nextButton.onclick = function () {
              text.innerText = `Look around for clues and talk to people to get more information`
              nextButton.style.visibility = 'hidden'
            }
          }
        }
      }
    }
  }
}

function clickOfficer() {
  policeOfficer.addEventListener('click', function () {
    text.innerText = `Dr.Reid: “Hey Officer I have some questions for you”.`
    buttonOne.style.visibility = 'visible'
    buttonOne.innerText = `“any identification recovered?”`
    buttonOne.addEventListener('click', function () {
      text.innerText = `No but weird thing, It’s a dark alley and no one walks through here so how did she end up here?`
      buttonOne.style.visibility = 'hidden'
    })
    buttonTwo.style.visibility = 'visible'
    buttonTwo.innerText = `Was their anyone here before you?`
    buttonTwo.addEventListener('click', function () {
      text.innerText = `No, Your partner David was already here, He was in the vicinity and said he wanted to impress you`

      buttonTwo.style.visibility = 'hidden'
    })
    buttonThree.style.visibility = 'visible'
    buttonThree.innerText = 'Any sign of the murder weapon'
    buttonThree.addEventListener('click', function () {
      text.innerText = `“No, sir, But I also didn’t get a chance to look”`
      buttonThree.style.visibility = `hidden`
    })
  })
}

supportingCharacter.addEventListener('click', function () {
  text.innerText = `David: “When You’re done looking around, head to the police car so we can go to the next POI”`
  buttonOne.style.visibility = `hidden`
  buttonTwo.style.visibility = `hidden`
  buttonThree.style.visibility = `hidden`
})
// Clue # 1
corpse.addEventListener('click', function () {
  text.innerText = `Dr.Reid: Who couldve done this...`
  buttonOne.style.visibility = 'visible'
  buttonOne.innerText = `Examine body`
  buttonOne.addEventListener('click', function () {
    text.innerText = `You see wounds to the heart, abdomen. ‘You learn that the wounds are consistent with a screwdriver”`
    buttonOne.style.visibility = `hidden`
  })
  buttonTwo.innerText = `Check pockets`
  buttonTwo.style.visibility = 'visible'
  buttonTwo.addEventListener('click', function () {
    text.innerText = `You find a movie ticket, pocket candy and a note
     The note reads - “I had fun with you today, can't wait to see you again - T.D”
      `
    buttonTwo.style.visibility = 'hidden'
  })
  buttonThree.innerText = `Estimate Time of death`
  buttonThree.style.visibility = 'visible'
  buttonThree.addEventListener('click', function () {
    text.innerText = `“From the looks of it, she has been deceased for approximately three hours”`
    buttonThree.style.visibility = `hidden`
  })
})
// Clue #2
purse.addEventListener('click', function () {
  buttonOne.style.visibility = `visible`
  buttonOne.innerText = `Search purse`
  text.innerText = `This must be her purse!`
  buttonOne.addEventListener('click', function () {
    text.innerText = `In the purse you find a driver's license that reads the name Nancy Peterson`
    buttonOne.style.visibility = `hidden`
    buttonTwo.style.visibility = 'visible'
    buttonTwo.innerText = `Run Id with dispatch`
    buttonTwo.addEventListener('click', function () {
      text.innerText = `Dispatch: “Nancy Peterson has a son named Peter Smith I’m Connecting Him now”`
      buttonTwo.style.visibility = `hidden`
      nextButton.style.visibility = `visible`
      nextButton.addEventListener('click', function () {
        text.innerText = `Peter: “Hello?”
          Dr. Reid: “Hi Peter, I am detective Reid”
          `
        nextButton.style.visibility = `visible`
        nextButton.addEventListener('click', function () {
          text.innerText = `Dr.Reid: “Your mother was found dead today I have some questions for you”`
          nextButton.style.visibility = `hidden`
          buttonOne.style.visibility = `visible`
          buttonTwo.style.visibility = `hidden`
          buttonThree.style.visibility = `visible`
          buttonOne.innerText = `When was the last time you saw your mother?`
          buttonThree.innerText = ` anyone else we can talk to?`
        })
      })
      buttonThree.addEventListener('click', function () {
        text.innerText = `You can speak to my father, his name is Donald Smith and his number is 555-7932`
        buttonThree.style.visibility = `hidden`
      })
      buttonOne.addEventListener('click', function () {
        text.innerText = `Peter: We went out to eat about a month ago with my father, It didn't go well they argued and she left the restaurant in tears`
        buttonOne.style.visibility = `hidden`
        buttonTwo.style.visibility = `hidden`
      })
    })
  })
})

//Clue # 3
garbage.addEventListener('click', function () {
  text.innerText = `Dr.Reid: My favorite part on this job... Digging through the trash`
  buttonOne.style.visibility = `visible`
  buttonOne.innerText = `Search Garbage`
  buttonOne.addEventListener('click', function () {
    text.innerText = `You found a screwdriver that has blood on it, You found the murder weapon!`
    nextButton.style.visibility = `visible`
    buttonOne.style.visibility = `hidden`
    nextButton.addEventListener('click', function () {
      text.innerText = `
      weapon has been sent over to DNA to be analyzed.

      Dr.Reid: Now that I found the murder weapon I need to see if there is any other clues in this area.
        `
      buttonOne.style.visibility = `hidden`
      buttonThree.style.visibility = `hidden`
    })
  })
})

// access to part 2
copCar.addEventListener('click', function () {
  window.location = './part2.html'
})

clickOfficer()
gameStart()
