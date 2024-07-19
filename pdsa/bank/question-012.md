---
title: Question-12
pagetitle: Question-12
categories: [GATE-2019 (modified)]
---

Consider the following python program:
```python
def jumble(x, y):
    x = 2 * x + y
    return x

x,y = 2,5
y = jumble(y, x)
x = jumble(y, x)
print(x)
```
What is the output of the given code?

::: {.callout-note title="Answer" collapse=true}

$26$

:::



::: {.callout-note title="Solution" collapse=true}

1. Initially, in the `main()` function, `x = 2` and `y = 5`.
2. `y` is updated to `jumble(5, 2)`, which evaluates to $2 \times 5 + 2 = 12$.
3. Subsequently, `x` is updated to `jumble(12, 2)`, which evaluates to $2 \times 12 + 2 = 26$.
4. Therefore, the final value of `x` printed by the program is $26$.


:::