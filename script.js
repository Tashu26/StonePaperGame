var userScore = 0;
var comScore = 0;
var userScore_span = document.querySelector("#userScore");
var compScore_span = document.querySelector("#comScore");
var rock_img = document.querySelector("#rock");
var paper_img = document.querySelector("#paper");
var scissor_img = document.querySelector("#scissor");
var display = document.querySelector("#txt1");

function main() {
    console.log("main");
    rock_img.addEventListener("click", function() {
        game("rock");
    });

    paper_img.addEventListener("click", function() {
        game("paper");
    });

    scissor_img.addEventListener("click", function() {
        game("scissor");
    });

}

window.onload = main();

function game(userchoice) {
    console.log("game");
    var choices = ["rock", "paper", "scissor"];
    var number = Math.floor(Math.random() * 3);

    var computerChoice = choices[number];
    console.log(userchoice + computerChoice);
    switch (userchoice + computerChoice) {
        case "rockpaper":
            lose(userchoice, computerChoice);
            break;
        case "paperscissor":
            lose(userchoice, computerChoice);
            break;
        case "scissorrock":
            lose(userchoice, computerChoice);
            break;
        case "paperrock":
            win(userchoice, computerChoice);
            break;
        case "scissorpaper":
            win(userchoice, computerChoice);
            break;
        case "rockscissor":
            win(userchoice, computerChoice);
            break;
        case "paperpaper":
            draw(userchoice, computerChoice);
            break;
        case "rockrock":
            draw(userchoice, computerChoice);
            break;
        case "scissorscissor":
            draw(userchoice, computerChoice);
            break;
    }
}

function win(userchoice, compchoice) {
    console.log("win ");
    userScore = userScore + 1;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = comScore;
    var user_Choice = document.getElementById(userchoice);
    console.log(user_Choice);
    display.innerHTML = "you chose " + userchoice + " & the computer chose " + compchoice + ".  You win🤩";
    user_Choice.classList.add("green-glow");
    setTimeout(function() { user_Choice.classList.remove("green-glow"); }, 1000);

}

function lose(userchoice, compchoice) {
    console.log("lose +");
    comScore = comScore + 1;

    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = comScore;
    var user_Choice = document.getElementById(userchoice);
    display.innerHTML = "you chose " + userchoice + " & the computer chose " + compchoice + ". You lose";
    user_Choice.classList.add("red-glow");
    setTimeout(function() { user_Choice.classList.remove("red-glow"); }, 1000);




}

function draw(userchoice, compchoice) {
    console.log("draw +");
    var user_Choice = document.getElementById(userchoice);
    display.innerHTML = "you chose " + userchoice + " & the computer chose " + compchoice + " It's DRAW";
    user_Choice.classList.add("blue-glow");
    setTimeout(function() { user_Choice.classList.remove("blue-glow"); }, 1000);

}





// var userChoice_div = document.getElementById(user);
// result_p.innerHTML = "You chose "+
// (user) + " & the Computer chose "+convertWord(comp) +". You win. 🔥";
// userChoice_div.classList.add("green-glow");
// setTimeout(function() {userChoice_div.classList.remove("green-glow");}, 1000);