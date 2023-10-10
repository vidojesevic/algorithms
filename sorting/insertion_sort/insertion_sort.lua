local arr = {53, 74, 90, 36, 21, 55, 97, 82, 62, 91, 83, 74, 35, 66, 52, 78, 46, 57, 70, 55, 54, 22, 71, 29, 1, 7, 56, 80, 59, 65,
48, 14, 70, 71, 31, 45, 58, 35, 13, 17, 10, 31, 1, 5, 13, 82, 19, 30, 56, 80, 75, 16, 39, 71, 33}

print("Unsorted list:\n[" .. table.concat(arr, ", ") .. "]")

local function insertionSort(array)
    for i = 1, #array, 1 do
        local val = array[i]
        local j = i - 1
        while j > 0 and array[j] > val do
            array[j+1] = array[j]
            j = j - 1
        end
        array[j+1] = val
    end
    return array
end

local sorted = insertionSort(arr)
print("Sorted list:\n[" .. table.concat(sorted, ", ") .. "]")

