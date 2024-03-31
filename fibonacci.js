const fibs = function fibs(n) {
  let fibNums = [];

  for(let i = 0; i < n; i++) {
    if (i < 2) {
      fibNums.push(i);
      continue;
    }
    const newNum = fibNums.at(-1) + fibNums.at(-2);
    fibNums.push(newNum);
  }

  return fibNums;
};


const fibsRec = function fibsRec(n) {
  let result = [0, 1];

  if (n < 3) {
    result = result.slice(0, n);
  } else {
    let prev = fibsRec(n - 1);
    result = [...prev];
    result.push(result.at(-1) + result.at(-2));
  }

  return result;
}


// console.log(fibsRec(10));

