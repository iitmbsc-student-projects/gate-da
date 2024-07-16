---
title: Question-16
pagetitle: Question-16
categories: [Python programming, Time complexity]
---

Consider the following python function:
```python 
def fun(n):
    for i in range(1, n + 1):
        j = 1
        while j < n:
            print(i, j)
            j += i

```

Time complexity of `fun` in terms of $ \Theta $ notation is

- [ ] $\Theta(n^n)$
- [ ] $\Theta(n^2)$
- [ ] $\Theta(n \log n)$
- [ ] $\Theta(n^2 \log n)$



::: {.callout-note title="Solution" collapse=true}

- [ ] $\Theta(n^n)$
- [ ] $\Theta(n^2)$
- [x] $\Theta(n \log n)$
- [ ] $\Theta(n^2 \log n)$

:::



::: {.callout-note title="Feedback" collapse=true}

The outer loop runs $n$ times, and the inner loop runs $\frac{n}{i}$ times for each value of $i$ from $1$ to $n$. Therefore, the total number of iterations is approximately $\sum_{i=1}^{n} \frac{n}{i}$, which is $n \log n$. Hence, the time complexity of `fun` is $ \Theta(n \log n) $.

:::