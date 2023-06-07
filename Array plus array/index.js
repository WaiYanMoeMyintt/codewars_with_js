function arrayPlusArray(arr1, arr2) {
  
  const combineArray = [...arr1, ...arr2];
  const initialValue = 0;

 const sumofArray  =  combineArray.reduce((accumulator, currentValue)=> {
       return accumulator + currentValue;
  });

 return sumofArray;
  
}
