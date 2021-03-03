
// problem_2 .....................................

function sameFrequency(firstNumber, secondNumber) {
    let firstNumbersArray = String(firstNumber).split("");
    let secondNumbersArray = String(secondNumber).split("");
    let firstNumbersObj = {};
    let secondNumbersObj = {};
    for (let item of firstNumbersArray) {
        firstNumbersObj[item] = (firstNumbersObj[item] || 0) + 1;
    }
    for (let item of secondNumbersArray) {
        secondNumbersObj[item] = (secondNumbersObj[item] || 0) + 1;
    }
    for (let key in firstNumbersObj) {
        if (firstNumbersObj[key] !== secondNumbersObj[key]) return false;
    }
    return true;
}
console.log(sameFrequency(102, 201));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(22, 222));

