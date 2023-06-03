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
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn"); 

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0; 
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState
    let currentQuestion = questions[currentQuestionIndex];
    let question = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    })
}

startQuiz();