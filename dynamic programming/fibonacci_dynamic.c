#include <stdio.h>

unsigned long long cache[100] = {0};
unsigned long long fibonacciDynamic(int n);

int main(int argc, char *argv[]) {
    int n = 69;
    unsigned long long result = fibonacciDynamic(n);

    printf("Fibonacci(%d) = %llu\n", n, result);

    return 0;
}

unsigned long long fibonacciDynamic(int n) {
    if (n <= 1) {
        return n;
    }

    if (cache[n] != 0) {
        return cache[n];
    }

    cache[n] = fibonacciDynamic(n - 1) + fibonacciDynamic(n - 2);
    return cache[n];
}
