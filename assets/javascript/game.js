$(document).ready(function(){
//Create Variables for Scoreboard
var playerScore = 0;
var playerWins = 0;
var playerLosses = 0;
const winCondition = Math.floor((Math.random() * 119)+20);
console.log(`The win condition is ${winCondition}`);

//Create Variables that will store random variables for Jewels
const jewel1 = Math.floor((Math.random() * 13)+1);
const jewel2 = Math.floor((Math.random() * 13)+1);
const jewel3 = Math.floor((Math.random() * 13)+1);
const jewel4 = Math.floor((Math.random() * 13)+1);
//Check if the variables generated
console.log(`Jewel 1 value is ${jewel1}`);
console.log(`Jewel 2 value is ${jewel2}`);
console.log(`Jewel 3 value is ${jewel3}`);
console.log(`Jewel 4 value is ${jewel4}`);

//Game Reset
function NewGame (){
    playerScore = 0;


}

//Adding the random constant to player score on click of image
$("#jewel_1").click(function(){
playerScore = playerScore + jewel1;
$("#score").val(playerScore);
console.log(playerScore);
});

$("#jewel_2").click(function(){
playerScore = playerScore + jewel2;
console.log(playerScore);
});

$("#jewel_3").click(function(){
playerScore = playerScore + jewel3;
console.log(playerScore);
});

$("#jewel_4").click(function(){
playerScore = playerScore + jewel4;
console.log(playerScore);
});


//Modifing inner HTML




























});