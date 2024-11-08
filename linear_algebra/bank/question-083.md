---
title: Question-83
pagetitle: Question-83
order: 83
categories: [system of equations, matrix, determinant]
---

Choose the correct options from the following:

- [ ] Let $\displaystyle A,B$ be square matrices of the same order such that $\displaystyle AB=0$. Then at least one of the matrices must have determinant $\displaystyle 0$.
- [ ] If $\displaystyle A-\alpha I=0$ for a square matrix $\displaystyle A$ of order $\displaystyle n$ and $\displaystyle \alpha \in \mathbb{R}$, the determinant of $\displaystyle A$ is always positive.
- [ ] A matrix with all diagonal entries zero will have a zero determinant.
- [ ] For a square matrix $\displaystyle A$, if the system of linear equations $\displaystyle Ax=0$ has a unique solution, then the determinant of $\displaystyle A$ is non-zero.


::: {.callout-note title="Answer" collapse=true}

- [x] Let $\displaystyle A,B$ be square matrices of the same order such that $\displaystyle AB=0$. Then at least one of the matrices must have determinant $\displaystyle 0$.
- [ ] If $\displaystyle A-\alpha I=0$ for a square matrix $\displaystyle A$ of order $\displaystyle n$ and $\displaystyle \alpha \in \mathbb{R}$, the determinant of $\displaystyle A$ is always positive.
- [ ] A matrix with all diagonal entries zero will have a zero determinant.
- [x] For a square matrix $\displaystyle A$, if the system of linear equations $\displaystyle Ax=0$ has a unique solution, then the determinant of $\displaystyle A$ is non-zero.

:::

::: {.callout-note title="Solution" collapse=true}

### Option-1

If $\displaystyle AB=0$, then $\displaystyle |AB|=0$. This implies that $\displaystyle |A|\cdot |B|=0$, so the determinant of at least one of these two matrices has to be zero.

### Option-2

We have:

$$
\begin{equation*}
\begin{aligned}
|A| & =|\alpha I|\\
 & =\alpha ^{n}
\end{aligned}
\end{equation*}
$$

The determinant of $\displaystyle A$ will be positive for any arbitrary $\displaystyle \alpha $ only if $\displaystyle n$ is even.

### Option-3

Here is a counter example. $\displaystyle A=\begin{bmatrix}
0 & 1\\
1 & 0
\end{bmatrix}$. $\displaystyle |A|=-1$.

### Option-4

If $\displaystyle Ax=0$ has a unique solution for some square matrix $\displaystyle A$, the columns of $\displaystyle A$ are linearly independent and hence $\displaystyle |A|\neq 0$.

:::