
//Text characters count based on input text, and criteria 140
var tweet = prompt("Give me text and I will show you how many you have left, if your criteria is 140");
var tweetCount = tweet.lenght;
Alert("You've written " + tweetCount + " characters, you have" + (140 - tweetCount) + " left");
//Refactoring
var tweet = prompt("Give me text and I will show you how many you have left, if your criteria is 140");
Alert("You've written " + tweet.lenght + " characters, you have" + (140 - tweet.lenght) + " left");

//Slice text based on string lenght
var tweet = prompt("give me a tweet and I will show you the first 10 characters");
var tweetSliced = tweet.slice(0,10);
alert(tweetSliced);
// Refactoring
alert(prompt("give me a tweet and I will show you the first 10 characters").slice(0,10))

//LowerCase all characters and Uppercase First character to say Hello
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log("Hello " + capitalizeFirstLetter(prompt("I will say Hello to some string and capitalize only the first character. What is your string?").toLowerCase()));

//Simple math to calculate dog age to Human age 
function dogAgeToHumanAge(dogAge)
 {	
	if (isNaN(dogAge)) {
		alert("You should type a number!")
	} else {
		return ((dogAge-2)*4) + 21;	
		}
}
console.log("The dog has " + dogAgeToHumanAge(prompt("What is the dog age?")) + " years in human age");

//Return division (quotient & remainder) as an integer based on criteria
function numberOfItemsBasedOnCashAmount(itemPrice,money) {
	var quotient = Math.floor(money/itemPrice);
	var remainder = money%itemPrice;
	var temp = quotient*remainder;
	if (isNaN(remainder)) {
		alert("You should type only numbers!")
	} else {
		return ("You will purchase " + quotient + " items, and you will have " + remainder + " change left.");
		}	
}
var askItemPrice = prompt("How much does a single item cost?");
var askMoneyAmount = prompt("How much do you have to spent?");
console.log(numberOfItemsBasedOnCashAmount(askItemPrice, askMoneyAmount));

//A function that tells you how many days, weeks and months we have left if we live until 90 years old
// 365 days & 52 weeks & 12 months in a year
function timeLeft(currentAge){
	var daysLeft = (90-currentAge)*365;
	var weeksLeft = (90-currentAge)*52;
	var monthsLeft = (90-currentAge)*12;
	var temp = daysLeft*weeksLeft*monthsLeft;
	if (isNaN(temp)){
		alert("You should type only numbers")
		}
		else{
			 return ("You have " + daysLeft + " days, " + weeksLeft + " weeks and " + monthsLeft + " months left.");
		}
	}
var askAge = prompt("How old are you?");
console.log(timeLeft(askAge));
//Body Mass Index Calculator (BMI)
function bodyMassIndex(weight,height) {
	var bmi = weight/(Math.pow(height,2));
	if (isNaN(bmi)) {
		alert("You should type only numbers! (No commas allowed)")
	} else {
		return ("Your body mass index is " + Math.round(bmi) + ".");
		}	
}
var askWeight = prompt("How much do you weight in kilos?");
var askHeight = prompt("What is your height in meters?");
console.log(bodyMassIndex(askWeight, askHeight));
//Simple dice run, pseudorandom numbers
function rollDice() {
	var n = Math.random()*6;
	n = Math.floor(n)+1;
	return n;
	}
rollDice();