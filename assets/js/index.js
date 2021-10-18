
document.addEventListener("DOMContentLoaded", function() {

let buttons = document.getElementsByTagName("button");
for(let button of buttons){
    button.addEventListener("click", function(){
        if(this.getAttribute("data-type")=== "submit"){
            alert("puta");
        }else{
            let gameType = this.getAttribute("data-type");
            runGame(gameType);
        }
    })
    runGame("addition");
};


/**
 * The main game "loop", called whan the script is first loade
 * and after the user's answer has ben procceded
 */
function runGame(){

  let num1 = Math.floor(Math.random() *25) + 1;
  let num2 = Math.floor(Math.random() *25) + 1;

  document.getElementsByClassName("operand1").innerHTML = num1;
  document.getElementsByClassName("operand2").innerHTML = num2;
}

function checkAnswer(){
    
}
function calculateCorrectAnswer(){
    
}
function incrementScore(){
    
}
function incrementWrongAnswer(){
    
}
function displayAdditionQuestion(){
    
}
function displaySubtractQuestion(){
    
}
function displayMultiplyQuestion(){
    
}

function displayDivideQuestion(){
    
}

