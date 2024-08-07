---
title: Question-9
pagetitle: Question-9
categories: [GATE-2021, Algorithms, Search]
---

What is the number of arithmetic operations required to implement binary search on a sorted array?


- [ ] $ϴ(n)$
- [ ] $ϴ(\log n)$
- [ ] $ϴ(1)$
- [ ] $ϴ(n^2)$



::: {.callout-note title="Answer" collapse=true}

- [ ] $ϴ(n)$
- [x] $ϴ(\log n)$
- [ ] $ϴ(1)$
- [ ] $ϴ(n^2)$

:::



::: {.callout-note title="Solution" collapse=true}

The number of arithmetic operations in binary search is related to the number of iterations in the loop. In the case of binary search, the while loop continues until the `beg` index is less than or equal to the `end` index. The arithmetic operation within the loop, `m = (l + h) / 2`, occurs with each iteration. 

```c
while (beg <= end) {
    m = (l + h) / 2;
    // ...other operations...
}
```

As the loop runs in $ϴ(\log n)$ time due to halving the search space at each step, the number of arithmetic operations is also $ϴ(\log n)$. Therefore, the correct option is $ϴ(\log n)$.

:::