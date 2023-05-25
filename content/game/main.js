
    
    // Defaults
    document.getElementsByName("greet")[0].placeholder = "Bir şeyler yaz...";
    let branching = 99;
    let c = 0;
    
    //  Gritty Rotation Stationa
    let rotateLeft = document.querySelector("#left");
    let rotateRight = document.querySelector("#right");
    let rotation = 0
    function Left(){
        rotation = rotation - 15
        document.querySelector("#rotatedIMG").style.transform="rotate(" + rotation + "deg)";
    }
    function Right(){
        rotation = rotation + 15
        document.querySelector("#rotatedIMG").style.transform="rotate("+ rotation+ "deg)";
    }
    rotateLeft.addEventListener("click",Left);
    rotateRight.addEventListener("click",Right);


    //  Hide and Go Gritty
    let myBorder = document.getElementsByClassName("img-box")[0];
    let myImage = document.getElementById("hiddenIMG");
    function hide(){
        myImage.style.visibility = "hidden";
    }
    function show(){
        myImage.style.visibility = "visible";
    }
    myBorder.addEventListener("mouseover",hide);
    myBorder.addEventListener("mouseout", show);


    //   Gritter
    function gritter(){
        var newLI = document.createElement("LI");
        var newIMG = document.createElement("IMG");
            newIMG.src = "./assets/better_than_drake.png";            
        const newText = document.getElementsByName("greet")[0].value;
        var newP = document.createElement("P");
            newP.innerHTML = newText;

        newLI.appendChild(newIMG);
        newLI.appendChild(newP);

        if(newText != ""){
            document.getElementById("myList").appendChild(newLI);
            document.getElementsByName("greet")[0].value = "";
        }
    }
    const submitBTN = document.querySelector("#sbmt");
    submitBTN.addEventListener("click",gritter);



    //find num
    const button = document.getElementById("submit_btn");
    const target = generateRange0to100();
    const record_div = document.getElementById("record");
    const record_text = document.createElement("P");
    const message_text = document.createElement("P");
    const hint_text = document.createElement("P");
    let IsTextOn = false;
    let counter = 0;
    record_text.innerHTML = "Tahminler: ";
    message_text.innerHTML = "HATALI TAHMİN";
    hint_text.innerHTML= "";

    button.addEventListener("click", findNumber);

    //this function generates number between 0 and 100. (100 is inclusive)
    function generateRange0to100(){
        return Math.floor(Math.random()*101);
    };
    
    //this function compares the value of parameter with data provided by user.
    function findNumber(){
        const user_data = document.getElementById("input_text").value; // get data by input
        if(!IsTextOn){
            IsTextOn = true;
            record_div.appendChild(record_text);
            record_div.appendChild(message_text);
            record_div.appendChild(hint_text);
            record_text.className = "toFindNumberTexts";
            message_text.className = "toFindNumberTexts";
            hint_text.className = "toFindNumberTexts";
        }
        if(user_data == "")
        {                                                                               
            if(counter != 5){
                counter++;
                record_text.innerHTML = record_text.innerHTML + " " + 0;
                hint_text.innerHTML  = "Çok düşük!!!";
            }
            else{
                message_text.innerHTML = "Kaybettin :(";
                message_text.style.backgroundColor = "red";
            } 
        }                                                                                          
        else{
            if(counter != 5){
                counter++;

                if(user_data == target)
                {
                    //record_text.innerHTML = record_text.innerHTML + " " + user_data;
                    alert("kazandın");
                }
                else if(user_data < target){
                    // too low
                }
            }
            else{
                message_text.innerHTML = "Kaybettin :(";
            }
        }
    };



    


/*
const record_div = document.getElementById("div1");
record_div.style.backgroundColor = "red";
const roundCounter = 1;

*/


