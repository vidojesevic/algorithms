<?php
$arr = [53, 74, 90, 36, 21, 55, 97, 82, 62, 91, 83, 74, 35, 66, 52, 78, 46, 57, 70, 55, 54, 22, 71, 29, 1, 7, 56, 80, 59, 65,
48, 14, 70, 71, 31, 45, 58, 35, 13, 17, 10, 31, 1, 5, 13, 82, 19, 30, 56, 80, 75, 16, 39, 71, 33];

/**
* selectionSort function
*
* @param array $array - Array of unsorted integers
*
* @return array
*/
function selectonSort($array = array()): array
{
    $length = count($array);
    for ($i = 0; $i < $length; ++$i) {
        $min = $i;
        for ($j = $i + 1; $j < $length; ++$j) {
            if ($array[$j] < $array[$min]) {
                $min = $j;
            }
        }
        if ($i != $min) {
            $temp = $array[$i];
            $array[$i] = $array[$min];
            $array[$min] = $temp;
        }
    }
    return $array;
}

/**
* sortLine function
*
* @param array $array - Array of integers
*
* @return string
*/
function sortLine($array = array()): string
{
    $sort_line = "";

    for ($i = 0; $i < count($array) - 1; ++$i) {
        $sort_line .= $array[$i] . " ";
    }

    $sort_line .= $array[count($array) - 1] ."\n";
    return $sort_line;
}

$sorted = selectonSort($arr);
echo "Unsorted array:\n" . sortLine($arr);
echo "Unsorted array:\n" . sortLine($sorted);
