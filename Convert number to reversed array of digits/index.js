function digitize(n) {

   const number = String(n);
   const result = number.split("").reverse().map(Number);
   return result;
     
}

