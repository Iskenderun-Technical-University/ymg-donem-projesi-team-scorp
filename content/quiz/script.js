const questions = [
    {
        question: "2.Dünya Savaşı hangi ülkenin işgaliyle başlamıştır?",
        answers: [
            { text: "Vatikan", correct: false},
            { text: "Endonezya", correct: false},
            { text: "Polonya", correct: true},
            { text: "Avusturya", correct: false},
        ]
    },
    {
        question: "Dünyadaki en küçük ülke hangisidir?",
        answers: [
            { text: "Vatikan", correct: true},
            { text: "Şri Lanka", correct: false},
            { text: "Peru", correct: false},
            { text: "Faroe Adaları", correct: false},
        ]
    },
    {
        question: "Dünyada en çok konuşulan dil hangisidir?",
        answers: [
            { text: "İngilizce", correct: false},
            { text: "Çince", correct: true},
            { text: "Japonca", correct: false},
            { text: "Portekizce", correct: false},
        ]
    },
    {
        question: "insan başına düşen metre kare hesabına göre en kalabalık ülke hangisidir?",
        answers: [
            { text: "Çin", correct: false},
            { text: "Bangladeş", correct: true},
            { text: "Nepal", correct: false},
            { text: "Butan", correct: false},
        ]
    }
];



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn"); 

let currentQuestionIndex = 0;
let score = 0;

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0; 
    nextButton.innerHTML = "Next";
    showQuestion();
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Skor: ${score}`;
    nextButton.innerHTML = "play Again!";
    nextButton.style.display = "block"
}


startQuiz();