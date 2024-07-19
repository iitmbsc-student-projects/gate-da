---
title: Question-17
pagetitle: Question-17
categories: [Python programming, Time complexity]
---

Consider the following function:

```python
def fun1(n):
    q = 0
    for i in range(1, n):
        p = 0
        j = n
        while j > 1:
            p += 1
            j //= 2
        
        k = 1
        while k < p:
            q += 1
            k *= 2
            
    return q

```

Which one of the following most closely approximates the return value of the function `fun1`?

- [ ] $n^3$
- [ ] $n(\log n)^2$
- [ ] $n \log n$
- [ ] $n \log(\log n)$



::: {.callout-note title="Answer" collapse=true}

- [ ] $n^3$
- [ ] $n(\log n)^2$
- [ ] $n \log n$
- [x] $n \log(\log n)$

:::



::: {.callout-note title="Solution" collapse=true}

The outer loop runs $n - 1$ times. The first inner loop increments $p$ until $j$ becomes $1$, which takes $\log n$ iterations. The second inner loop increments $q$ until $k$ reaches $p$, which takes $\log p$ iterations. Therefore, the return value $q$ is closely approximated by $n \log(\log n)$.

:::