function getEvenNumbers(numbersArray){
   // filter out the odd numbers

    return numbersArray.filter((s=> {
		    return s % 2 === 0;
	}));
	
}
