---
title: Question-75
pagetitle: Question-75
order: 75
categories: [system of equations, rank, nullity]
---

Consider $\displaystyle k$ linear equations in $\displaystyle n$ variables expressed in the form $\displaystyle Ax=b$. Which of the following are true?

- [ ] If $\displaystyle n=k$, there is always at most one solution

- [ ] If $\displaystyle n >k$, you can always solve the system

- [ ] If $\displaystyle n >k$, nullity of $\displaystyle A$ is non-zero

- [ ] If $\displaystyle n< k$, then for some $\displaystyle b$, there is no solution to $\displaystyle Ax=b$

- [ ] If $\displaystyle n< k$, then the only solution of $\displaystyle Ax=0$ is $\displaystyle x=0$

::: {.callout-note title="Answer" collapse=true}

- [ ] If $\displaystyle n=k$, there is always at most one solution

- [ ] If $\displaystyle n >k$, you can always solve the system

- [x] If $\displaystyle n >k$, nullity of $\displaystyle A$ is non-zero

- [x] If $\displaystyle n< k$, then for some $\displaystyle b$, there is no solution to $\displaystyle Ax=b$

- [ ] If $\displaystyle n< k$, then the only solution of $\displaystyle Ax=0$ is $\displaystyle x=0$

:::

::: {.callout-note title="Solution" collapse=true}


#### Option-1

This is not true. Consider:

$$
\begin{equation*}
A=\begin{bmatrix}
1 & 1\\
1 & 1
\end{bmatrix} ,\ x=\begin{bmatrix}
x_{1}\\
x_{2}
\end{bmatrix} ,\ b=\begin{bmatrix}
1\\
1
\end{bmatrix}
\end{equation*}
$$

This system has infinitely many solutions.

#### Option-2

This is not true. Let $\displaystyle n=4,k=2$:

$$
\begin{equation*}
A=\begin{bmatrix}
1 & 0 & 0 & 0\\
0 & 0 & 0 & 0
\end{bmatrix} ,\ x=\begin{bmatrix}
x_{1}\\
x_{2}\\
x_{3}\\
x_{4}
\end{bmatrix} ,\ b=\begin{bmatrix}
0\\
1
\end{bmatrix}
\end{equation*}
$$

This system has no solutions.

#### Option-3

This is true. If $\displaystyle n >k$, the rank of $\displaystyle A$ is at most $\displaystyle k$. Therefore, the nullity of $\displaystyle A$ is at least $\displaystyle n-k >0$.

#### Option-4

This is true. If $\displaystyle n< k$, the matrix looks tall. Let $\displaystyle c_{1} ,\cdots ,c_{n}$ be the $\displaystyle n$ columns. The span of these columns, the column space, would have dimension at most $\displaystyle n$. This is a subspace of $\displaystyle \mathbb{R}^{k}$. Since $\displaystyle n< k$, we can find a vector $\displaystyle b\in \mathbb{R}^{k}$ which is not in the column space. For this choice, $\displaystyle Ax=b$ has no solutions.

#### Option-5

This is false. Consider $\displaystyle n=2,k=3$:

$$
\begin{equation*}
A=\begin{bmatrix}
1 & 1\\
1 & 1\\
1 & 1
\end{bmatrix} ,\ x=\begin{bmatrix}
x_{1}\\
x_{2}
\end{bmatrix} ,\ b=\begin{bmatrix}
1\\
1\\
1
\end{bmatrix}
\end{equation*}
$$

This system has infinitely many solutions.

:::
