<?php
    $array1 = ['a', 'b', 'c', 'd', 'e'];
    $array2 = ['z', 'y', 'x'];
    $array3 = ['z', 'y', 'a'];

    function findMatch2($arr1, $arr2) {
        if ($arr1 == null || $arr2 == null) {
            return false;
        }
        $map = [];
        foreach ($arr as $item) {
            if (!isset($map[$item])) {
                $map[$item] = true;
            } 
        }
        foreach ($arr2 as $item) {
            if (isset($map[$item])) {
                return true;
            }
        } 
        return false;
    }

    // Ovako se radi sa built in PHP-ovom funkcijom
    function findMatch($arr1, $arr2) {
        if ($arr1 == null || $arr2 == null) {
            return false;
        }
        $intersection = array_intersect($arr1, $arr2);
        return count($intersection) > 0;
    }

// findMatch(array1, array2);
echo "Time complexity is O(n+m)\n";
echo var_export(findMatch2($array1, $array2), true);
echo "\n";
echo var_export(findMatch2($array1, $array3), true);
echo "\n";
echo "Another approach | Built in function / Time complexity is O(n+m)\n";
echo var_export(findMatch($array1, $array2), true);
echo "\n";
echo var_export(findMatch($array1, $array3), true);
echo "\n";

