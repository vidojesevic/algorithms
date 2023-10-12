#include <stdio.h>

int fibonacciRecursive(int n);
int fibonacciIterative(int n);

int main(int argc, char *argv[]) {
    int iterative = fibonacciIterative(6);
    printf("Iterative: %d\n", iterative);

    int recursive = fibonacciRecursive(9);
    printf("Recurson: %d\n", recursive);

    return 0;
}

int fibonacciRecursive(int n) {
    if (n < 2) {
        return n;
    }

    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

int fibonacciIterative(int n) {
    if (n < 2) {
        return n;
    }
    int fib[n+1];
    fib[0] = 0;
    fib[1] = 1;

    for (int i = 2; i <= n; ++i) {
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib[n];
}
