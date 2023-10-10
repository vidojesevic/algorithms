<?php

/**
* printList function
*
* @param array $list - Array of integers
*
* @return void
*/
function printList($array = array()): void 
{
    $str = "";
    for ($i = 0; $i < count($array); ++$i) {
        $str .= $array[$i] . " ";
    }
    $str .= "\n";
    echo $str;
}
