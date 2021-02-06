function isPrime(num){
	// 1) Assume this number is prime.
	var answer = true;
	// 2) create test to prove our assumption wrong
	//list down all the number between 2 and itself
	for (var i = 2; i<num; i++){

// check if the number is divisible by i .. once it is divisible by a number it is false -> My assumption is wrong

	if(num % i == 0){
		return false;
	}
// 3) return our answer
	return answer;
	}
	for (var i = 2; i<1000:i++){
		if(isPrime(i)){
			console.log(i);
		}
	}
}