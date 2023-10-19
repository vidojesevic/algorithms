local arr = { 53, 74, 90, 36, 21, 55, 97, 82, 62, 91, 83, 74, 35, 66, 52, 78, 46, 57, 70, 55, 54, 22, 71, 29, 1, 7, 56, 80, 59, 65,
48, 14, 70, 71, 31, 45, 58, 35, 13, 17, 10, 31, 1, 5, 13, 82, 19, 30, 56, 80, 75, 16, 39, 71, 33 }

print("Unsorted list:\n" .. table.concat(arr, " "))

local function insertElements(source, start, finish)
    local target = {}
    for i = start, finish do
        table.insert(target, source[i])
    end
    return target
end

local function merge(left, right)
    local result = {}
    local indexLeft = 1
    local indexRight = 1

    while indexLeft <= #left and indexRight <= #right do
        if left[indexLeft] < right[indexRight] then
            table.insert(result, left[indexLeft])
            indexLeft = indexLeft + 1
        else
            table.insert(result, right[indexRight])
            indexRight = indexRight + 1
        end
    end

    -- First method
    -- while indexLeft <= #left do
    --     table.insert(result, left[indexLeft])
    --     indexLeft = indexLeft + 1
    -- end
    --
    -- while indexRight <= #right do
    --     table.insert(result, right[indexRight])
    --     indexRight = indexRight + 1
    -- end
    -- Second method
    table.move(left, indexLeft, #left, #result + 1, result)
    table.move(right, indexRight, #right, #result + 1, result)

    return result
end

local function mergeSort(list)
    if #list == 1 then
        return list
    end
    local middle = math.floor(#list/2)
    local left = insertElements(list, 1, middle)
    local right = insertElements(list, middle + 1, #list)

    return merge(mergeSort(left), mergeSort(right))
end

local sorted = mergeSort(arr)
print("Sorted list:\n" .. table.concat(sorted, " "))
