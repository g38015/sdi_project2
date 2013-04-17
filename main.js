// alert("JavaScript works!");

// Peter Hitchcock
// SDI 1304
// April 16, 2013
// Project 2

// Start

// Initial Variables Sting, Number, Array
var str = "String",
		num = 10,
		arr = [],
		newSnow = true;

// Procedure Function
var didItSnow = function(checkForSnow){
		
		if (checkForSnow === true)
		{
			console.log("It Snowed");
		}
		else
		{
			console.log("No Snow");
		}
};

// Boolean Function
var boolFunction = function(arg1, arg2){
		if (arg1 === true)
		{
			console.log("I am true");
	  }
	  else
	  {
	  	console.log("I am false");
	  }
};

// Number Function
var mathFunction = function(snowToday, snowYesterday){
		var totalSnow = snowToday + snowYesterday;
		console.log("We have a total of " + totalSnow + " inches of snow to ski on");
};

// String Function
var stringFunction = function(stringOne, stringTwo){
		var stringConcat = stringOne + " " + stringTwo;
		console.log(stringConcat);
};

// Array Function
var arrayFunction = function(num, ar) {
		var arr = [];
		console.log("here is the number " + num + " here is the array " + ar);
};

// Main 
didItSnow(newSnow);
boolFunction((1>2) && (2<3))
mathFunction(10,5);
stringFunction("Yeah", "Killer")
arrayFunction(10, [1,2,3,4])
              