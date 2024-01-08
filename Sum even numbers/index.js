function sumEvenNumbers(input) {
    const result = input.map((item) => {
        return Number(item);
    });

    const checkEven = result.filter((number) => {
        return !isNaN(number) && number % 2 === 0;
    });

    const calculateArr = checkEven.reduce((arr, curr) => {
        return arr + curr;
    }, 0);

    return calculateArr;


}
