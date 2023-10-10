local arr = {53, 74, 90, 36, 21, 55, 97, 82, 62, 91, 83, 74, 35, 66, 52, 78, 46, 57, 70, 55, 54, 22, 71, 29, 1, 7, 56, 80, 59, 65,
48, 14, 70, 71, 31, 45, 58, 35, 13, 17, 10, 31, 1, 5, 13, 82, 19, 30, 56, 80, 75, 16, 39, 71, 33}

local function selectionSort(array)
    for i = 1, #array, 1 do
        local min = i
        local temp = array[i]
        for j = i + 1, #array, 1 do
            if array[j] < array[min] then
                min = j
            end
        end
        if i ~= min then
            array[i] = array[min]
            array[min] = temp
        end
    end
    return array
end

print(table.concat(arr, ", "))
local sorted = selectionSort(arr)
print(table.concat(sorted, ", "))
