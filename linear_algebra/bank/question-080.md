---
title: Question-80
pagetitle: Question-80
order: 80
categories: [eigenvalue, eigenvector]
---

Let $\displaystyle A$ be a square matrix of order $2$ such that the sum of each row and the sum of each column is equal to a constant $\displaystyle k$. Which of the following are eigenvectors of $\displaystyle A$?

- [ ] $\displaystyle ( 1,0)$
- [ ] $\displaystyle ( 0,1)$
- [ ] $\displaystyle ( 1,1)$
- [ ] $\displaystyle ( 1,-1)$

::: {.callout-note title="Answer" collapse=true}

- [ ] $\displaystyle ( 1,0)$
- [ ] $\displaystyle ( 0,1)$
- [x] $\displaystyle ( 1,1)$
- [x] $\displaystyle ( 1,-1)$

:::

::: {.callout-note title="Solution" collapse=true}

We have:

$$
\begin{equation*}
A=\begin{bmatrix}
a & k-a\\
k-a & a
\end{bmatrix}
\end{equation*}
$$

We see that $\displaystyle ( 1,1)$ is an eigenvector of $\displaystyle A$ with eigenvalue $\displaystyle k$ since the sum of the columns of $\displaystyle A$ is equal to $\displaystyle ( k,k)$. If we subtract the columns, we get $\displaystyle ( 2a-k)( 1,-1)$. Hence, $\displaystyle ( 1,-1)$ is an eigenvector of $\displaystyle A$ with eigenvalue $\displaystyle 2a-k$.

:::
