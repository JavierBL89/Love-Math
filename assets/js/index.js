
document.addEventListener("DOMContentLoaded", function() {
let buttons = document.getElementsByTagName("button");
for(let button of buttons){
    button.addEventListener("click", function(){
        if(this.getAttribute("data-type")=== "submit"){
            checkAnswer();
        }else{
            let gameType = this.getAttribute("data-type");
            runGame(gameType);
        }
    })
}
    runGame("addition");
});


/**
 * The main game "loop", called whan the script is first loade
 * and after the user's answer has ben procceded
 */
function runGame(gameType){

  let num1 = Math.floor(Math.random() *25) + 1;
  let num2 = Math.floor(Math.random() *25) + 1;

//   DISPLAY QUESTION
  if(gameType === "addition"){
      displayAdditionQuestion(num1, num2);
      calculateCorrectAnswer();
  }else{
      alert(`Unknown game type: ${gameType}`);
      throw `Unknown game type: ${gameType}. Aborting!`;
  }

}

/**
 * 1- OPTION- Check userAnserw against the returned calculation from calculateCorrectAnswer()
 * 2- OPTION Check the returned array from  calculateCorrectAnswer()
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
        let result =  calculateCorrectAnswer();
        // 1- OPTION

        // if(userAnswer === result){
        //     alert(userAnswer + " es igual a " + result);
        // }else{
        //     alert(`bad luck, your answer ${userAnswer} is not correct, the correct answer is ${result[0]}`);
        // }
    
    // 2- OPTION (this allows us to run the game again
    // by calling the function and passing in the second value of the array as bellow)
     
    let isCorrect = userAnswer === result[0];
    if(isCorrect){
        alert("congartulations," + userAnswer + " is equal to" + result[0]);

    }else{
        alert(`bad luck, your answer "${userAnswer}" is not correct, the correct answer is ${result[0]}`);
    }
    // document.getElementById("answer-box").innerHTML =reset();
    runGame(result[1]);
}

/**
 * Gets the operands and opertator 
 * directly from the DOM
 * Aand returns the correct answer
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator=  document.getElementById("operator").textContent;

    if(operator === "+"){
        // console.log( [operand1 + operand2, "addition"]);

         // 1- OPTION   
        //  return operand1 + operand2;
         
         // 2- OPTION

        return [operand1 + operand2, "addition"];
        
    }else{
        alert(`Unimplemented operator: ${operator}`);
        throw `Unimplemented operator: ${operator}`;
    }
    
}

function incrementScore(){
    
}
function incrementWrongAnswer(){
    
}
function displayAdditionQuestion(operand1, operand2){
    
    document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "+" ;
}
function displaySubtractQuestion(){
    
}
function displayMultiplyQuestion(){
    
}

function displayDivideQuestion(){
    
}

