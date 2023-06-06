function descendingOrder(n) {

  const stringToArray = String(n).split('');
  const sortArrayNumber = stringToArray.sort((a,b)=> b - a);
  const results  = sortArrayNumber.join('');
  
  return parseInt(results);
  
}
