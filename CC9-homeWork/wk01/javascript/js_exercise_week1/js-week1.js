// Variable (7ข้อ) //
// Comment Your JavaScript Code //
// This is comment.
/* This is 
comment too. */

// Declare JavaScript Variables //
var myName;

// Storing Values with the Assignment Operator //
// Setup
var a;

// Only change code below this line
a = 7;

// Assigning the Value of One Variable to Another //
// Setup
var a;
a = 7;
var b;

// Only change code below this line
b = a;

// Initializing Variables with the Assignment Operator //
var a = 9;

// Understanding Uninitialized Variables //
// Only change code below this line
var a;
var b;
var c;
a = 5;
b = 10;
c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

// Understanding Case Sensitivity in Variables //
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
// -------------------------------------------------------
// Number (14ข้อ)
// Add Two Numbers with JavaScript //
var sum = 10 + 10;

// Subtract One Number from Another with JavaScript //
var difference = 45 - 33;

// Multiply Two Numbers with JavaScript //
var product = 8 * 10;

// Divide One Number by Another with JavaScript //
var quotient = 66 / 33;

// Increment a Number with JavaScript //
var myVar = 87;

// Only change code below this line
myVar++;

// Decrement a Number with JavaScript //
var myVar = 11;

// Only change code below this line
myVar--;

// Create Decimal Numbers with JavaScript //
var ourDecimal = 5.7;

// Only change code below this line
var myDecimal = 2.2;

// Multiply Two Decimals with JavaScript //
var product = 2.0 * 2.5;

// Divide One Decimal by Another with JavaScript //
var quotient = 4.4 / 2.0; // Change this line

// Finding a Remainder in JavaScript //
// Only change code below this line

var remainder;
remainder = 11 % 3;

// Compound Assignment With Augmented Addition //
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

// Compound Assignment With Augmented Subtraction //
var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

// Compound Assignment With Augmented Multiplication //
var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

// Compound Assignment With Augmented Division //
var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

// -------------------------------------------------------
// STRING PRACTICE (15ข้อ)
// PartA-พื้นฐานการประกาศตัวแปรและกำหนดค่า (Declaration and Initialization)
// 1.Declare String Variables //
var myFirstName = "Nirat";
var myLastName = "Kashom";

// 2.Escaping Literal Quotes in StringsPassed //
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// 3.Quoting Strings with Single Quotes //
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// 4.Escape Sequences in Strings //
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

// PartB-การเชื่อมข้อความ( String Concatenate )
// 1.Concatenating Strings with Plus Operator //
var myStr = "This is the start. " + "This is the end."; // Change this line

// 2.Concatenating Strings with the Plus Equals Operator //
// Only change code below this line

var myStr  = "This is the first sentence. ";
myStr += "This is the second sentence.";

// 3.Constructing Strings with Variables //
// Only change code below this line
var myName = "Nirat";
var myStr = "My name is " + myName + "and I am well!";


// 4.Appending Variables to Strings //
// Change code below this line

var someAdjective = "amazing!";
var myStr = "Learning to code is ";
myStr += someAdjective;

// PartC-การเข้าถึงและแก้ไขแต่ละตัวอักษร( Access and Mutate )
// 1.Find the Length of a StringPassed //
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName.length;

// 2.Use Bracket Notation to Find the First Character in a String //
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// 3.Use Bracket Notation to Find the Nth Character in a String //
// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line

// 4.Use Bracket Notation to Find the Last Character in a String //
// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// 5.Use Bracket Notation to Find the Nth-to-Last Character in a String //
// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

// 6.Understand String Immutability //
// Setup
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

// UseCase
// 1.Word Blanks
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb; // Change this line
// Only change code above this line


