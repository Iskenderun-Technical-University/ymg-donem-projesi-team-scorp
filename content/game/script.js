const button = document.getElementById("submit_btn");
const user_data = document.getElementById("input_text").value; // get data by input
const target = generateRange0to100();




//this function generates number between 0 and 100. (100 is inclusive)
function generateRange0to100(){
  return Math.floor(Math.random()*101);
};

//this function compares the value of parameter with data provided by user.
function findNumber(user_data){
  const record_div = document.getElementById("div1");
  record_div.style.backgroundColor = "red";
  alert(target)
};

button.addEventListener("onclick", findNumber(user_data));






/*
const record_div = document.getElementById("div1");
record_div.style.backgroundColor = "red";
const roundCounter = 1;
*/