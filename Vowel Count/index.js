function getCount(str) {
  const getLowerCase = str.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;

  for (let i = 0; i < getLowerCase.length; i++) {
    const letter = getLowerCase[i];
    if (vowels.includes(letter)) {
      counter++;
    }
  }

  return counter;
}

