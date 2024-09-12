function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    
    let oddReverse = [];

    for (let i = 1; i < arr.length; i += 2) {
        oddReverse.unshift(arr[i]);
    }

    return oddReverse;
}
console.log(oddReverse([4, 8, 5, 1, 76, 34, 10]));