
// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
// 2. Get the current month, day, and year
// 3. Adjust month if needed (JavaScript months are 0-based)
// 4. Add leading zeros to month/day if needed
// 5. Create a string in the format: "Today is MM/DD/YYYY"
// 6. Display the result in the element with id="dateOutput"

var date = new Date();

var dateMessage = "Today is " + date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });

document.getElementById("dateOutput").innerHTML = dateMessage;

//Source | 
//  v  I was helped by one commentor with this simple solution. This was the most easiest one to understand and implement. 
//https://stackoverflow.com/questions/6040515/how-do-i-get-month-and-date-of-javascript-in-2-digit-format
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString#using_options
//https://www.w3schools.com/html/html_id.asp ----- used to create my message to display on the html side of the hw. 






// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")

// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"


var firstVal = "67";         // creating my variables for numbers
var secondVal = "91";
var thirdVal = "72.9";
var forthVal = "word";


var firstInput = Number(firstVal); // checking if the variables are numbers
var secondInput = Number(secondVal);
var thirdInput = Number(thirdVal);
var forthInput = Number(forthVal);


var firstNan = Number.isNaN(firstInput);      // checking if the variables are NaN
var secondNan = Number.isNaN(secondInput);
var thirdNan = Number.isNaN(thirdInput);
var forthNan = Number.isNaN(forthInput);

var firstInt = Number.isInteger(firstInput);  // checking if the variables are integers 
var secondInt = Number.isInteger(secondInput);
var thirdInt = Number.isInteger(thirdInput);
var forthInt = Number.isInteger(forthInput);

//-----------------------------

//  Message string per variable 

var firstResult = "Original: '" + firstVal + "' -> Converted: " + firstInput + " -> isNaN: " + firstNan + " -> isInteger: " + firstInt;

var secondResult = "Original: '" + secondVal + "' -> Converted: " + secondInput + " -> isNaN: " + secondNan + " -> isInteger: " + secondInt;

var thirdResult = "Original: '" + thirdVal + "' -> Converted: " + thirdInput + " -> isNaN: " + thirdNan + " -> isInteger: " + thirdInt;

var forthResult = "Original: '" + forthVal + "' -> Converted: " + forthInput + " -> isNaN: " + forthNan + " -> isInteger: " + forthInt;


//------------------------------

//----- checking for variable conditions, which then are added to the message string for each variable.
//----- This is a bit redundant, since i already know what variables are NaN and which are integers (eg i know firstval is
// a number and an integer and I can place static code for it), but in case someone or myself changes the values this will work with no problems. 

//---- additionally, NaN will always be false when it is a valid number. this is because NaN means "Not a Number".
// so for a number to be valid, NaN must be false... from here I made an If statement to check if a number is not a number print
// "this is not a valid number value" and if not... Not a number, print "this is a valid number value".  Flip this logic for integer check if. 


if (firstNan) {
     firstResult = firstResult + " (This is not a valid number value.)";
}
else {

     firstResult = firstResult + " (This is a valid number value.)";

}

if (firstInt) {
     firstResult = firstResult + " (This is  a valid Integer value.)";
}
else {

     firstResult = firstResult + " (This is not a valid Integer value.)";

}



if (secondNan) {
     secondResult = secondResult + " (This is not a valid number value.)";
}
else {

     secondResult = secondResult + " (This is a valid number value.)";

}

if (secondInt) {
     secondResult = secondResult + " (This is a valid Integer value.)";
}
else {

     secondResult = secondResult + " (This is not a valid Integer value.)";

}


if (thirdNan) {
     thirdResult = thirdResult + " (This is not avalid number value.)";
}
else {

     thirdResult = thirdResult + " (This is a valid number value.)";

}

if (thirdInt) {
     thirdResult = thirdResult + " (This is a valid Integer value.)";
}
else {

     thirdResult = thirdResult + " (This is not a valid Integer value.)";

}



if (forthNan) {
     forthResult = forthResult + " (This is not a valid number value.)";
}
else {

     forthResult = forthResult + " (This is a valid number value.)";

}

if (forthInt) {
     forthResult = forthResult + " (This is a valid Integer value.)";
}
else {

     forthResult = forthResult + " (This is not a valid Integer value.)";

}


var messageline = firstResult + "<br>" + secondResult + "<br>" + thirdResult + "<br>" + forthResult; // this combines all the message strings into one string. The BR instructs html to format line breaks/indiv lines. 


document.getElementById("numberConversionOutput").innerHTML = messageline;


// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables
//
// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
//
// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
//
// 4. Build a string showing your results
//
// 5. Display the results inside the element with id="mathOutput"

//---------------------------------------------------------------------------

// #### Option B: Grade score calculator

//Use values like:

//- grade scores

//Then calculate:

//- total score
//- average score

//Display the average with `toFixed(2)`.


// first use grade score + 5 "extra credit" points then output total score... then add 9 var vals (to make it like a class of 10 students) 
// + our score divided by 10 to get average grade.. for a test.

// I will use a script method I learned from a youtube video. https://www.youtube.com/watch?v=JeXqaKeJSRI

var userInput;

// defining the numeric values to use in the following calculations. 

var extraCredit = 5;

var classScores = 90 + 85 + 78 + 92 + 88 + 95 + 73 + 42 + 65;

var numStudents = 10;

document.getElementById("submitval").onclick = function () {

     userInput = document.getElementById("userval").value;

     if (userInput !== "" && !isNaN(userInput)) {      // if statement checks for a user input, if theres an input it continues to run.  
          var exVal = Number(userInput) + extraCredit; // defines the new score by adding the extra credit to the user's input value

          var messageLine1 = "Your score with " + extraCredit + " extra credit points is: " + exVal.toFixed(2) + "<br>";

          document.getElementById("mathOutput").innerHTML = messageLine1;


          var classAvg = (exVal + classScores) / numStudents;  // defines the class avg, calculates the avg by adding the new user score with the rest of the classes scores divided by # students. 

          var messageLine2 = "The class average is: " + classAvg.toFixed(2) + "<br>";

          document.getElementById("classScore").innerHTML = messageLine2;

          document.getElementById("error").innerHTML = "";  // clears the error message if the user previously had an error. I was annoyed by the error stickyness. 

     }

     else {    // is the else statement that runs when a user enters a non-numeric value like a word or blank space. 
              // additionally, There is a nested IF, checking wheter the user input is blank or a string. and returned specfic error messages for each. 
          if (userInput === "") {

               var errorMessage = "Error: " + "Please do not enter a blank value. Enter a valid number value!";

               document.getElementById("error").innerHTML = errorMessage;


          }

          else {

               var errorMessage = "Error: " + userInput + " is not a valid number value. Enter a valid number value!";
               document.getElementById("error").innerHTML = errorMessage;

          }


          document.getElementById("mathOutput").innerHTML = "";  // clears math output of the users previous calculations
          document.getElementById("classScore").innerHTML = "";


     }




};
// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)