
// problem_5 .......................................
function isSubsequence(str1, str2) {
    let andis = 0;
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] === str1[andis]) andis++;
    }

    if (andis === str1.length) return true;
    return false;
}
console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sign", "stign"));
console.log(isSubsequence("abc", "acb"));


