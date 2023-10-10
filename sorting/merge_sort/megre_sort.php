<?php
require_once "../print_list.php";

$arr = [53, 74, 90, 36, 21, 55, 97, 82, 62, 91, 83, 74, 35, 66, 52, 78, 46, 57, 70, 55, 54, 22, 71, 29, 1, 7, 56, 80, 59, 65,
48, 14, 70, 71, 31, 45, 58, 35, 13, 17, 10, 31, 1, 5, 13, 82, 19, 30, 56, 80, 75, 16, 39, 71, 33];

/**
* mergeSort function
*
* @param array $array - Array of unsorted integers
*
* @return array
*/
function mergeSort($array = array()): array
{
    $len = count($array);
    if ($len === 1) {
        return $array;
    }
    $middle = floor($len/2);
    $left = array_slice($array, 0, $middle);
    $right = array_slice($array, $middle);

    return merge(mergeSort($left), mergeSort($right));
}

/**
* merge function
*
* @param array $array - Array of unsorted integers
*
* @return array
*/
function merge($left, $right): array
{
    $result = array();
    $indexLeft = 0;
    $indexRight = 0;

    while ($indexLeft < count($left) && $indexRight < count($right)) {
        if ($left[$indexLeft] < $right[$indexRight]) {
            array_push($result, $left[$indexLeft]);
            $indexLeft++;
        } else {
            array_push($result, $right[$indexRight]);
            $indexRight++;
        }
    }

    $result = array_merge($result, array_slice($left, $indexLeft), array_slice($right, $indexRight));
    return $result;
}

echo "Unsorted list:\n";
printList($arr);
$sorted = mergeSort($arr);
echo "Sorted list:\n";
printList($sorted);
