/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
- User can roll two dice where if one dice is 1, then player looses his turn
- Allow player to set the winning score by entering it (.value property in javascript)
- A player looses his entire score when he rolls two 6 with the two dice 

*/

let playerScores, playerRoundScore, activePlayer;

//set current and total scores to zero
setScoreAndCurrentScoreToZero();

//hide the dice image
document.querySelector('.dice-image').style.display = "none";

// select roll dice button to roll dice when clicked
document.querySelector('#roll-dice-button').addEventListener("click", function(){

  // calculate randon number
  let dice = Math.floor(Math.random() * 6) + 1;
  //console.log(dice);

  // show dice image with correct random number
  let diceDom = document.querySelector('.dice-image');
  diceDom.style.display = "block";
  diceDom.src = "img/dice-" + dice + ".png";

  //if player current score is 1 then next player should play and all score is lost for player one
  if(dice !== 1){
    //add score
      playerRoundScore += dice;
      document.getElementById('currentScore-' + activePlayer).textContent = playerRoundScore;
    }else{
      //next player
      nextPlayer();
    }
});


document.querySelector('#hold-play-button').addEventListener("click", function(){

  // add up scores
  playerScores[activePlayer] += playerRoundScore;

  //display on UI
  document.getElementById('score-' + activePlayer).textContent = playerScores[activePlayer];

  // if player wins
  if (playerScores[activePlayer] >= 100) {
    document.querySelector('#player-text-' + activePlayer).textContent = "Winner!";
    document.querySelector('.dice-image').style.display = "none";
    document.querySelector('#roll-dice-button').style.display = "none";
    document.querySelector('#hold-play-button').style.display = "none";

  } else {
    // go to next player
    nextPlayer();
  }
});

document.querySelector('#new-game-button').addEventListener("click", function(){
  // show roll dice and hold play buttons
  document.querySelector('#roll-dice-button').style.display = "block";
  document.querySelector('#hold-play-button').style.display = "block";
  document.querySelector('.dice-image').style.display = "none";

  // replace winner text with player name
  if (activePlayer == 1){
    document.querySelector('#player-text-' + activePlayer).textContent = "Player 2";
  } else {
    document.querySelector('#player-text-' + activePlayer).textContent = "Player 1"
  }
  // set current and total scores back to zero
  setScoreAndCurrentScoreToZero();

});

function nextPlayer() {
  document.getElementById('currentScore-' + activePlayer).textContent = 0;
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  playerRoundScore = 0;
  document.querySelector(".player-one-sub").classList.toggle("active-player");
  document.querySelector(".player-two-sub").classList.toggle("active-player");
  document.querySelector('.dice-image').style.display = "none";
}

function setScoreAndCurrentScoreToZero(){

  playerScores = [0,0];
  playerRoundScore = 0;
  activePlayer = 0; //player one will be 0 and two 1

  //set current and total scores to zero
  document.getElementById('score-0').textContent = "0";
  document.getElementById('score-1').textContent = "0";
  document.getElementById('currentScore-0').textContent = "0";
  document.getElementById('currentScore-1').textContent = "0";
  document.querySelector(".player-one-sub").classList.remove("active-player");
  document.querySelector(".player-two-sub").classList.remove("active-player");
  document.querySelector(".player-one-sub").classList.add("active-player");
}
