---
title: Question-39
pagetitle: Question-39
order: 39
categories: [symmetric matrix]
---

Select all true statements.

- [ ] The number of elements that can be chosen independently in a symmetric matrix of order $\displaystyle n$ is $\displaystyle n( n+1) /2$.
- [ ] The number of elements that can be chosen independently in a symmetric matrix of order $\displaystyle n$ is $\displaystyle n( n-1) /2$.
- [ ] The number of elements that can be chosen independently in a skew-symmetric matrix of order $\displaystyle n$ is $\displaystyle n( n+1) /2$.
- [ ] The number of elements that can be chosen independently in a skew-symmetric matrix of order $\displaystyle n$ is $\displaystyle n( n-1) /2$.

::: {.callout-note title="Answer" collapse=true}
- [x] The number of elements that can be chosen independently in a symmetric matrix of order $\displaystyle n$ is $\displaystyle n( n+1) /2$.
- [ ] The number of elements that can be chosen independently in a symmetric matrix of order $\displaystyle n$ is $\displaystyle n( n-1) /2$.
- [ ] The number of elements that can be chosen independently in a skew-symmetric matrix of order $\displaystyle n$ is $\displaystyle n( n+1) /2$.
- [x] The number of elements that can be chosen independently in a skew-symmetric matrix of order $\displaystyle n$ is $\displaystyle n( n-1) /2$.
:::

::: {.callout-note title="Solution" collapse=true}
- For a symmetric matrix, the first row has $\displaystyle n$ free slots, the second row has $\displaystyle n-1$ free slots and so on. This results in $\displaystyle n+( n-1) +\cdots +1=\frac{n( n+1)}{2}$ free slots. 
- For a skew-symmetric matrix, all diagonal entries are zero. Hence, we need to subtract $\displaystyle n$ from the above quantity, which results in $\displaystyle \frac{n( n-1)}{2}$ free slots.
:::