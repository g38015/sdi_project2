// alert("JavaScript works!");

// Peter Hitchcock
// SDI 1304
// April 16, 2013
// Project 2

// Start

// Initial Variables Sting, Number, Array
var skiDecision = "we need to check how many inches to decide where we are going to ski today",
		num = 10,
		arr = [],
		newSnow = true;

// Procedure Function
var didItSnow = function(checkForSnow){
		
		if (checkForSnow === true)
		{
			console.log("Awesome! It Snowed " + skiDecision);
		}
		else
		{
			console.log("Since it did not snow let's get ready to head to the slopes anyway");
		}
};

// Boolean Function
var snowedRoadsClear = function(snowed, roadClear){
		if (snowed && roadClear === true)
		{
			console.log("New snow and the roads have been cleared");
	  }
	  else
	  {
	  	console.log("We are going to sierra");
	  }
	  return "It is " + snowed + " that it has snowed and it is " + roadClear + " the roads are clear"
};

// Number Function
var howMuchSnow = function(snowToday){
		var totalSnow = snowToday;
		while (snowToday < 4) {
			console.log("We now have " + snowToday + " inches of snow to ski on");
			}
		return totalSnow;
};

// String Function
var getReady = function(grabBoots, grabSkis){

		var skiEquipment = "I am taking my " + grabBoots + " boots and my " + grabSkis + " skis for this adventure";
		return skiEquipment;		
};

// Array Function
var arrayFunction = function(num, ar) {
		var arr = [];
		console.log("here is the number " + num + " here is the array " + ar);
};

// Main 
didItSnow(true); //procedure WORKING
var areWeReady = snowedRoadsClear(true, true) //boolean WORKING
console.log(areWeReady) //boolean RETURN VALUE
howMuchSnow(12); //number
var readyToSki = getReady("k2", "rock") //string WORKING
console.log(readyToSki) //string RETURN VALUE
arrayFunction(10, [1,2,3,4])