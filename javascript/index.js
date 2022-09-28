// Generating numbers from 1 to 6
let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);

// Setting the images for the dice
let firstDiceImage = "images/dice" + randomNumber1 + ".png";
let secondDiceImage = "images/dice" + randomNumber2 + ".png";

// Changing the dice images
document.querySelector("#dice-player1").setAttribute("src", firstDiceImage);
document.querySelector("#dice-player2").setAttribute("src", secondDiceImage);

// Code for the final results
