var isSquare = function(n){
  
  const findTheSquareNumber = Math.sqrt(n);
  
  if(n  < 0 ){
     return false;
  }
  
 return findTheSquareNumber === Math.floor(findTheSquareNumber);
  
   

}
console.log(isSquare(301265449))
