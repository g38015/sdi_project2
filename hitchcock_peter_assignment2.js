// alert("JavaScript works!");
// Github https://github.com/g38015/sdi_project2
// Peter Hitchcock
// SDI 1304
// April 17, 2013
// Project 2

// Start

// Initial Variables Sting, Number, Array
var skiDecision = "we need to check how many inches and see if the roads are clear to decide where we are going to ski today.",
    snowInches = 10,
    slopes = ["The Wall", " Sentinal Bowl", " Cornice"];

// Procedure Function
var didItSnow = function(checkForSnow) {
    
    if (checkForSnow === true)
    {
      console.log("Awesome! It Snowed, " + skiDecision);
    }
    else
    {
      console.log("Since it did not snow let's get ready to head to Sierra.");
    }
};

// Boolean Function
var snowedRoadsClear = function(snowed, roadClear) {
    if (snowed === true || (snowed && roadClear === true))
    {
      console.log("Let's head to Kirkwood.");
    }
    else
    {
      console.log("Let's go to Sierra for the day.");
    }
    return roadClear;
};

// Number Function
var howMuchSnow = function(snowToday) {
    for (var inches = 1; inches <= snowToday; inches = inches + 1) {
      if (inches < snowToday) {
        console.log("This is crazy! We now have " + inches + " inches of new snow to ski on.")
      } else {
        console.log("Cool! Time to pack up the car.")
      }
    }
    return snowToday;
};

// String Function
var getReady = function(grabBoots, grabSkis) {
    var skiEquipment = "I am ready to start skiing, putting on my " + grabBoots + " boots and my " + grabSkis + " skis, let's get it on!";
    return skiEquipment;    
};

// Array Function
var skiRuns = function(numberOfRuns, slopeNames) {
    var runs = numberOfRuns;
    var addRun = slopeNames.push(" Lightning")
    while (runs > slopeNames.length ) {
      console.log("We have " + runs + " runs left");
      runs--; 
    }
    return slopeNames; 
};

// Main 
didItSnow(true); //procedure
var newSnow = howMuchSnow(snowInches); //number
console.log("With " + newSnow + " inches of new snow,");
var areWeReady = snowedRoadsClear(true, true); //boolean
console.log("It helped us make a decision knowing that it is " + areWeReady + " that the roads are clear.");
var readyToSki = getReady("Salomon", "Rossignol"); //string
console.log(readyToSki);
var decideRuns = skiRuns(8, slopes); //array
console.log("Didn't quite finish our day. We added some extra runs including" + decideRuns[3] + " so we ended up missing " + decideRuns.length + " runs. Let's come back tomorrow:) and finish the remaining runs " + decideRuns + ".");