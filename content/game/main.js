if (typeof document !== 'undefined'){
    
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
    const submitBTN = document.querySelector("#sbmt")
    submitBTN.addEventListener("click",gritter);
}

