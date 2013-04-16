// alert("JavaScript works!");

// Peter Hitchcock
// SDI 1304
// April 11, 2013
// Project 2

// Start

// Initial Variables Sting, Number, Array


var mathFunction = function(snowToday, snowYesterday){
		var totalSnow = snowToday + snowYesterday;
		console.log("We have a total of " + totalSnow + " inches of snow to ski on");
};
mathFunction(10,5);

var stringFunction = function(stringOne, stringTwo){
		var stringConcat = stringOne + " " + stringTwo;
		console.log(stringConcat);
};
stringFunction("Yeah", "Killer")



/* Procedure
One function that doesn't return a value (a procedure)

var skiResort = function () {
	if (true) {};

};


/* Boolean Function
One function that takes two arguments and does some kind of Boolean comparison between them. The data type of the arguments doesn't matter for this function

var boo = function () {};
        
        
/* Array Function & For Loop
One function that takes an array and a number and uses them in a for loop of some kind. This should not be a simple index dereference (looking up one value by its index). Make it something more interesting

var arr = function () {
		for () {

		};
};
*/	