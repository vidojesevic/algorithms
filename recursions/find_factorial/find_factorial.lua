local function findFactorialRecursive(num)
    if num == 0 or num == 1 then
        return 1
    elseif num == 2 then
        return 2
    end

    return num * findFactorialRecursive(num-1)
end

local recursive = findFactorialRecursive(4)
print("Recursive functions: " .. recursive)

local function findFactorialIterative(num)
    local answer = 1

    if num == 0 then
        return answer
    end

    for i= 1, num do
        answer = answer * i
    end

    return answer
end

local iterative = findFactorialIterative(5)
print("Iterative functions: " .. iterative)
