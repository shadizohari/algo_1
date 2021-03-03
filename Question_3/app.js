
// problem_3 .............................

function countUniqueValues_1(numbersArray) {
    let first = 0;
    let second = first + 1;
    while (second < numbersArray.length) {
        if (numbersArray[first] === numbersArray[second]) {
            numbersArray.splice(second, 1);
        } else {
            first++;
            second++;
        }
    }
    return numbersArray.length;

}
console.log(countUniqueValues_1([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues_1([-2, -1, -1, 0, 1]));
console.log(countUniqueValues_1([]));
console.log(countUniqueValues_1([1]));
console.log("..................................")

// problem_3 another way.....................
function countUniqueValues_2(numbersArray) {
    let obj = {};
    for (let item of numbersArray) {
        obj[item] = (obj[item] || 0) + 1;
    }
    return Object.keys(obj).length;
}

console.log(countUniqueValues_2([1, 1, 2, 2, 3, 3, 4]));
console.log(countUniqueValues_2([0]));
console.log("..................................")


// problem_3 another wey ......................
function countUniqueValues_3(numbersArray) {

    let count = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] !== numbersArray[i + 1]) {
            count++;
        }
    }
    return count;

}
console.log(countUniqueValues_3([1, 1, 1]))
console.log("..................................")

