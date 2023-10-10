<?php
$arr = [53, 74, 90, 36, 21, 55, 97, 82, 62, 91, 83, 74, 35, 66, 52, 78, 46, 57, 70, 55, 54, 22, 71, 29, 1, 7, 56, 80, 59, 65,
48, 14, 70, 71, 31, 45, 58, 35, 13, 17, 10, 31, 1, 5, 13, 82, 19, 30, 56, 80, 75, 16, 39, 71, 33];

/**
* printList function
*
* $param array $array - Array of integers
*
* @return string
*/
function printList($array = array()): string
{
    $str = "";
    for ($i = 0; $i < count($array); ++$i) {
        $str .= $array[$i] . " ";
    }
    $str .= "\n";
    return $str;
}

/**
* bubbleSort function
*
* $param array $array - Array of unsorted integers
*
* @return array
*/
function bubbleSort($array = array()): array
{
    for ($i = 0; $i < count($array); ++$i) {
        for ($j = 0; $j < count($array) - $i - 1; ++$j) {
            if ($array[$j] > $array[$j+1]) {
                $temp = $array[$j];
                $array[$j] = $array[$j+1];
                $array[$j+1] = $temp;
            }
        }
    }
    return $array;
}

$list = printList($arr);
echo "Unsorted list:\n" . $list;

$sorted = bubbleSort($arr);
$list = printList($sorted);
echo "Sorted list:\n" . $list;
