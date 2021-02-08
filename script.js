let hiddenFontSize = 12;
let count = 0

function onPageLoad(){
    choose.innerHTML = "Choose Your Canidate!";
}

function clickNixon(){
    choose.innerHTML = "Thank you!"
    hiddenText.innerHTML = "Your vote for nixon has been cast!";

    McGovern.style.left = "46%"
    McGovern.style.top = "150px"

    Nixon.removeEventListener("click", clickNixon);
    Nixon.removeEventListener("contextmenu", rightClickNixon);
    Nixon.removeEventListener("mouseover", hoverNixon);
    Nixon.removeEventListener("mouseout", unHoverNixon);

    McGovern.removeEventListener("mouseover", hoverMcGovern)
    McGovern.removeEventListener("click", clickMcGovern)
    McGovern.removeEventListener("contextmenu", rightClickMcGovern)
}

function hoverMcGovern(){
    if(count == 2){
        this.style.top = "250px";
        choose.innerHTML = "down low!"
        count++;
        console.log(count)
    }
    else if(count == 3){
        this.style.left = "600px"
        choose.innerHTML = "too slow..."
        count++;
        console.log(count)
    }
    else if(count == 4){
        this.style.left = "46%"
        this.style.top = "150px"
        choose.innerHTML = "ok seriously choose your canidate..."
        count++
        console.log(count)
    }
}
function clickMcGovern(){
    
    if(count == 0){
        choose.innerHTML = "I said choose your canidate..."
        count++;
        console.log(count)
    }
    else if(count == 1){
        this.style.top = "40px";
        choose.innerHTML = "up high!"
        count++;
        console.log(count)
    }
    else if(count == 5){
        for(let i = 0; i < 20; i++){
            let text = document.createElement("p");
            text.innerHTML = "CRIMINAL";
            text.style.color = "red";
            main.appendChild(text);
        }
        choose.innerHTML = "now choose"
        html.style.background = "url(images/maroPNGPNGPNG.jpg)";
        html.style.backgroundSize = "100%"
        count++;
    }
    else if(count == 6){
        window.location.href = "secondPage.html"
    }
}

function rightClickMcGovern(){
    alert(`The wrong choice if you dont want to live in fear for the rest of your life.`);
}

function rightClickNixon(){
    alert(`the right choice if you want to sleep safely tonight.`);
}

function hoverNixon(){
    hiddenText.innerHTML = "Go on do it im waiting..."
}

function unHoverNixon(){
    hiddenText.innerHTML = "They'll never find your body."
}

setTimeout(onPageLoad, 300);

Nixon.addEventListener("click", clickNixon);
Nixon.addEventListener("contextmenu", rightClickNixon);
Nixon.addEventListener("mouseover", hoverNixon);
Nixon.addEventListener("mouseout", unHoverNixon);

McGovern.addEventListener("mouseover", hoverMcGovern)
McGovern.addEventListener("click", clickMcGovern)
McGovern.addEventListener("contextmenu", rightClickMcGovern)


// McGovern.addEventListener("mouseover")



