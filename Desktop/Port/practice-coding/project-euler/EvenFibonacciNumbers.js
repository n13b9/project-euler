const evenFibonacciSum = (limit) => {
  let a = 0;
  let b = 1;
  let sum = 0;

  while (b < limit) {
    if (b % 2 == 0) {
      sum += b;
    }
    const nextTerm = a + b;
    a = b;
    b = nextTerm;
  }

  return sum;
};
