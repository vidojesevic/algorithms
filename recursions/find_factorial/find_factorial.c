#include <stdio.h>

int findFactorialIterative(int num);
int findFactorialRecursion(int num);

int main(int argc, char *argv[]) {

    int iterative = findFactorialIterative(5);
    printf("Iterative function: %d\n", iterative);

    int recursive = findFactorialRecursion(6);
    printf("Recursion function: %d\n", recursive);

    return 0;
}

int findFactorialIterative(int num) {
    int answer = 1;
    if (num == 0) {
        return answer;
    }

    for (int i = 1; i <= num; ++i) {
        answer = answer * i;
    }
    
    return answer;
}

int findFactorialRecursion(int num) {
    if (num == 0 || num == 1) {
        return 1;
    } else if (num == 2) {
        return 2;
    }

    return num * findFactorialRecursion(num-1);
}
