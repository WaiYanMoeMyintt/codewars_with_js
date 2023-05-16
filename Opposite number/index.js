function opposite(number) {
  //your code here
  const negativeNumber = Math.abs(number);
  if(number > 0){
     return -number;
  }
  
  else if(negativeNumber){
      return negativeNumber;
  }
  
  else if(number === 0){
      return number;
  }
  
}
