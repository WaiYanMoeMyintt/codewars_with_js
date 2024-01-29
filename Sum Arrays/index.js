// Sum Numbers
function sum (numbers) {
  
     if(numbers.length === 0){
        return 0;
     }
    
     const sumNum = numbers.reduce((arr,cur)=>{
          return arr + cur;
     }) 
     
   return sumNum
};
