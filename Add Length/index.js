function addLength(str) {
     const getTheArray  = str.split(" ");
     let arr = [];
     for(let i = 0; i < getTheArray.length; i++){
          const items = getTheArray[i];
          const findTheLength = `${items} ${items.length}`;
          arr.push(findTheLength);
          
     }
     return arr;
}

addLength("whoami netuser");
