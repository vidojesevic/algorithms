local arr = { 53, 74, 90, 36, 21, 55, 97, 82, 62, 91, 83, 74, 35, 66, 52, 78, 46, 57, 70, 55, 54, 22, 71, 29, 1, 7, 56, 80, 59, 65,
48, 14, 70, 71, 31, 45, 58, 35, 13, 17, 10, 31, 1, 5, 13, 82, 19, 30, 56, 80, 75, 16, 39, 71, 33 }

print("Unsorted list:\n" .. table.concat(arr, " "))

local function concatanateArray(...)
    local result = {}
    for _, ar in ipairs({...}) do
        for i = 1, #arr do
            table.insert(result, ar[i])
        end
    end
    return result
end

local function quickSort(list)
    local len = #list
    if len <= 1 then
        return list
    end

    local pivot = list[1]
    local left = {}
    local right = {}

    for i = 2, len do
        if list[i] < pivot then
            table.insert(left, list[i])
        else
            table.insert(right, list[i])
        end
    end

    return concatanateArray(quickSort(left), {pivot}, quickSort(right))
end

local sorted = quickSort(arr)
print("Sorted list:\n" .. table.concat(sorted, " "))
