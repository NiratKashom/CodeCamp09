// # Arrow Function (3ข้อ)

// # Prerequisite 
// - Basic Function

// [1.Use Arrow Functions to Write Concise Anonymous Functions]

const magic = () => new Date();

// [2.Write Arrow Functions with Parameters]

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// [3.Set Default Parameters for Your Functions]

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line
