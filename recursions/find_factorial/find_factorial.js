// Find factorial of any number (recursive and iterative)

function findFactorialRecursive(num) {
    if (num === 2) {
        return 2;
    } else if (num === 1 || num === 0) {
        return 1;
    }

    return num * findFactorialRecursive(num-1);
}

const recursive = findFactorialRecursive(4);
console.log("Recursive function: " +recursive);

function findFactorialIterative(num) {
    let counter = 0;
    let answer = 1;
    if (num === 0) {
        return answer;
    }

    for (let i = 0; i < num; ++i) {
        counter++;
        answer = answer * counter;
    }

    return answer;
}

const factorial = findFactorialIterative(5);
console.log("Iterative function: " + factorial);
