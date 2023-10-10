#!/bin/bash

arr=(53 74 90 36 21 55 97 82 62 91 83 74 35 66 52 78 46 57 70 55 54 22 71 29 1 7 56 80 59 65 48 14 70 71 31 45 58 35 13 17 10 31 1 5 13 82 19 30 56 80 75 16 39 71 33)

echo "Original array:"
for num in ${arr[@]}; do
    echo "$num"
done

function selectionSort {
    array=("$@") # Passing array as parameter
    local length=${#array[@]}

    for ((i = 0; i < length; i++)); do
        local min=i
        for ((j = i + 1; j < length; j++)); do
            if ((array[j] < array[min])); then
                min=$j
            fi
        done
        if ((i != min)); then
            local temp=${array[i]}
            array[i]=${array[min]}
            array[min]=$temp
        fi
    done

    for num in ${array[@]}; do
        echo "$num"
    done
}

echo -e "Sorted array"
selectionSort "${arr[@]}"

