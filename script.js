let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.querySelector("#restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

const quizArray = [
  {
    id: "0",
    question: "which is the most widely spoken language in the world?",
    options: ["Spanish", "Mandarin", "English", "German"],
    correct: "Mandarin",
  },
  {
    id: "1",
    question: "which is the only continent in the world without a desert?",
    options: ["North America", "Asia", "Africa", "Europe"],
    correct: "Europe",
  },
  {
    id: "2",
    question: "who invented Computer?",
    options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
    correct: "Charles Babbage",
  },
];


//Timer
const timerDisplay = () => {
    countdown = setInterval(()=>{
        count--;
        timeLeft.innerHTML = `${count}s`;
        if(count === 0){
            clearInterval(countdown);
            displayNext();
        }
    },1000);
}



//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    //Hide other cards
    quizCards.forEach((card)=>{
        card.classList.add("hide");
    });

    //display current question card
    quizCards[questionCount].classList.remove("hide");
}

//Quiz Creation 
function quizCreator(){
    //randomly sort questions
    quizArray.sort(()=>Math.random() - 0.5);

    //generate quiz
    for(let i of quizArray){
        i.options.sort(()=>Math.random() - 0.5);

        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid","hide");

        //question number
        countOfQuestion.innerHTML = questionCount + 1 + " of " + quizArray.length + " Question";

        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);


        //options
        div.innerHTML += `<button class="option-div" onclick="checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[3]}</button>`;

        quizContainer.appendChild(div);
    }
}

//initial setup
const initial = () => {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}


//when user clicks on start button
startButton.addEventListener("click",()=>{
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
})




//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
}