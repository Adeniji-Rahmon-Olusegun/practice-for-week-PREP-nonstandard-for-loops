function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    let oddArr = [];

    for (let i = 1; i < arr.length; i += 2) {
        oddArr.push(arr[i]);
    }

    return oddArr;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    
    let oddReverse = [];

    for (let i = 1; i < arr.length; i += 2) {
        oddReverse.unshift(arr[i]);
    }

    return oddReverse;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    
    let powTwo = [];

    for (let i = 1; i < arr.length; i *= 2) {
        powTwo.push(arr[i]);
    }

    return powTwo;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    
    let powN = [];

    for (let i = 1; i < arr.length; i *= n) {
        powN.push(arr[i]);
    }

    return powN;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    
    let firstHalf = [];

    for (let index = 0; index < Math.ceil(arr.length / 2); index++) {
        firstHalf.push(arr[index])
    }

    return firstHalf;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    
    let secondHalf = [];

    for (let index = Math.ceil(arr.length / 2); index < arr.length; index++) {
        secondHalf.push(arr[index])
    }

    return secondHalf;

}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}