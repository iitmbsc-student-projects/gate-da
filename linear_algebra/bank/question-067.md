---
title: Question-67
pagetitle: Question-67
order: 67
categories: [determinant]
---

Consider the square matrix of order $\displaystyle n$ given below:

$$
\begin{equation*}
A_{n} =\begin{bmatrix}
 &  & 1\\
 & ⋰  & \\
1 &  & 
\end{bmatrix}
\end{equation*}
$$

All entries on the anti-diagonal (top-right to bottom-left) are $\displaystyle 1$ and all other entries are zero. Which of the following is the determinant of $\displaystyle A_{n}$?

- [ ] $\displaystyle 1$

- [ ] $\displaystyle -1$

- [ ] $\displaystyle ( -1)^{n}$

- [ ] $\displaystyle ( -1)^{n+1}$

- [ ] $\displaystyle ( -1)^{\left\lfloor \cfrac{n}{2}\right\rfloor }$

::: {.callout-note title="Hint" collapse=true}
Odd or even
:::

::: {.callout-note title="Answer" collapse=true}

- [ ] $\displaystyle 1$

- [ ] $\displaystyle -1$

- [ ] $\displaystyle ( -1)^{n}$

- [ ] $\displaystyle ( -1)^{n+1}$

- [x] $\displaystyle ( -1)^{\left\lfloor \cfrac{n}{2}\right\rfloor }$

:::

::: {.callout-note title="Solution" collapse=true}

We know that a row-interchange changes the sign of the determinant. The strategy is to start with $\displaystyle A_{n}$ and arrive at the identity matrix using a finite number of row interchange operations. For a matrix of odd order, we need to make $\displaystyle \frac{n-1}{2}$ row exchanges. This is because, the row in the middle is correctly placed and need not be disturbed. We can then swap the first and last row, the second and penultimate row and so on. For a matrix of even order, we need to make $\displaystyle \frac{n}{2}$ row exchanges. Therefore, the formula for the determinant takes this form:

$$
\begin{equation*}
|A_{n} |=\begin{cases}
( -1)^{n/2} , & n\ \text{is even}\\
( -1)^{( n-1) /2} , & n\ \text{is odd}
\end{cases}
\end{equation*}
$$

We can use the floor operator to reduce this to a single formula:

$$
\begin{equation*}
A_{n} =( -1)^{\left\lfloor \cfrac{n}{2}\right\rfloor }
\end{equation*}
$$

:::
