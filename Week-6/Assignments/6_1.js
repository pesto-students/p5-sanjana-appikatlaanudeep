//Kadane's Algorithm

// Maximum sum continous sub array

function kadaneAlgorithm(array) {
    let maxEndingHere = array[0];
    let maxSoFar = array[0];
    for (let i = 1; i < array.length; i++) {
        const num = array[i];
        maxEndingHere = Math.max(num, maxEndingHere + num);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}

console.log(kadaneAlgorithm([1, 2, 3, 4]));
console.log(kadaneAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


// TC - O(n) | SC - O(1)