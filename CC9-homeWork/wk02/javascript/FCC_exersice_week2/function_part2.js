// # Function
// # Prerequisite
// - basic functions
// - if else 

// # Content
// - Returning Boolean Values from Functions
// - Return Early Pattern for Functions
// - Counting Cards


// [1.Returning Boolean Values from Functions]

function isLess(a, b) {
  // Only change code below this line
  return a < b;
  // Only change code above this line
}

isLess(10, 15);


// [2.Return Early Pattern for Functions]

// Setup
function abTest(a, b) {
  // Only change code below this line
if (a < 0 || b < 0) {
  return undefined;
}


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
console.log(abTest(2,2))

// # Application
// [1.Counting Cards]

var count = 0;

function cc(card) {
  // Only change code below this line
  if (card >= 2 && card <= 6) {
     count++
  } else if ( card >= 7 && card <= 9) {
     count;
  } else if (card === 10) {
     count--;
  } else {
    switch(card) {
      case 'J':
      case 'Q':
      case 'K':
      case 'A':
        count--;
        break;
    };
  };
  if (count > 0) {
    return `${count} Bet`;
  } else {
    return `${count} Hold`;
  }
  // Only change code above this line
}

// console.log(cc(2));
cc(2); cc(3); cc(7); cc('K'); cc('A');
