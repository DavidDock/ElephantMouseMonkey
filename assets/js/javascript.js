//all const needed
const questionSection = document.getElementById("question-section");
const rules = document.getElementById("rules");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const wrong = document.getElementById("wrong");
const answer = document.getElementById("answer");
const question = document.getElementById("question");

//event listeners for correct and incorrect answer to question
//corect answer (yes button) takes user to rules area
//incorrect answer (no button) runs function incorrect
yes.addEventListener('click', function() {
  questionSection.style.display = "none";
  rules.style.display = "flex"; 
});

no.addEventListener('click', incorrect);

//function inncorect to inform user answer is wrong
function incorrect() {
    questionSection.style.backgroundColor= "#fd0e35";
    wrong.style.display= "block";
    answer.style.display= "none";
    no.style.display= "none";
    question.style.display= "none";
    yes.innerHTML= "Play Game"; 
  }