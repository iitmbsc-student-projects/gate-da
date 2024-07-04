---
title: Question-6
pagetitle: Question-6
categories: [GATE-2021(modified), Python, Control flow]
---

## Question 6

Consider the following Python function:

```python
def simple_function(Y, n, x):
    total = Y[0]
    for loop_index in range(1, n):
        total = x * total + Y[loop_index]
    return total
```

Let `Z` be an array of 10 elements with `Z[i] = 1`, for all `i` such that $0 \leq i \leq 9$. The value returned by `simple_function(Z, 10, 2)` is __________.



::: {.callout-note title="Answer" collapse=true}

$1023$

:::



::: {.callout-note title="Feedback" collapse=true}

Given that all values in the array `Z` are 1 and `x = 2`, the function simplifies to `total = 2 * total + 1`, resulting in successive left shifting of the total by one bit and adding 1 each time. This process leads to a final value of 1023.

| Total in bits | Total Value |
|------------|-------------|
| 1          | 1           |
| 10 + 1 = 11| 3           |
| 110 + 1 = 111| 7         |
| 1110 + 1 = 1111| 15      |
| 11110 + 1 = 11111| 31   |
| 111110 + 1 = 111111| 63|
| 1111110 + 1 = 1111111| 127|
| 11111110 + 1 = 11111111| 255|
| 111111110 + 1 = 111111111| 511|
| 1111111110 + 1 = 1111111111| 1023|

:::