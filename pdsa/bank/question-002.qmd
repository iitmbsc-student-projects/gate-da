---
title: Question-1
pagetitle: Question-1
categories: [python]
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