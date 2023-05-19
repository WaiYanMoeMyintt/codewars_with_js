function bmi(weight, height) {
    const calculateValue = weight / height ** 2;
  
     if(calculateValue <= 18.5){
         return "Underweight";
     }
  
     else if ( calculateValue  <= 25.0){
       
       return "Normal";
     }
  
     else if ( calculateValue  <= 30.0){
       
       return "Overweight";
     }
  
  else {
      return "Obese";
  }
  
};
