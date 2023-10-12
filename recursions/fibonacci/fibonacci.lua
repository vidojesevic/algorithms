local function fibonacciIterative(n)
    n = n + 1
    local fib = {0, 1}

    for i = 3, n do
        table.insert(fib, fib[i-1] + fib[i-2])
    end

    return fib[n]
end

local iterative = fibonacciIterative(8)
print("Iterative: " .. iterative)

local function fibonacciRecursion(n)
    if n < 2 then
        return n
    end

    return fibonacciRecursion(n-1) + fibonacciRecursion(n-2)
end

local recursion = fibonacciRecursion(9)
print("Recursive: " .. recursion)
