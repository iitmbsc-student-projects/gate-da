---
title: Question-1
pagetitle: Question-1
categories: [Python]
---

What is the output of the following snippet of code?

```python
def foo(n):
    if n % 2 == 0:
        return n // 2
    return 3 * n + 1

count = 0
x = 10
while x != 1:
    x = foo(x)
    count += 1
print(count)
```

::: {.callout-note title="Answer" collapse=true}

$6$

:::



::: {.callout-note title="Solution" collapse=true}

For a given integer `n`, `foo(n)` returns `n // 2` if n is even and `3 * n + 1` if n is odd. 
Starting with `x` initialized to `10`, the while loop repeatedly applies `foo(x)` until `x` equals `1`, incrementing `count` with each iteration.

**First Iteration:**

+ `x = 10` 
+ Since `10 % 2 == 0`, `x` becomes `10 // 2 = 5`
+ Increment `count` to `1`

**Second Iteration:**

- x = 5
- Since 5 % 2 != 0, x becomes 3 * 5 + 1 = 16
- Increment `count` to 2

| iteration | previous value of x | x % 2 == 0 | current value of x | count |
|-----------|---------------------|------------|--------------------|-------|
| first     | 10                  | True       | 10 // 2 = 5        | 1     |
| second    | 5                   | False      | 3 * 5 + 1 = 16     | 2     |
| third     | 16                  | True       | 16 // 2 = 8        | 3     |
| fourth    | 8                   | True       | 8 // 2 = 4         | 4     |
| fifth     | 4                   | True       | 4 // 2 = 2         | 5     |
| sixth     | 2                   | True       | 2 // 2 = 1         | 6     |

As the value of `x` is `1`, the loop terminates. So, the loop executes six times, making the final value of `count` 6.

:::