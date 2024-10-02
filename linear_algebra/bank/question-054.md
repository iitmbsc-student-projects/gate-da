---
title: Question-54
pagetitle: Question-54
order: 54
categories: [symmetric matrix]
---

$\displaystyle A$ and $\displaystyle B$ are two symmetric matrices. Two square matrices $\displaystyle P$ and $\displaystyle Q$ are said to commute if $\displaystyle PQ=QP$. Which of the following statements are true?

- [ ] If $\displaystyle A$ and $\displaystyle B$ commute, $\displaystyle AB$ is symmetric.
- [ ] If $\displaystyle AB$ is symmetric, $\displaystyle A$ and $\displaystyle B$ commute.
- [ ] $\displaystyle AB$ is always a symmetric matrix.
- [ ] $\displaystyle AB$ can never be a symmetric matrix.

::: {.callout-note title="Answer" collapse=true}

- [x] If $\displaystyle A$ and $\displaystyle B$ commute, $\displaystyle AB$ is symmetric.
- [x] If $\displaystyle AB$ is symmetric, $\displaystyle A$ and $\displaystyle B$ commute.
- [ ] $\displaystyle AB$ is always a symmetric matrix.
- [ ] $\displaystyle AB$ can never be a symmetric matrix.

:::

::: {.callout-note title="Solution" collapse=true}

Let us first take the first option where $\displaystyle A$ and $\displaystyle B$ commute. This implies that $\displaystyle AB=BA$. Let us now check for the symmetry of $\displaystyle AB$:

$$
\begin{equation*}
\begin{aligned}
( AB)^{T} & =B^{T} A^{T}\\
 & =BA\\
 & =AB
\end{aligned}
\end{equation*}
$$

In the second step, we have used the fact that $\displaystyle A$ and $\displaystyle B$ are symmetric. In the third step we have used the fact that $\displaystyle A$ and $\displaystyle B$ commute. Since $\displaystyle ( AB)^{T} =AB$, we see that $\displaystyle AB$ is symmetric. A very similar argument holds for option-(b), which is also true. 

Options-(c) requires slightly more work since we have to come up with a counter example. A quick example:

$$
\begin{equation*}
A=\begin{bmatrix}
1 & 2\\
2 & 3
\end{bmatrix} ,\ B=\begin{bmatrix}
3 & 1\\
1 & 2
\end{bmatrix} \Longrightarrow AB=\begin{bmatrix}
5 & 5\\
9 & 8
\end{bmatrix}
\end{equation*}
$$

Option-(d) is clearly false since we can set $\displaystyle A=B=I$.

:::
