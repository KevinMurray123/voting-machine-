let hiddenFontSize = 12;
let count = 0

function onPageLoad(){
    choose.innerHTML = "Choose Your Canidate!";
}

function clickNixon(){
    hiddenText.innerHTML = "Your vote has been cast!";
}

function clickMcGovern(){
    
    if(count == 0){
        choose.innerHTML = "I said choose your canidate..."
        count++;
    }
    else if(count == 1){
        McGovern.style.top = "10px";
        choose.innerHTML = "up high!"
        count++;
    }
    else if(count == 2){
        McGovern.style.top = "250px";
        choose.innerHTML = "down low!"
        count++;
    }
    else if(count == 3){
        McGovern.style.left = "600px"
        choose.innerHTML = "too slow..."
        count++;
        console.log(count)
    }
    else if(count == 4){
        McGovern.style.left = "705px"
        McGovern.style.top = "34000px"
        for(let i = 0; i < 1000; i++){
            let text = document.createElement("p");
            text.innerHTML = "CRIMINAL";
            text.style.color = "red";
            main.appendChild(text);
        }
        html.style.background = "url(images/maroPNGPNGPNG.jpg)";
        html.style.backgroundSize = "100%"
    }
}

setTimeout(onPageLoad, 100);

Nixon.addEventListener("click", clickNixon)
McGovern.addEventListener("click", clickMcGovern)



