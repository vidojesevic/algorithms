local arr = {53, 74, 90, 36, 21, 55, 97, 82, 62, 91, 83, 74, 35, 66, 52, 78, 46, 57, 70, 55, 54, 22, 71, 29, 1, 7, 56, 80, 59, 65,
48, 14, 70, 71, 31, 45, 58, 35, 13, 17, 10, 31, 1, 5, 13, 82, 19, 30, 56, 80, 75, 16, 39, 71, 33}

local function bubbleSort(array)
    for i = 1, #array do
        for j = 1, #array - i - 1 do
            if array[j] > array[j+1] then
                local temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            end
        end
    end
    return array
end

print("Unsorted list:\n" .. table.concat(arr, ", "))
local sorted = bubbleSort(arr)
print("Unsorted list:\n" .. table.concat(sorted, ", "))

