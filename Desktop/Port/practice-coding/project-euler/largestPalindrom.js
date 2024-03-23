const isPalindrom = (num) => {
  const numToStr = num.toString();
  n = numToStr.length;
  for (const i in numToStr) {
    if (numToStr[i] === numToStr[n - i - 1]) {
    } else {
      return false;
    }
  }
  return true;
};

function isPalindrome(num) {
  const numStr = num.toString();
  const reversedStr = numStr.split("").reverse().join("");
  return numStr === reversedStr;
}

// console.log(isPalindrome(1223));

function largest3digitPalindrome() {
  let largestPalindrome = 101;

  for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
      const product = i * j;
      if (isPalindrom(product) && product > largestPalindrome) {
        largestPalindrome = product;
      }
    }
  }

  return largestPalindrome;
}

console.log(largest3digitPalindrome());
