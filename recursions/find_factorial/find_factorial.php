<?php

function findFactorialRecursive($num) {
    if ($num === 0 || $num === 1) {
        return 1;
    } else if ($num === 2) {
        return 2;
    }

    return $num * findFactorialRecursive($num-1);
}

$recursive = findFactorialRecursive(5);
echo "Recursive function: " . $recursive . "\n";

function findFactorialIterative($num) {
    $counter = 0;
    $answer = 1;
    if ($num === 0) {
        return $answer;
    }

    for ($i = 0; $i < $num; ++$i) {
        $counter++;
        $answer = $answer * $counter;
    }

    return $answer;
}

$iterative = findFactorialIterative(5);
echo "Itertative function: " . $iterative . "\n";
