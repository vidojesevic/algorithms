<?php
require_once "../print_list.php";

$arr = [53, 74, 90, 36, 21, 55, 97, 82, 62, 91, 83, 74, 35, 66, 52, 78, 46, 57, 70, 55, 54, 22, 71, 29, 1, 7, 56, 80, 59, 65,
48, 14, 70, 71, 31, 45, 58, 35, 13, 17, 10, 31, 1, 5, 13, 82, 19, 30, 56, 80, 75, 16, 39, 71, 33];

function quickSort($list = array()): array
{
    $len = count($list);
    if ($len <= 1) {
        return $list;
    }
    $pivot = $list[0];
    $left = [];
    $right = [];

    for ($i = 1; $i < $len; ++$i) {
        if ($list[$i] < $pivot) {
            array_push($left, $list[$i]);
        } else {
            array_push($right, $list[$i]);
        }
    }

    return array_merge(quickSort($left), [$pivot], quickSort($right));
}

echo "Unsorted list:\n";
printList($arr);
$sorted = quickSort($arr);
echo "Sorted list:\n";
printList($sorted);
