const calculateAge = (currentYear,birthYear)=>{


    const age = birthYear - currentYear;
    if (age === 1)
    {
       return "You are " + age + " year old.";
    } 
  else if (age === -1) {
     return 'You will be born in ' + Math.abs(age) + ' year.'; 
  }
  
   else if(currentYear === birthYear)
     {
    return "You were born this very year!";
     }
  else if (currentYear > birthYear){
    const totalyears = currentYear - birthYear
    return "You will be born in " + totalyears + " years.";
//     return `You wil be born in ${currentYear-birthYear} years.`;
  }

  else {
    const totalbirthyear = birthYear - currentYear;
    return "You are " + totalbirthyear + " years old.";
//     return `You are  ${birthYear-currentYear}  year old. `;
  }
  
}
