
var SCORE = 0;

const pickUserHand = (hand) => {
    console.log(hand);
    // hide the current page
    var hands = document.querySelector(".hands");
    hands.style.display = "none";
    // show the next page with the hand you picked

    var contest = document.querySelector(".contest");
    contest.style.display = "flex";

    // Set the user pick
    if (hand == "rock"){
    document.getElementById("userPickImage").src = "/img/Rock.png";
    }
    else if (hand == "paper"){
        document.getElementById("userPickImage").src = "/img/Paper.png";
        }
    else{
        document.getElementById("userPickImage").src = "/img/Scissors.png";
    }
     
    var cpHand = pickComputerHand();
    referee(hand,cpHand);
}

const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * 3)];
    
    
    // set computer image 
     if (cpHand == "rock"){
        document.getElementById("computerPickImage").src = "/img/Rock.png";
        }
        else if (cpHand == "paper"){
            document.getElementById("computerPickImage").src = "/img/Paper.png";
            }
        else{
            document.getElementById("computerPickImage").src = "/img/Scissors.png";
        }
    
    return cpHand;
        
}

const referee = (userHand, cpHand)=> {
    if(userHand == "paper" && cpHand == "scissors"){
        setDecision("YOU LOSE!")
    }if (userHand == "paper" && cpHand == "rock"){
        setDecision("YOU WIN!")
        setScore(SCORE +1);
    }if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
      }
      if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
      if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
      }
      if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");
      }
      if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }

}

const restartGame = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
  
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
  }

const setDecision = (decision) => {
   document.querySelector(".decision h1").innerText = decision;
}

const setScore  = (score) => {
    SCORE = score;
    document.querySelector(".score h1").innerText = score;
}