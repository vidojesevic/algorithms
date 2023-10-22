local calc = 0;

local function fibonacciDynamic()
    local cache = {}
    local function fib(n)
        calc = calc + 1;
        if cache[n] then
            return cache[n]
        else
            if n < 2 then
                return n
            else
                cache[n] = fib(n - 1) + fib(n - 2)
                return cache[n]
            end
        end
    end
    return fib;
end

local fib = fibonacciDynamic();
print("DP " .. fib(69) .. "!") -- O(n)
print("We did " .. calc .. " calculations!")

