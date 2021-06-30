// lab 7
function min(a, b) {
  if (a < b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
min(1, 3);

// lab 8
    function login(username, password) {
      if (username === "admin" && password === "P@ssw0rd") {
        alert('login สำเร็จ');
      } else {
        alert('login ไม่สำเร็จ');
      };
    };

    login('admin', 'P@ssw0rd');
    login('admin', 'skdfjksa');

// ex 8
// function login(username, password) {
//   return (username === "admin" && password === "P@ssw0rd") ? 
//     alert('login สำเร็จ') : alert('login ไม่สำเร็จ');
// };

// login('admin', 'P@ssw0rd');
// login('admin', 'skdfjksa');

// lab 9
function isPrime(x) {
  for (let y = 2; y < x; y++) {
    if (x % y === 0) {
      return 'Not prime number';
    };
  };
  return x === 1 ? 'Not prime number' : 'Is prime number';
};
console.log(isPrime(17));


// function isPrime(x) {
//   for (let y = 2; y < x; y++) {
//     if (x % y === 0) break
//   };
//   return x === 1 ? false : x;
// };

// function listPrime(a) {
//   let a = 0;
//   if (a < 2) {
//     return 'No Prime Number';
//   };
//   console.log(2);
//   for (let b = 2; b <= a; b++) {   
//     for(let c = 2 ; c < b; c++){
//       if (b % c === 0) {
//         d = 1;
//         break;
//       }
//       else{
//         d = 2;
//       }
//     }
//     if(d === 2){
//       console.log(b);
//     }
//   }
//   console.log(a)
// };
// console.log(listPrime(15));

// lab 10
// undefined

// lab 11
// * undefined
// ** 'Hi kid'
// *** 'Hi John'
// **** 'Who are you'

// lab 12
// 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' ผิด ตอบ undefined เพราะเจอ return ก่อน

// lab 13
function checkAge(age) {
  if (age > 18) return true;
  return confirm('Did parents allow you?');
}
checkAge(20);

function checkAge(age) {
  age > 18 ? true : confirm('Did parents allow you?');
}
checkAge(20);

function checkAge(age) {
  return (age > 18 || confirm('Did parents allow you?'));
};
checkAge(15);

// lab 14
function isNumberic(num) {
  // เช็คว่าinputต้องไม่ใช่ null กับ empty string และไม่ใช่ NaN
	return !(!num || num.trim() === '' || !+num);
};


function max(a, b = '0', c = '0', d = '0') {
  if (a >= b && a >= c && a >= d) {
    if (isNumberic(a)) return a;
  } else if (b >= c && b >= d) {
    if (isNumberic(b)) return b;
  } else if (c >= d) {
    if (isNumberic(c)) return c;
  } else {
    if (isNumberic(d)) return d;
  };
};

