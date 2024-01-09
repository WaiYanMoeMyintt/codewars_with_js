function reverseNumber(n) {
 
     const sign = Math.sign(n);
    const result = String(Math.abs(n));
    const reversedNum = Number(result.split("").reverse().join(""));
    return sign * reversedNum;
}
