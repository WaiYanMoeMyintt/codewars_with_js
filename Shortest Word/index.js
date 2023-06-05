function findShort(s){
  
  const mustBeArray  = s.split(' ');
  const findThelength = mustBeArray.map(el=> el.length);
  const getLowerestNumber = Math.min(...findThelength);
  return getLowerestNumber;   
}
