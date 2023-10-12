// Given a number N return the index value of the Fibonacci sequence

function fibonacciIterative(n) {
    const fib = [0, 1];

    for (let i = 2; i <= n; ++i) {
        fib.push(fib[i-2] + fib[i-1]);
    }

    return fib[n];
}

const iterative = fibonacciIterative(8); // O(n)
console.log("Iterative: " + iterative);

function fibonacciRecursive(n) {
    if (n < 2) {
        return n;
    }

    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

const recursive = fibonacciRecursive(14); // 0(2^n)
console.log("Recursive: " + recursive);
