function isDivisible(x) {
	return (x % 3 == 0) || (x % 5 == 0);
}

function compute() {
	let sum = 0;

	for (let i = 1; i <= 1000; i++) {
		if (isDivisible(i)) { sum += i; }	
	}
	
	console.log(sum);
}

compute();
