
// START RUNNING GAME

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit"){
                checkAnswer();
            }else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            checkAnswer()
        }
    });
  runGame("addition");
});

/**
 * Generatin random numbers for the question section
 * and definding default game
 */
function runGame(gameType){

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus()

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    
    if(gameType === "addition"){
        displayAdditionCalculation(num1, num2);
        calculateCorrectAnswer();
    }else if(gameType === "subtract"){
        displaySubtractCalculation(num1, num2);
        calculateCorrectAnswer()

    }else if(gameType === "multiply"){
     displayMultiplyCalculation(num1, num2);
     calculateCorrectAnswer()
    }else if(gameType === "divide"){
      displayDivideCalculation(num1, num2);
      calculateCorrectAnswer();
    }else{
        alert(`Unknown data type: ${gameType}` );
        throw `Unknown data type: ${gameType}`;
    }
}

/**
 * Check the user answer against the calculation array
 * and call the runGame() according the operation data type set in the array 
 */
function checkAnswer(){
    let userAnswer = document.getElementById("answer-box").value;
    let result = calculateCorrectAnswer();

    let isCorrect = userAnswer === result[0];

    if(isCorrect){
        alert(`Your answer ${userAnswer}, is correct: ${result[0]}`)
        incrementScore();

    }else{
        alert(`Your answer ${userAnswer}, is incorrect, the correct answer is ${result[0]}`)
        incrementIncorrectScore();

    }

    runGame(result[1]);

}

/**
 * Get the question values from the DOM and responds accordently
 */
function calculateCorrectAnswer(){

    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").textContent;

  if(operator === "+"){
      return [operand1 + operand2, "addition"];
  }else if(operator === "-"){
    return [operand1 - operand2, "subtract"];
  }else if(operator === "x"){
    return [operand1 * operand2, "multiply"];
  }else if(operator === "/"){
    return [operand1 / operand2, "divide"];
  }else{
      alert(`Opertor Unknown: ${operator}`)
      throw `Opertor Unknown: ${operator}`;
  }

}


function displayAdditionCalculation(operand1, operand2){

    document.getElementById("operand1").innerText = operand1;
    document.getElementById("operand2").innerText = operand2;
    document.getElementById("operator").innerText = "+";

}

function displaySubtractCalculation(operand1, operand2){

    document.getElementById("operand1").innerText = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").innerText = operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").innerText = "-";
}

function displayMultiplyCalculation(operand1, operand2){

    document.getElementById("operand1").innerText = operand1;
    document.getElementById("operand2").innerText = operand2;
    document.getElementById("operator").innerText = "x";
}

function displayDIVIDECalculation(operand1, operand2){

    document.getElementById("operand1").innerText = operand1;
    document.getElementById("operand2").innerText = operand2;
    document.getElementById("operator").innerText = "/";
}


function incrementScore(){
    let score = document.getElementById("score").innerText;

    document.getElementById("score").innerText = ++score;
}

function incrementIncorrectScore(){
    let score = document.getElementById("incorrect").innerText;

    document.getElementById("score").innerText = ++score;
}