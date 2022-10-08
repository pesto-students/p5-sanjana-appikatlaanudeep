//Sort array of 0's,1's and 2's

// TC - O(n) | SC - O(1)

function sortArrayOfZerosOnesTwos(array) {
    /*array.sort();
    return array;*/

    let low = 0;
    let high = array.length - 1;
    let mid = 0;
    let temp = 0;
    while (mid <= high) {
        if (array[mid] == 0) {
            temp = array[low];
            array[low] = array[mid];
            array[mid] = temp;
            low++;
            mid++;
        }
        else if (array[mid] == 1) {
            mid++;
        }
        else {
            temp = array[mid];
            array[mid] = array[high];
            array[high] = temp;
            high--;
        }
    }
    return array;
}


console.log(sortArrayOfZerosOnesTwos([2, 0, 1]));
console.log(sortArrayOfZerosOnesTwos([2, 0, 1, 0, 2, 2, 1, 0, 2, 1, 0]));
