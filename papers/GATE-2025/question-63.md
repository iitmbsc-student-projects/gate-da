---
title: Question-63
pagetitle: Question-63
order: 63
categories: [python, recursion, DA-2025]
---

Consider the following Python code snippet.

```python
def f(a, b):
    if (a == 0):
        return b
    if (a % 2 == 1):
        return 2 * f((a - 1) / 2, b)
    return b + f(a - 1, b)
print(f(15, 10))
```

The value printed by the code-snippet is ___ (Answer in integer)

::: {.callout-note title="Answer" collapse=true}

160

:::

::: {.callout-note title="Solution" collapse=true}

The call stack looks like this:

 - `f(15, 10)`
    - evaluates to `2 * f(7, 10)`
        - evaluates to `2 * 2 * f(3, 10)`
          - evaluates to `2 * 2 * 2 * f(1, 10)`
              - evaluates to `2 * 2 * 2 * 2 * f(0, 10)`
                - evaluates to `2 * 2 * 2 * 2 * 10`

The result is `160`. 

Since `a` is odd in every call but the last one, lines 4-5 get hit in every recursive call. The base case in lines 2-3 get invoked to seal the recursion.


:::