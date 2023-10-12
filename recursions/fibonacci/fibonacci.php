<?php
function fibanacciIterative($n) {
    $fib = array(0, 1);
    
    for ($i = 2; $i <= $n; ++$i) {
        array_push($fib, $fib[$i-1] + $fib[$i-2]);
    }

    return $fib[$n];
}

$iterative = fibanacciIterative(6);
echo "Iterative: " . $iterative . "\n";

function fibanacciRecursion($n) {
    if ($n < 2) {
        return $n;
    }

    return fibanacciRecursion($n-1) + fibanacciRecursion($n-2);
}

$recursion = fibanacciRecursion(7);
echo "Iterative: " . $recursion . "\n";
