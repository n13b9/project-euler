function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

function nthPrime(n) {
  let count = 0;
  let candidate = 3;
  let prime = 0;

  if (n === 1) {
    return 2;
  }

  while (count < n) {
    if (isPrime(candidate)) {
      count++;
      prime = candidate;
    }
    candidate += 2;
  }
  return prime;
}

console.log(nthPrime(10001));
