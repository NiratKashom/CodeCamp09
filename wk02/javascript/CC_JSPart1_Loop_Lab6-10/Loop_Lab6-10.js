// lab 6
let txt = '*';
let sumTxt = '';
let j = 0;
for (let i = 1; i <= 4; i++) {
  if (j <= i) {
    sumTxt += txt;
  };
  console.log(sumTxt);
};

// lab7
let start = 2;
let x = '';
for (let i = 1; i <= 12; i++) {
  x = `${start} x ${i} = ${start * i}`;
  console.log(x);
}

// lab8
// let input = prompt('input number');
// let sum = 0;
// let avg = 0;
// let count = 0;
// // while ( !!+input || input !== null || input > '0' ) {
// while ( +input >= 0 || !!+input || input !== null) {
//   console.log(input);
//   sum += +input;
//   count++
//   input = prompt('input number')
// }
// console.log(`ผลรวมทั้งหมด ${sum}`);
// console.log(`ผลเฉลี่ย ${sum / count}`);

// ex 8 เฉลย
// let sum = 0;
// let avg = 0;
// let count = 0;
// while (for i = 0 ;  ) {
//   let input = prompt('input')
//   if (+input <= 0 || !+input) {
//     break;
//   }
//   sum += +input;
//   count++;
// }
// console.log(`ผลรวมทั้งหมด ${sum}`);
// console.log(`ผลเฉลี่ย ${sum / count}`);


// lab9
// ex 9 เฉลย
  // check ว่าใช่ number หรือไม่
function isNumberic(num) {
  // เช็คว่าinputต้องไม่ใช่ null กับ empty string และไม่ใช่ NaN
	return !(!num || num.trim() === '' || !+num);
};

const correctNum = prompt('input corrent number');
let count = 0
while (1) {
	let guessNum = prompt('Guess Number');
  	if (!isNumberic(correctNum)) {
  		alert('Enter Number only!!');
  		continue;
	};
  	count++;
  	if (+correctNum === +guessNum) {
    	alert(`ถูกต้อง คุณทายไป ${count} ครั้ง`)
      break;
    } else if (+correctNum < +guessNum) {
    	alert(`มากไป`)
    } else {
    	alert(`น้อยไป`)
    };
};

// lab 10

for (let i = 1; i <= 100; i++){
  if (isPrime(i)) {
    console.log(i)
  };
}

function isPrime(x) {
  for (let y = 2; y < x; y++) {
    if (x % y === 0) {
      return ;
    };
  };
  return x === 1 ? false : x;
};

// console.log(isPrime(17));