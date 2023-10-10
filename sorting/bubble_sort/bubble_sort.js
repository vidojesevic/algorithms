const arr = [53, 74, 90, 36, 21, 55, 97, 82, 62, 91, 83, 74, 35, 66, 52, 78, 46, 57, 70, 55, 54, 22, 71, 29, 1, 7, 56, 80, 59, 65,
48, 14, 70, 71, 31, 45, 58, 35, 13, 17, 10, 31, 1, 5, 13, 82, 19, 30, 56, 80, 75, 16, 39, 71, 33];

function bubbleSort(array) {
    for (let i = 0; i < array.length; ++i) {
        let temp;
        for (let j = 0; j < array.length; ++j) {
            if (array[j] > array[j+1]) {
                temp = array[j];
                array[j] = array[j+1]
                array[j+1] = temp;
            }
        }
    }
    return array;
}

console.log(arr);
const sorted = bubbleSort(arr);
console.log(sorted);
