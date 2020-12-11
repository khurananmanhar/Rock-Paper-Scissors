let playerPoint = 0;
let computerPoint = 0



function button() {
    let choices = ["r", "p", "s"]
  
    let cChoice = choices[Math.floor(Math.random() * 3)]
  
    let pChoice
    let pInput = document.getElementById("input").value
    
    let posRock = ['rock', 'Rock', 'ROCK', 'r', 'R']
    let posPaper = ['paper', 'Paper', 'PAPER', 'p', 'P']
    let posScis = ['scissors', 'Scissors', 'SCISSORS', 's', 'S']

    if (posRock.includes(pInput)){
        pChoice = "r"
        document.getElementById("pAction").innerHTML = "The Player Played: Rock"
    }else if(posPaper.includes(pInput)){
        pChoice = "p"
        document.getElementById("pAction").innerHTML = "The Player Played: Paper"
    } else if(posScis.includes(pInput)){
        pChoice = "s"
        document.getElementById("pAction").innerHTML = "The Player Played: Scissors"
    }else{
        //Invalid
        document.getElementById("cAction").innerHTML = "Invalid Input"
        document.getElementById("pAction").innerHTML = "Invalid Input"
        document.getElementById("winner").innerHTML = "Invalid Input"
        return
    }
  
    if (cChoice === "r"){
        document.getElementById("cAction").innerHTML = "The Computer Played: Rock"
    }else if(cChoice === "p"){
        document.getElementById("cAction").innerHTML = "The Computer Played: Paper"
    } else if(cChoice === "s"){
        document.getElementById("cAction").innerHTML = "The Computer Played: Scissors"
    
        

    }
  if (pChoice === 'r' && cChoice === 's' 
  || pChoice === 'p' && cChoice === 'r' 
  || pChoice === 's' && cChoice === 'p'){
    //player wins
    playerPoint+=1
    document.getElementById("winner").innerHTML = "You Won!"
    document.getElementById("pPoints").innerHTML = "Player Points: " + playerPoint
  } else if (cChoice === 'r' && pChoice === 's' 
  || cChoice === 'p' && pChoice === 'r' 
  || cChoice === 's' && pChoice === 'p'){
  //computer wins
  computerPoint+=1
  document.getElementById("winner").innerHTML = "Computer Won!"
  document.getElementById("cPoints").innerHTML = "Computer Points: " + computerPoint
  }else{
    //tie game
     document.getElementById("winner").innerHTML = "Tie"
  }
  document.getElementById("input").value = ""
}
