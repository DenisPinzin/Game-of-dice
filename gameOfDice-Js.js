//SELECTION OF ELEMENTS

const j1Round = document.getElementById('round1')
const dice = document.getElementsByClassName('dice')

//DEFAULT DISPLAY OF DICE 6

dice[5].style.display = 'flex'

//STARTING PLAYER

let joueur1turn = false
let joueur2turn = false

document.addEventListener('DOMContentLoaded', function() {
  let startPlayer = Math.ceil(Math.random()*2)
  if (startPlayer == 1) {
    joueur1turn = true
  } else {
    joueur2turn = true
  }
  console.log(joueur2turn, joueur1turn);
});

//DICE DISPLAY

const intRandom = () => {
  let counter = Math.round(Math.random()*5)
  console.log('\ndés:',counter + 1)
  for(let i = 0; i < 6; i++) {
    dice[i].style.display = 'none'
  }
  dice[counter].style.display = 'flex'
  return counter
}

//DICE INCREMENT

let numbers = 0
const rand = () => {
  let count = intRandom() + 1
 if(numbers < 100) {
  numbers = numbers + count
  j1Round.innerHTML = numbers
} else if ( numbers >= 100) {
  numbers == 100
  return numbers
} else {
  console.log('Une erreur nous est parvenue !')
}
console.log(numbers)}


const rolldice = document.addEventListener('click', rand)
