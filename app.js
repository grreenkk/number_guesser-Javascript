//DOM SELECTORS
let game = document.querySelector('#game');
let numberInput = document.querySelector('#guess-input');
let guessBtn = document.querySelector('#guess-btn');
let minNum = document.querySelector('.min-num');
let maxNum = document.querySelector('.max-num');
let message = document.querySelector('.message');


//Other variable

let min = 0;
let max = 10;
let correctNum = randomNum();
console.log(correctNum)
let triesLeft = 4

minNum.textContent = min;
maxNum.textContent = max;

minNum.style.color = 'red'
maxNum.style.color = 'yellowgreen'

function randomNum(){

  return Math.floor(Math.random() * 10)
  
  
}
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    location.reload()
  }
});
guessBtn.addEventListener('click', addNumber)

function addNumber(){
  console.log(correctNum)
  if(isNaN(numberInput.value) || numberInput < min || numberInput.value > max){
    message.innerHTML = "please insert the correct number"
  }else{
    triesLeft -= 1
    if(parseInt(numberInput.value) === correctNum){
      gameOver(true,`You won, ${correctNum} is correct`, 'yellowgreen');
      
    }else{
      
     
      if (triesLeft != 0) {
       gameOver(false,`${numberInput.value} is not correct, you have ${triesLeft} guesses remaining`, 'red');
      }else{
       gameOver(true,'game over', 'red');
      }
      if(isNaN(numberInput.value) || numberInput < min || numberInput.value > max){
       message.innerHTML = "please insert the correct number"
      }
    }
  }
  
 
}

function gameOver(won, words, color){
  if(won){
    numberInput.disabled = won
    guessBtn.className = 'play-again'
    guessBtn.setAttribute('value', 'Play again')
  }
  
  message.textContent = words;
  message.style.color = color;
  numberInput.style.borderColor = color
  
}
