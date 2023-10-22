<?php

$calc = 0;

function fibonacciDynamic() {
    $cache = [];
    $fib = function ($n) use (&$cache, &$fib) {
        global $calc;
        $calc++;
        if (array_key_exists($n, $cache)) {
            return $cache[$n];
        } else {
            if ($n < 2) {
                return $n;
            } else {
                $cache[$n] = $fib($n-1) + $fib($n-2);
                return $cache[$n];
            }
        }
    };
    return $fib;
}

$fib = fibonacciDynamic();
echo "DP " . $fib(69) . "!\n"; // O(n)
echo "We did " . $calc . " calculations!\n"; // O(n)
