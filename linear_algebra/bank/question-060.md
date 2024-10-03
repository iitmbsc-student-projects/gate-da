---
title: Question-60
pagetitle: Question-60
order: 60
categories: [rank, linear independence]
---

A student is working with a matrix $\displaystyle A$ of size $\displaystyle m\times n$ and trying to compute its rank. He has written the matrix at the end of a page. He begins to start copying it to the next page so that he can start working on a fresh page. In this process, he accidentally enters a wrong entry for exactly one element of the matrix. Unaware of this, he goes ahead and computes the rank of this corrupted matrix. If the true rank of the matrix is $\displaystyle r$, what are the possible values that he could have obtained?

- [ ] $\displaystyle r$
- [ ] $\displaystyle r+1$
- [ ] $\displaystyle r-1$
- [ ] $\displaystyle r \pm k$, where $\displaystyle k$ can be any integer in the range $\displaystyle 0\leqslant k\leqslant r$

::: {.callout-note title="Hint" collapse=true}

Consider two cases:

- when the vector that is corrupted is one of the vectors in the linear independent set of columns
- when the vector that is corrupted is not one of the vectors in the linear independent set of columns

:::

::: {.callout-note title="Answer" collapse=true}

- [x] $\displaystyle r$
- [x] $\displaystyle r+1$
- [x] $\displaystyle r-1$
- [ ] $\displaystyle r \pm k$, where $\displaystyle k$ can be any integer in the range $\displaystyle 0\leqslant k\leqslant r$

:::

::: {.callout-note title="Solution" collapse=true}

Since the rank of $\displaystyle A$ is $\displaystyle r$, $\displaystyle A$ has $\displaystyle r$ linearly independent columns. Let these columns be denoted by $\displaystyle C$. This presents two cases.

#### Case-1: Mistake is in one of the vectors that is in $\displaystyle C$

In such a scenario, the $\displaystyle r-1$ non-corrupted vectors are still linearly independent. So the rank of the matrix is at least $\displaystyle r-1$. If the corrupted vector lies in the span of these $\displaystyle r-1$ columns, the rank of the matrix is $\displaystyle r-1$. If it doesn't, then the rank of the matrix remains $\displaystyle r$.

#### Case-2: Mistake is in one of the vectors that is not in $\displaystyle C$

In such a scenario, the rank of the matrix is at least $\displaystyle r$. If the corrupted vector lies in the span of $\displaystyle C$, then the rank remains $\displaystyle r$. If not, the rank increases to $\displaystyle r+1$. This is because, the corrupted vector can be added to $\displaystyle C$ to give a larger linearly independent set.

::: {.callout-note title="Remark"}
We have shown the following fact in this process. If $\displaystyle A$ and $\displaystyle B$ are two matrices that differ in exactly one entry, $\displaystyle |\text{rank}( A) -\text{rank}( B) |\leqslant 1$.
:::

:::
