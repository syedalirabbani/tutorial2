//---------------------------------------------
//Create a function minMaxAvg that will take an array as parameter and will return the smallest number within the array, max number within the array and the average.
//-------------------------------------------

function minMaxAvg(arrNum){
  var sum = 0;
  var min = arrNum[0];
  var max = arrNum[0];
  var avg = arrNum[0];
  
  //calc min
  for( var i = 0; i<arrNum.length; i++){
    if (arrNum[i]<min){
      min = 'min is = ' +arrNum[i];
    }
  }
  
  //calc max
  for (var i = 0; i<arrNum.length; i++){
    if (arrNum[i]>max){
      max = 'max is = ' +arrNum[i];
    }
  }
    
  //calc avg
  for (var i = 0; i<arrNum.length; i++){
    sum += arrNum[i];
     avg = 'avg is = ' + sum/arrNum.length;
  }
   
  
 return [min, max, avg] ;
}

console.log(minMaxAvg([3,5,1,9,10,3,2]))
