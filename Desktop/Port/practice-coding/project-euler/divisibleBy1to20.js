function findPrimeFactors(n) {
  const factors = {};
  let divisor = 2;

  while (n >= divisor) {
    if (n % divisor === 0) {
      factors[divisor] = (factors[divisor] || 0) + 1;
      n /= divisor;
    } else {
      divisor++;
    }
  }

  return factors;
}

function smallestMultiple() {
  const maxFactors = {};
  let lcm = 1;

  // Find prime factors and update maximum powers
  for (let i = 2; i <= 20; i++) {
    const factors = findPrimeFactors(i);
    for (const prime in factors) {
      maxFactors[prime] = Math.max(maxFactors[prime] || 0, factors[prime]);
    }
  }

  // Calculate LCM using maximum powers
  for (const prime in maxFactors) {
    lcm *= Math.pow(parseInt(prime), maxFactors[prime]);
  }

  return lcm;
}

console.log(smallestMultiple()); // Output the smallest positive number divisible by all numbers from 1 to 20
