function generateRange0to100(){
    return Math.floor(Math.random()*100);
}


const target = generateRange0to100();
const V = document.getElementById("num");
const button = document.getElementById("num2");


V.value = generateRange0to100();


const roundCounter = 1;

button.addEventListener("click", );