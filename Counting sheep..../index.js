const countSheeps = (arrayOfSheep) => {
  const extractArray = arrayOfSheep.filter(items => items === true).length;
  return extractArray;
}
