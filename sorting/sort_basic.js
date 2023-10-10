const letters = ['a', 'b', 'r', 'g', 't', 'l', 'w'];
const basket = [2, 65, 34, 2, 1, 7, 8];
console.log(letters)
letters.sort();
console.log(letters)

console.log(basket.sort())

const srb = ['разговарати','изводити','појам','тактика','пртљажник','рута','колонија','саобраћај'];
// serbian
console.log(srb.sort());

// number ASC
function compareNumAsc(a,b) {
    return a - b;
}

// number DESC
function compareNumDesc(a,b) {
    return b - a;
}

basket.sort(compareNumAsc);
console.log(basket);
basket.sort(compareNumDesc);
console.log(basket);
