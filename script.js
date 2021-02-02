let hiddenFontSize = 12;

function clickHandler(event){
    switch(event){
        case "nixon":
            hiddenText.innerHTML = "Your vote has been cast!"
        break;

        case "mcGovern":
            hiddenText.innerHTML = "an error has occured please try again"
            hiddenFontSize += 10;
            hiddenText.style.fontsize = hiddenFontSize;
        break
    }
}



Nixon.addEventListener("click", clickHandler("nixon"))
McGovern.addEventListener("click", clickHandler("mcGovern"))