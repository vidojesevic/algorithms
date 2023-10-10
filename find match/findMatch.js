const array1 = ['a', 'b', 'c', 'd', 'e'];
const array2 = ['z', 'y', 'x'];
const array3 = ['z', 'y', 'a'];

function findMatch(arr1, arr2) {
    for (let i = 0; i < arr1.length; ++i) {
        for (let j = 0; j < arr2.length; ++j) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false;
}

// const arrObj = new Object;
function findMatch2(arr1 ,arr2) {
    if (arr1 === null || arr2 === null) {
        return false;
    }
    var map = {};
    for (let i = 0; i < arr1.length; ++i) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        } 
    }
    for (let j = 0; j < arr2.length; ++j) {
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false;
}

function findMatch3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item));
}

// findMatch(array1, array2);
console.log("Big O notation => O(n^2)");
console.log(findMatch(array1, array2));
console.log(findMatch(array1, array3));
console.log("Another approach / Time complexity is O(n+m)");
console.log(findMatch2(array1, array2));
console.log(findMatch2(array1, array3));
console.log("ES6 / Time complexity is O(n+m)");
console.log(findMatch3(array1, array3));
console.log(findMatch3(array1, array2));


