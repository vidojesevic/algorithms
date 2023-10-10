<?php
require_once "../print_list.php";

$arr = [53, 74, 90, 36, 21, 55, 97, 82, 62, 91, 83, 74, 35, 66, 52, 78, 46, 57, 70, 55, 54, 22, 71, 29, 1, 7, 56, 80, 59, 65,
48, 14, 70, 71, 31, 45, 58, 35, 13, 17, 10, 31, 1, 5, 13, 82, 19, 30, 56, 80, 75, 16, 39, 71, 33];

/**
* insertionSort function
*
* @param array $arr - Array of unsorted integers
*
* @return array
*/
function insertionSort($arr = array()): array
{
    $len = count($arr);
    for ($i = 0; $i < $len; ++$i) {
        $val = $arr[$i];
        $j = $i-1;
        while ($j>=0 && $arr[$j] > $val) {
            $arr[$j+1] = $arr[$j];
            $j--;
        }
        $arr[$j+1] = $val;
    }
    return $arr;
}

echo "Unsorted list:\n";
printList($arr);
$sorted = insertionSort($arr);
echo "Sorted list:\n";
printList($sorted);
