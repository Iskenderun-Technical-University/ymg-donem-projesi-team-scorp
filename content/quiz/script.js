const questions = [
    {
        question: "Aşağıdakilerden hangisi obje yönümlü dildir?",
        answers: [
            { text: "C++", correct: false},
            { text: "JavaScript", correct: false},
            { text: "Java", correct: false},
            { text: "Hepsi", correct: true},
        ]
    },
    {
        question: "CSS'de metni ortalamak için hangi özellik kullanılır?",
        answers: [
            { text: "Text-align:center;", correct: true},
            { text: "justify-content:center;", correct: false},
            { text: "align-items:center", correct: false},
            { text: "Hepsi", correct: false},
        ]
    },
    {
        question: "Aşağıdakilerden hangisi bir programlama dili değildir?",
        answers: [
            { text: "Java", correct: false},
            { text: "HTML", correct: true},
            { text: "C++", correct: false},
            { text: "Python", correct: false},
        ]
    },
    {
        question: "Bir website'ye CSS kodlarını farkli bir stil dosyasından entegre edersek hangi yöntemi kullanmış oluruz?",
        answers: [
            { text: "internal", correct: false},
            { text: "external", correct: true},
            { text: "inline", correct: false},
            { text: "hiçbirisi", correct: false},
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