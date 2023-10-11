const arr = [53, 74, 90, 36, 21, 55, 97, 82, 62, 91, 83, 74, 35, 66, 52, 78, 46, 57, 70, 55, 54, 22, 71, 29, 1, 7, 56, 80, 59, 65,
48, 14, 70, 71, 31, 45, 58, 35, 13, 17, 10, 31, 1, 5, 13, 82, 19, 30, 56, 80, 75, 16, 39, 71, 33];
console.log(arr);

// https://www.youtube.com/watch?v=3San3uKKHgg - quick sort dance

function quickSort(array) {
    const len = array.length;
    if (len <= 1) {
        return array;
    }
    const pivot = array[0];
    const left = [];
    const right = [];

    for (let i = 1; i < len; ++i) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return quickSort(left).concat([pivot], quickSort(right));
}

const sorted = quickSort(arr);
console.log(sorted);
