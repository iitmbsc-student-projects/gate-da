---
title: Question-72
pagetitle: Question-72
order: 72
categories: [rank, nullity, system of equations]
---

Compute the dimension of the hyperplane formed by the intersection of the following hyperplanes of $\displaystyle \mathbb{R}^{4}$:

$$
\begin{equation*}
\begin{aligned}
x_{1} -2x_{2} +x_{3} -x_{4} & =0\\
x_{1} +x_{2} -x_{3} +x_{4} & =0
\end{aligned}
\end{equation*}
$$

::: {.callout-note title="Hint" collapse=true}
Solve $Ax = 0$
:::

::: {.callout-note title="Answer" collapse=true}

$2$

:::

::: {.callout-note title="Solution" collapse=true}

We can treat this as a system of homogeneous equations whose coefficient matrix is given by:

$$
\begin{equation*}
A=\begin{bmatrix}
1 & -2 & 1 & -1\\
1 & 1 & -1 & 1
\end{bmatrix}
\end{equation*}
$$

The dimension of the intersection of the two hyperplanes is simply the dimension of the solution space of $\displaystyle Ax=0$. This is just the nullity of $\displaystyle A$. To get there, we can simply find the rank and subtract it from the number of columns. Upon inspection, it is clear that the rank of $\displaystyle A$ is $\displaystyle 2$. Therefore, the nullity is $\displaystyle 2$.

:::
