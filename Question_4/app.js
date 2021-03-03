
// problem_4 .............................
function averagePair(arr, average) {
    let sum = average * 2;
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] + arr[right] === sum) {
            return true;
        } else if (arr[left] + arr[right] > sum) {
            right--;
        } else { left++; }
    }
    return false
}
console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));

