// 3 sum

// TC - O(n^2) | SC - O(n)

function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let closestTarget = Infinity;
    //const triplets = [];
    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length - 1;
        while (left < right) {
            const currentSum = array[i] + array[left] + array[right];
            if (Math.abs(targetSum - currentSum) < Math.abs(targetSum - closestTarget)) {
                closestTarget = currentSum;
            }
            if (currentSum > targetSum) {
                right--;
            } else {
                left++;
            }
        }
    }
    console.log(triplets);
    return closestTarget;
}

console.log(threeNumberSum([-1, 2, 1, -4], 1));

/*if(currentSum === targetSum){
            triplets.push(array[i],array[left],array[right])
            left++;
            right--
        }*/