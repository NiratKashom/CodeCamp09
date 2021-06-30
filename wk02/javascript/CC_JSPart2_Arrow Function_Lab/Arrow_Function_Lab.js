// lab 8
const calcScore = score => {
  switch(score) {
    case 'win':
      return 'ได้ 3 คะแนน';
      break;
    case 'draw':
      return 'ได้ 1 คะแนน';
      break;
    case 'lose':
      return 'ไม่ได้คะแนน';
      break;
  };
};
console.log(calcScore("win"));

const calcScore = score => score * 3 || 0;

// ex 8

// lab9
const isLeapYear = year => {
  if (year % 100 === 0) return year % 400 === 0;
    return year % 4 ===0;
  }

// lab 10
const isLeapYear = year => {
  if (year % 100 === 0) return year % 400 === 0;
    return year % 4 ===0;
  }

const calcAge = birthYear => {
  let day = 0;
  for (let i = birthYear; i <= 2020 ; i+){
    day += isLeapYear(i) ? 366 : 365;
  }
  return day;
}

calcAge(calcAge(2020));
calcAge(calcAge(2019));


// lab 11
const convertFtoC = fah => (fah - 32) / 1.8 ;
console.log(convertFtoC(0));

// lab 12
  const factorial = n => {
    let result = 1;
    for (let i = n; i> 0; i--) {
      result *= i;
    };
    return result;
  };

  // const factorial2 = n => {
  //   if (n === 1 || n === 0) return 1;
  //   return n * factorial2(n-1);
  // }