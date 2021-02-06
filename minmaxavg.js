function minMaxAvg(arrNum){

//initiliaze with zero
var sum = 0;
var min = 0;
var max = 0; 
var avg = 0

//calculate average
    
for(var i = 0; i < arrNum.length; i++){
  sum+=arrNum[i];
}
   avg = sum/arrNum.length 
    
//calculate max
for(var i = 0, i < arrNum.length; i++){
  if (arrNum[i]>max){
    max = arrNum[i];
  }
}    
 //calculate min
  for(var i = 0; i<arrNum.length; i++){
    if(arrNum[i]<min){
      max = arrNum[i];
    }
  }
  

  return (min,max,avg)
}

console.log(minMaxAvg([3,5,1,9,10,3,2]))

