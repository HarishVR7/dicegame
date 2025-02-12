var num1 = Math.random();
var  randomnumber1 =  Math.floor(num1*6) +1;

var num2 = Math.random();
var randomnumber2 = Math.floor(num2*6)+1;

var randomDiceImage = "dice" + randomnumber1 + ".png";
var randomImageSource = "./images/"+ randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randomDiceImage = "dice" + randomnumber2 + ".png";
var randomImageSource = "./images/"+ randomDiceImage;
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImageSource);

if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML= "Player 1 wins";
}else if(randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}else {
    document.querySelector("h1").innerHTML = "Draw try again"
}
