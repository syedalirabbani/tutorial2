
function isPrime(num){
	//assume the answer is true
    var answer = true;
  	//create test to test prime number. if it is divisible by i, that is not a prime.
  for (var i =2; i<num; i++){
    if (num % i == 0){
      return false;
    }
  }
	//return answer
      return answer;
  }

	//create loop and and give range. put function to work.
  for (var i = 2; i<100; i++){
    if (isPrime(i)){
      console.log(i);
  }
}
