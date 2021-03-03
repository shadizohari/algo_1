// problem_1 ................................

function validAnagram(firstWord, secondWord) {
    if (firstWord.length !== secondWord.length) return false;
    let firstWordArray = firstWord.split("");
    let secondWordArray = secondWord.split("");
    let firstWordObj = {};
    let secondWordObj = {};
    for (let item of firstWordArray) {
        firstWordObj[item] = (firstWordObj[item] || 0) + 1;
    }
    for (let item of secondWordArray) {
        secondWordObj[item] = (secondWordObj[item] || 0) + 1;
    }
    for (let key in secondWordObj) {
        if (secondWordObj[key] !== firstWordObj[key]) return false;
    }
    return true;
}
console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));

