//word is chosen at random from bank
//number of letters is displayed as underscores to user
//user guesses at letters, if right they are displayed, if wrong, the man is hanged
//hint button displays hint corresponding to that country




let wordbank = ["Canada","England","America","France","Turkey","China","Korea","Vietnam","Egypt","Iceland"];
let hintBank = ["This country is famous for its maple syrup.","A famous dish from this country is beans on toast.","This country is famous for its love for freedom.","This country is famous for its baguettes.","This country contains the only city that is in both Europe and Asia.","The invention of paper took place in this country.","This asian country is on a peninsula.","This country is home to the largest cave in the world.","This country is famous for its pyramids.","This nordic country is famous for its volcanos"];
let randomCountry = wordbank[randomNumber()];
let wordArray = Array.from(randomCountry);
let displayedArray = fillUnderscores(wordArray);
let imageArray = ["Hangman7.png","Hangman6.png","Hangman5.png","Hangman4.png","Hangman3.png","Hangman2.png","Hangman1.png"];
let displayedImageIndex = 0;
let isGameEnded = false;



displayArray(displayedArray);

addEventListener("keydown", function(e) {

    if(!isGameEnded){
        if(!evaluateLetterChoiceV3(e.key)){
            proceedHanging();
        }
        displayArray(displayedArray);
        victoryChecker()  
        failureChecker()
    }
    
});


function fillUnderscores(array) {
    let underscores = [];
    array.forEach(element => {
        if(element.indexOf == array.length) {
            underscores.push('_');
        } else {
            underscores.push('_ ');
        }
    });
    return underscores;
}

function randomNumber() {
    return Math.floor(Math.random()*10);
}

function displayArray(array) {
    let stringToReturn = "";
    array.forEach(element => {
        stringToReturn += element;
    });
    document.getElementById("wordToGuess").innerHTML = stringToReturn;
}





function evaluateLetterChoiceV3(letter) {
    let correctGuess = false;
    for(let index = 0; index < wordArray.length; index++) {
        if(wordArray[index].toLowerCase() == letter.toLowerCase()) {
            displayedArray[index] = wordArray[index];
            correctGuess = true;
        }
    }
    return correctGuess;
}


function victoryChecker() {
    if(wordArray.toString() === displayedArray.toString()){
        document.getElementById("result").innerHTML = "Victory!";
        isGameEnded = true;
        
    }
    
}



document.getElementById("resetButton").addEventListener('click', function(e) {
    randomCountry = wordbank[randomNumber()];
    wordArray = Array.from(randomCountry);
    displayedArray = fillUnderscores(wordArray);
    displayArray(displayedArray);
    document.getElementById("result").innerHTML = "";
    document.getElementById("hints").innerHTML = "";
    isGameEnded = false;
    displayedImageIndex = 0;
    document.getElementById("image").setAttribute("src", `images/${imageArray[displayedImageIndex]}`);
})

document.getElementById("hintButton").addEventListener('click', function(e) {
    document.getElementById("hints").innerHTML = hintBank[wordbank.indexOf(randomCountry)];
})


function proceedHanging() {
    document.getElementById("image").setAttribute("src", `images/${imageArray[++displayedImageIndex]}`);
}

function failureChecker() {
    if(displayedImageIndex == 6) {
        document.getElementById("result").innerHTML = "Failure: Man Is Hung!";
        isGameEnded = true;
    }
}

