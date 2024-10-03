---
title: Question-59
pagetitle: Question-59
order: 59
categories: [rank]
---

Consider the square matrix $\displaystyle A_{n}$ of order $\displaystyle n$ with entries from $\displaystyle 1,\cdots ,n^{2}$ arranged in a row-wise manner, for $\displaystyle n\geqslant 2$. For example:

$$
\begin{equation*}
A_{2} =\begin{bmatrix}
1 & 2\\
3 & 4
\end{bmatrix} ,\ A_{3} =\begin{bmatrix}
1 & 2 & 3\\
4 & 5 & 6\\
7 & 8 & 9
\end{bmatrix}
\end{equation*}
$$

What is the rank of $\displaystyle A_{n}$?

- [ ] $\displaystyle n$
- [ ] $\displaystyle 1$
- [ ] $\displaystyle 2$
- [ ] $\displaystyle n-1$


::: {.callout-note title="Hint" collapse=true}

Express every row of $\displaystyle A_{n}$ as a linear combination of the first two rows.

:::

::: {.callout-note title="Answer" collapse=true}

- [ ] $\displaystyle n$
- [ ] $\displaystyle 1$
- [x] $\displaystyle 2$
- [ ] $\displaystyle n-1$

:::

::: {.callout-note title="Solution" collapse=true}

Let us see the general form of $\displaystyle A_{n}$ and study the pattern:

$$
\begin{equation*}
A_{n} =\begin{bmatrix}
1 & 2 & \cdots  & n\\
n+1 & n+2 & \cdots  & n+n\\
2n+1 & 2n+2 & \cdots  & 2n+n\\
\vdots  & \vdots  &  & \vdots \\
( n-1) n+1 & ( n-1) n+2 & \cdots  & ( n-1) n+n
\end{bmatrix}
\end{equation*}
$$

We see that the element $\displaystyle A_{rc}$ is $\displaystyle ( r-1) n+c$. We also have $\displaystyle A_{1c} =c$ and $\displaystyle A_{2c} =n+c$. These are the two elements in column $\displaystyle c$ in the first and second rows. We will now try to express $\displaystyle A_{rc}$ as a combination of $\displaystyle A_{1c}$ and $\displaystyle A_{2c}$:

$$
\begin{equation*}
\begin{aligned}
A_{rc} =( r-1) n+c & =( r-1)( n+c-c) +c\\
 & =( r-1)( n+c) +( 2-r) c\\
 & =( 2-r) A_{1c} +( r-1) A_{2c}
\end{aligned}
\end{equation*}
$$

In terms of row operations, the $\displaystyle r^{th}$ row is:

$$
\begin{equation*}
R_{r} =( 2-r) R_{1} +( r-1) R_{2}
\end{equation*}
$$

Rows 1 and 2 are linearly independent. Every other row can be expressed as a linear combination of the first two rows. Therefore, the rank of $\displaystyle A_{n}$ is equal to $\displaystyle 2$ for $\displaystyle n\geqslant 2$!

:::
