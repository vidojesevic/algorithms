const arr = [53, 74, 90, 36, 21, 55, 97, 82, 62, 91, 83, 74, 35, 66, 52, 78, 46, 57, 70, 55, 54, 22, 71, 29, 1, 7, 56, 80, 59, 65,
48, 14, 70, 71, 31, 45, 58, 35, 13, 17, 10, 31, 1, 5, 13, 82, 19, 30, 56, 80, 75, 16, 39, 71, 33];
console.log(arr);

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function insertionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; ++i) {
        if (arr[i] < arr[0]) {
            arr.unshift(arr.splice(i,1)[0]);
        } else {
            for (let j = 1; j < i; ++j) {
                if (arr[i] > arr[j-1] && arr[i] < arr[j]) {
                    arr.splice(j, 0, arr.splice(i, 1)[0]);
                }
            }
        }
    }
}

insertionSort(arr);
console.log(arr);

