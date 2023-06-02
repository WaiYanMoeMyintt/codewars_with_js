function alternate(n, firstValue, secondValue) {
  const arr = [];
  const gatherString = [firstValue, secondValue];

  if (typeof n === "number" && n > 0) {
    for (let i = 0; i < n; i++) {
      const index = i % gatherString.length;
      arr.push(gatherString[index]);
    }
  } else {
    return [];
  }

  return arr;
}
