// Pair With Given Difference

// TC - O(n) | SC(n)

function pairDifference(array, B) {
    const set = new Set(array);
    for (let value of array) {
        if (set.has(value + B)) {
            return 1;
        }
    }
    return 0;
}

console.log(pairDifference([5, 20, 3, 2, 50, 80], 78))