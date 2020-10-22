
//1. Text characters count based on input text, and max criteria nº of 140 characters.
var tweet = prompt("Give me text and I will show you how many you have left, if your criteria is 140");
var tweetCount = tweet.lenght;
Alert("You've written " + tweetCount + " characters, you have" + (140 - tweetCount) + " left");
//Refactoring
var tweet = prompt("Give me text and I will show you how many you have left, if your criteria is 140");
Alert("You've written " + tweet.lenght + " characters, you have" + (140 - tweet.lenght) + " left");

//2. Slice text based on string lenght.
var tweet = prompt("give me a tweet and I will show you the first 10 characters");
var tweetSliced = tweet.slice(0,10);
alert(tweetSliced);
// Refactoring
alert(prompt("give me a tweet and I will show you the first 10 characters").slice(0,10))

//3. LowerCase all characters and Uppercase first character to say hello.
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log("Hello " + capitalizeFirstLetter(prompt("I will say Hello to some string and capitalize only the first character. What is your string?").toLowerCase()));

//4. Simple math to calculate dog age to human age. 
function dogAgeToHumanAge(dogAge)
 {	
	if (isNaN(dogAge)) {
		alert("You should type a number!")
	} else {
		return ((dogAge-2)*4) + 21;	
		}
}
console.log("The dog has " + dogAgeToHumanAge(prompt("What is the dog age?")) + " years in human age");

//5. Return division (quotient & remainder) as an integer based on criteria.
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

//6. A function that tells you how many days, weeks and months we have left if we live until 90 years old.
// 365 days & 52 weeks & 12 months in a year.
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

//7. Body Mass Index Calculator (BMI).
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

//8. Simple dice run (pseudorandom numbers).
function rollDice() {
	var n = Math.random()*6;
	n = Math.floor(n)+1;
	return n;
	}
rollDice();

//9. Body Mass Index Calculator (BMI) that alsos indicates your status
// BMI < 18.5 => Underweight
//BMI 18.5-24.9 => Normal Weight
// BMI > 24.9 => Overweight
function bodyMassIndexCalculator(weight,height) {
	var bmi = weight/(Math.pow(height,2));
	if (isNaN(bmi)) {
		alert("You should type only numbers! (No commas allowed)")
	} else if(bmi < 18.5) {
		return ("Your body mass index is " + Math.round(bmi) + ". You are underweight.");
		}
	else if(bmi < 24.9 && bmi > 18.5) {
		return ("Your body mass index is " + Math.round(bmi) + ". You are a normal weight.");
		}	
	else if(bmi > 24.9) {
		return ("Your body mass index is " + Math.round(bmi) + ". You are overweight.");
		}
}
var askWeight = prompt("How much do you weight in kilos?");
var askHeight = prompt("What is your height in meters?");
console.log(bodyMassIndexCalculator(askWeight, askHeight));

//10. Build a function to know if it is a Leap Year.
// Is the year cleanly divisible by 4 but not cleanly divisible by 100? Leap Year.
// Is the year cleanly divisible by 4, 100 and 400? Leap Year.
function isLeap(year) {
	var isEvenlyDivisibleBy4 = year%4;
	var isEvenlyDivisibleBy100 = year%100;
	var isEvenlyDivisibleBy400 = year%400;
	if((isEvenlyDivisibleBy4 == 0) && (isEvenlyDivisibleBy100 != 0)) {
		return ("This is a Leap Year! A leap year has 366 days, with an extra day in February");
		}
	else if((isEvenlyDivisibleBy4 == 0) && (isEvenlyDivisibleBy100 == 0) && (isEvenlyDivisibleBy400 == 0)){
		return ("This is a Leap Year! A leap year has 366 days, with an extra day in February");
		}
	else {
		return ("This is NOT a Leap Year. A normal year has 365 days.");
		}
}
var askYear = prompt("Enter a year:");
console.log(isLeap(askYear));

//11. Create a guest list and based on name input check if the name is on the list or not
var guestlist = ["Antonio","Pedro","Joao","Julio","Marcelo","Andre","Gerson","Alda"];
guestlist = guestlist.map(v => v.toLowerCase());
console.log(guestlist);
function listCheck(name) {
	if(guestlist.includes(name) == true){
			return ("You're welcome");
		}
		else {
			return ("Not in the list");
		}
}
var askName = prompt("What is your name?");
askName = askName.toLowerCase();
console.log(listCheck(askName));

//12. Print numbers from 1 to 100, but for multiples of three print "Fizz", for multiples of five print "Buzz", 
// for multiples of three and five print "FizzBuzz"
function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
askEnd = prompt("Tell me till which number you want to play FizzBuzz. (It must be a number!).");
var numbers = range(1,askEnd);
var numbersLength = numbers.length;
console.log(numbers);

	for (var i = 0; i < numbersLength; i++) {
		if((numbers[i]%3 == 0) && (numbers[i]%5 != 0)) {
			numbers[i] = "Fizz";
		}
		else if ((numbers[i]%5 == 0) && (numbers[i]%3 != 0)) {
			numbers[i] = "Buzz";
		}
		else if ((numbers[i]%3 == 0) && (numbers[i]%5 == 0)) {
			numbers[i] = "FizzBuzz";
		}
		else {
			numbers[i] = numbers[i];
		}
	};	
console.log(numbers);
//13. Refactoring - FizzBuzz to push for each function call.
var range = [];
var count = 1;
function fizzBuzzPop(){
		if(count%3 === 0) {
			range.push("Fizz");
		}
		else if (count%5 === 0) {
			range.push("Buzz");
		}
		else if ((count%3 == 0) && (count%5 == 0)) {
			range.push("FizzBuzz");
		}
		else {
			range.push(count);
		};	
	count++;
	console.log(range);
	};
fizzBuzzPop();
//Refactoring - FizzBuzz to 100.
var numbers = [];
var count = 1;

function fizzBuzzPlay()  {

	while (count <= 100){

		if((count%3 === 0) && (count%5 === 0)) {
			numbers.push("FizzBuzz");
			}
			else if (count%3 === 0) {
				numbers.push("Fizz");
			}
			else if (count%5 === 0) {
				numbers.push("Buzz");
			}
			else {
				numbers.push(count)
			}
		count++;
		
	}
		console.log("FizzBuzz Results");
		console.log(numbers);
}

fizzBuzzPlay();


//14. Take a random value from array
var listOfNames = ["Antonio","Pedro","Joao","Julio","Marcelo","Andre","Gerson","Alda"];
function whosPaying(names) {

	var numberOfPeople = names.length; 
	alert(numberOfPeople);
	var randomPersonPosition = Math.floor(Math.random()*numberOfPeople);
	alert(randomPersonPosition);
	var randomPerson = names[randomPersonPosition];
	return randomPerson + " is going to pay";
};
console.log(whosPaying(listOfNames));

//15. Reproduce 99 Bottles of Beer song
var count = 100;
function beersong() {
	while(count > 0) {
		if(count === 1) {
			console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, so there will be no beer on the wall.");
		}
		else{
			console.log(count + " bottle of beer on the wall, " + count + " bottles of beer. Take one down and pass it around, so there will be " + (count-1) + " beers on the wall.");
		}
	count--}
}
beersong();


//16. Fibonacci Generator
var output = [];
var n = prompt("What is the series of numbers? (It must be a number).");
function fibonacciGenerator(n) {

	if(n===1) {
		output = [0];
	}
	else if(n===2) {
		output = [0,1];
	}
	else if(n>2) {
			output = [0,1];
			for (i=3; i<=n;i++) {
				output.push(output[i-3]+output[i-2]); //output[2] + ... +... output[n]
			}
	}
	console.log(output);
};
fibonacciGenerator(n);

//17. Simple calculator using other functions as arguments

function add(num1,num2){
	return num1+num2;
}
function subtract(num1,num2){
	return num1-num2;
}
function multiply(num1,num2){
	return num1*num2;
}
function divide(num1,num2){
	return num1/num2;
}
function calculator(num1,num2,operator) {
	return operator(num1,num2);
}

//18. Create an Object With Properties
var bellBoy = {
	yearsOfExperience: 12,
	name:"Timothy",
	hasWorkPermit: true,
	languages: ["French", "English"]

}
//19. Create a Construction Function for what you've done in 18.
function BellBoy (yearsOfExperience, name, hasWorkPermit, languages) {
	this.yearsOfExperience = yearsOfExperience;
	this.name = name;
	this.hasWorkPermit = hasWorkPermit;
	this.languages = languages;
}
var bellBoy2 = new BellBoy(12,"Timothy",true,["French","English"]);

//20. Add a Method to the Obect inside the Construction Function.
function BellBoy (yearsOfExperience, name, hasWorkPermit, languages) {
	this.yearsOfExperience = yearsOfExperience;
	this.name = name;
	this.hasWorkPermit = hasWorkPermit;
	this.languages = languages;
	this.greetings = function () {
		alert("Welcome to the Code Hotel!");
	}
}
var bellBoy2 = new BellBoy(12,"Timothy",true,["French","English"]);

bellBoy2.greetings();

//21. Understanding Callbacks and How to Respond to Events
function anotherAddEventListener(typeOfEvent, callback) {


//22. properties of Event
	var eventThatHappened{
		eventType: "keydown",
		key: "p",
		durationOfKeypress: 2,
	}
}

//23. action to be performed if event that happened meets type of event criteria
if (eventThatHappened.eventType === typeOfEvent) {
	callback(eventThatHappened);
}
