function problem(x){
  //your code here
   if(typeof x !== "string" && !isNaN(x)      ){
       return (x * 50) + 6;
   }

   else {
     return "Error";
   }
}

problem(10)
