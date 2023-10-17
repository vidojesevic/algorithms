// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233

let calc = 0;
function fibonacciDynamic() {
    const cache = {};
    return function fib(n) {
        calc++;
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
    }
}

const fib = fibonacciDynamic();
console.log("DP", fib(69)); // O(n)
console.log("We did " + calc + " calculations!");
