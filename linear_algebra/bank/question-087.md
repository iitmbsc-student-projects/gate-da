---
title: Question-87
pagetitle: Question-87
order: 87
categories: [rank, nullity, system of equations]
---

Two non-zero square matrices $\displaystyle A$ and $\displaystyle B$ of order $\displaystyle n$ are given to you with the property that $\displaystyle Ax=0$ and $\displaystyle Bx=0$ have the same set of solutions. Which of the following are always true?

- [ ] $\displaystyle A=B$
- [ ] $\displaystyle A$ and $\displaystyle B$ have the same rank
- [ ] $\displaystyle A$ and $\displaystyle B$ have the same nullity
- [ ] $\displaystyle A=cB$, for some $\displaystyle c\in \mathbb{R}$

::: {.callout-note title="Hint" collapse=true}

Try to construct two simple $2 \times 2$ matrices that have the same null space. 

:::

::: {.callout-note title="Answer" collapse=true}

- [ ] $\displaystyle A=B$
- [x] $\displaystyle A$ and $\displaystyle B$ have the same rank
- [x] $\displaystyle A$ and $\displaystyle B$ have the same nullity
- [ ] $\displaystyle A=cB$, for some $\displaystyle c\in \mathbb{R}$

:::

::: {.callout-note title="Solution" collapse=true}

The set of solutions to $\displaystyle Ax=0$ is just the null space of $\displaystyle A$. We see that $\displaystyle A$ and $\displaystyle B$ have the same null space. Hence, they have the same nullity. Since both are order $\displaystyle n$ square matrices, they have the same rank. However, they needn't be equal or scalar multiples of each other. Here is a simple counter-example:

$$
\begin{equation*}
A=\begin{bmatrix}
1 & 1\\
2 & 2
\end{bmatrix} ,B=\begin{bmatrix}
2 & 2\\
5 & 5
\end{bmatrix}
\end{equation*}
$$

The null space for both matrices is $\displaystyle \text{span}\{( 1,-1)\}$.

:::
