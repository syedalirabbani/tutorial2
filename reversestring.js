//-------------------
//method 1
//--------------------

function reverseString(str) {
	var answer ="";
	for (var i = 0; i<str.length; i++){
		answer +=str[str.length-i-1]
	}
	return answer;
}

reverseString("hello");


//--------------------
//method 2
//-----------------------
function reverseString(str){
	return str.split("").reverse().join("")
}

console.log(reverseString("Hello"))
