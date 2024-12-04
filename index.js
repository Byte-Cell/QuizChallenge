var card = document.getElementById("question-card");
var start = document.getElementById("play-btn");
var question = document.getElementById("question");
var text = document.createElement("h3");
var container = document.createElement("span");
var answer = document.createElement("button");
var incorrect = document.createElement("button");
var score = document.getElementById("score");
var num = 0;

var quiz = [
    {
        question: "A newborn kangaroo is the size of a lima bean",
        answer: "true",
        incorrect: "false"
    },
    {
        question: "A dog’s sense of smell is 1000 times greater than a human’s",
        answer: "true",
        incorrect: "false"
    },
    {
        question: "Octopuses do not have three hearts",
        answer: "false",
        incorrect: "true"
    },
    {
        question: "Wild dolphins call each other by nickname",
        answer: "false",
        incorrect: "true"
    }
];

start.addEventListener("click", startQuiz);
function startQuiz() {
    while(card.hasChildNodes()) {
        card.removeChild(card.firstChild);
    }
    text.innerHTML = quiz[0].question;
    answer.innerHTML = quiz[0].answer;
    incorrect.innerHTML = quiz[0].incorrect;

    card.appendChild(text);
    card.appendChild(container);
    container.appendChild(answer);
    container.appendChild(incorrect);

    container.classList.add("button-container");
    answer.classList.add("buttons");
    incorrect.classList.add("buttons");

    answer.addEventListener("click", checkAnswer);
    incorrect.addEventListener("click", checkAnswer);
}

function checkAnswer() {
    if(this.innerHTML === quiz[0].answer) {
        num += 1;
        score.innerHTML = num
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
    quiz.splice(0, 1);
    if(quiz.length === 0) {
        alert("You have finished the quiz!");
        if(confirm("Would you like to play again?") === true) {
            location.reload(true);
            num = 0;
        } else {
            alert("Thank you for playing!");
        }
    } else {
        startQuiz();
    }
}