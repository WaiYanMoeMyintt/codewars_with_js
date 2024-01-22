function min(arr, toReturn) {
    if (toReturn === "value") {
        const smlNumber = arr.reduce((a, b) => Math.min(a, b));
        return smlNumber;
    } else if (toReturn === "index") {
        return arr.indexOf(Math.min(...arr));
    } else {
        // Handle other cases
        return null;
    }
}
