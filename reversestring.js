function reverseString(str) {
	var answer ="";
	for (var i = 0; i<str.length; i++){
		answer +=str[str.length-i-1]
	}
	return answer;
}

reverseString("hello");