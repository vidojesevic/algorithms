const arr = [53, 74, 90, 36, 21, 55, 97, 82, 62, 91, 83, 74, 35, 66, 52, 78, 46, 57, 70, 55, 54, 22, 71, 29, 1, 7, 56, 80, 59, 65,
48, 14, 70, 71, 31, 45, 58, 35, 13, 17, 10, 31, 1, 5, 13, 82, 19, 30, 56, 80, 75, 16, 39, 71, 33];

function selectionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; ++i) {
        let min = i;
        const temp = array[i];
        for (let j = i+1; j < length; ++j) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

console.log(arr);
const sorted = selectionSort(arr);
console.log(sorted);
