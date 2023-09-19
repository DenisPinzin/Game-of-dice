//SELECTION OF ELEMENTS

const j1Round = document.getElementById('round1')
const global1 = document.getElementById('global1')
const j1Win = document.getElementById('j1Win')
const j2Round = document.getElementById('round2')
const global2 = document.getElementById('global2')
const j2Win = document.getElementById('j2Win')
const dot1 = document.getElementById('dot1')
const dot2 = document.getElementById('dot2')
const dice = document.getElementsByClassName('dice')
const newGame = document.getElementById('newGame')
const hold = document.getElementById('hold')
const rolldice = document.getElementById('rollDice')
const rules = document.getElementById('rules')
const closeModal = document.getElementById('closeModal')


//RELOAD NEW GAME
const reload = () => {
  window.location.reload();
}

// RULES MODAL
const rulesDisplay = () => {
  ruleModalWin.style.display = 'flex'
}
const closeRules = () => {
  ruleModalWin.style.display = 'none'
}

//REMOVE LISTENER ROLL-DICE & HOLD
const rmvHoldAndRoll = () => {
  rolldice.removeEventListener('click', rolldiceClk)
  hold.removeEventListener('click', holdClk)
  rules.removeEventListener('click', rulesDisplay)
}


//DEFAULT DISPLAY OF DICE 6
hold.setAttribute('disabled', 'true')
rolldice.setAttribute('disabled', 'true')
dice[5].style.display = 'flex'

//STARTING PLAYER

let joueur1turn = false
let joueur2turn = false

document.addEventListener('DOMContentLoaded', function () {
  let startPlayer = Math.ceil(Math.random() * 2)
  if (startPlayer == 1) {
    joueur1turn = true
    dot1.style.display = 'flex'
    dot2.style.display = 'none'
  } else {
    joueur2turn = true
    dot2.style.display = 'flex'
    dot1.style.display = 'none'
  }
  console.log("J1:", joueur1turn, " J2:", joueur2turn);
});

//DICE DISPLAY

const intRandom = () => {
  let counter = Math.round(Math.random() * 5)
  console.log('\ndés:', counter + 1)
  for (let i = 0; i < 6; i++) {
    dice[i].style.display = 'none'
  }
  dice[counter].style.display = 'flex'
  return counter
}

//DICE INCREMENT J1
let J1rndScore = 0

const J1roundDisplay = () => {
  j1Round.innerHTML = J1rndScore
}

const J1Turn = () => {
  J1rndScore = 0
  joueur1turn = false
  joueur2turn = true
  J1roundDisplay()
  dot2.style.display = 'flex'
  dot1.style.display = 'none'
}

const J1Above = () => {
  J1rndScore = 100
  J1roundDisplay()
}

const randJ1 = () => {
  let count = intRandom() + 1
  if (count == 1) {
    J1Turn()
  } else if (J1rndScore < 100) {
    J1rndScore = J1rndScore + count
    J1roundDisplay()
    if (J1rndScore >= 100) {
      J1Above()
    }
  } else if (J1rndScore >= 100) {
    J1Above()
  } else {
    console.log('errorDiceIncrement')
  }
  console.log(J1rndScore)
}

//GLOBAL HOLD J1
let globalJ1 = 0
const holdScoreJ1 = () => {
  if (globalJ1 < 100) {
    globalJ1 = globalJ1 + J1rndScore
    global1.innerHTML = globalJ1
    J1Turn()
    if (globalJ1 >= 100) {
      globalJ1 = 100
      global1.innerHTML = 100
      rmvHoldAndRoll()
      j1Win.style.display = 'flex'
      newGame.setAttribute("class", "newGameL")
    } else if (globalJ2 < 100) {

    } else {
      console.log('error global J1')
    }
  } else if (globalJ1 >= 100) {
    console.log('Highest global J1')
    J1rndScore = 0
    J1roundDisplay()
    rmvHoldAndRoll()
    newGame.setAttribute("class", "newGameL")
  } else {
    console.log('error global J1')
  }
}

//DICE INCREMENT J2
let J2rndScore = 0

const J2roundDisplay = () => {
  j2Round.innerHTML = J2rndScore
}

const J2Turn = () => {
  J2rndScore = 0
  joueur2turn = false
  joueur1turn = true
  J2roundDisplay()
  dot1.style.display = 'flex'
  dot2.style.display = 'none'
}

const J2Above = () => {
  J2rndScore = 100
  J2roundDisplay()
}

const randJ2 = () => {
  let count = intRandom() + 1
  if (count == 1) {
    J2Turn()
  } else if (J2rndScore < 100) {
    J2rndScore = J2rndScore + count
    J2roundDisplay()
    if (J2rndScore >= 100) {
      J2Above()
    }
  } else if (J2rndScore >= 100) {
    J2Above()
  } else {
    console.log('errorDiceIncrement')
  }
  console.log(J2rndScore)
}

//GLOBAL HOLD J2
let globalJ2 = 0
const holdScoreJ2 = () => {
  if (globalJ2 < 100) {
    globalJ2 = globalJ2 + J2rndScore
    global2.innerHTML = globalJ2
    J2Turn()
    if (globalJ2 >= 100) {
      globalJ2 = 100
      global2.innerHTML = 100
      rmvHoldAndRoll()
      j2Win.style.display = 'flex'
      newGame.setAttribute("class", "newGameL")
    } else if (globalJ2 < 100) {

    } else {
      console.log('error global J2')
    }
  } else if (globalJ2 >= 100) {
    console.log('Highest global J2')
    J2rndScore = 0
    J2roundDisplay()
    rmvHoldAndRoll()
    newGame.setAttribute("class", "newGameL")
  } else {
    console.log('error global J2')
  }
}

//ROLL DICE
const rolldiceClk = () => {
  if (joueur1turn == true) {
    randJ1()
  } else if (joueur2turn == true) {
    randJ2()
  } else {
    console.log('error rolldice')
  }
}

//HOLD
const holdClk = () => {
  if (joueur1turn == true) {
    holdScoreJ1()
  } else if (joueur2turn == true) {
    holdScoreJ2()
  } else {
    console.log('error hold')
  }
}

//EVENTS
newGame.addEventListener('click', reload)
rolldice.addEventListener('click', rolldiceClk)
hold.addEventListener('click', holdClk)
rules.addEventListener('click', rulesDisplay)
closeModal.addEventListener('click', closeRules)