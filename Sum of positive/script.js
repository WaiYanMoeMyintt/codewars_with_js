function positiveSum(arr) {
  
 return arr.filter(item=> item > 0).reduce(((x,y)=>x+y),0);
  
}
