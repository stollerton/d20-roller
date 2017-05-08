//This is the function that generates the randomly generated numbers inside a specified range
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}


//sets the variable for the dice and the numbers shown as a result of the functions
var btnDice = document.getElementById("dice");
var lblResult = document.getElementById("result");
//sets the function to begin on click, the function being to start the rolling animation function
btnDice.onclick = function(){
	//This function starts generating random numbers between 1 and 20 until told to stop by the next function
	var rollingAnimation = setInterval(function(){
		lblResult.innerHTML = getRandomInt(1, 20);
	}, 80);
	//This ends the cycles of the function generating a random number between 1 and 20 after a full second
	setTimeout(function(){
		clearInterval(rollingAnimation);
	}, 1000);
};