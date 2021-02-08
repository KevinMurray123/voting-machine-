let move = 0;
function onPageLoad(){
    text.style.opacity = "100%"
    setTimeout(buttonFade , 10000) 
}

function fadeOut(){
    text.style.opacity = "0%"
    Nixon.style.opacity = "0%"
    McGovern.style.opacity = "0%"
    html.style.backgroundSize = "40%"
}

function buttonFade(){
    Nixon.style.opacity = "100%"
    McGovern.style.opacity = "100%"
}

function clickMcGovern(){
    text.innerHTML = "32.351058, -105.743153 give these coordinates to your loved ones and the authorities because by god theyre going to need them."
    setTimeout(() => {text.innerHTML = "I suggest you start running not that it'll matter in the end anyway."}, 10000)
    setTimeout(fadeOut, 15000)
}

function clickNixon(){
    text.innerHTML = "Yeah I thought so. thank you for casting your vote for nixon"
}

function loadFirstPage(){
    window.location.href = "index.html"
}

function threat(){
    if(move == 0){
        alert(`Choose your next movements very carefuly...`)
        move++;
    }
}

window.addEventListener("mousemove", threat)
window.addEventListener("load", onPageLoad)
McGovern.addEventListener("click", clickMcGovern)
Nixon.addEventListener("click", clickNixon)