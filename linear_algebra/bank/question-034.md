---
title: Question-34
pagetitle: Question-34
order: 34
categories: [determinant, partitioned matrix]
---

Find $\displaystyle \text{det}( A)$

$$
A=\begin{bmatrix}
1 & 0 & 1 & 0 & 0 & 0\\
0 & -1 & 2 & 0 & 0 & 0\\
0 & 0 & -3 & 0 & 0 & 0\\
1 & -1 & 2 & 1 & 2 & -1\\
2 & 1 & 3 & 0 & 2 & 3\\
0 & 1 & 2 & 0 & 0 & 3
\end{bmatrix}
$$

::: {.callout-note title="Answer" collapse=true}

$18$

:::

::: {.callout-note title="Solution" collapse=true}

We can partition this matrix as follows:

$$
A=\begin{bmatrix}
1 & 0 & 1 & 0 & 0 & 0\\
0 & -1 & 2 & 0 & 0 & 0\\
0 & 0 & -3 & 0 & 0 & 0\\
1 & -1 & 2 & 1 & 2 & -1\\
2 & 1 & 3 & 0 & 2 & 3\\
0 & 1 & 2 & 0 & 0 & 3
\end{bmatrix} =\begin{bmatrix}
B & 0\\
D & E
\end{bmatrix}
$$

Now, we use the fact the determinant of $\displaystyle A$ is $\displaystyle \text{det}( B)\text{det}( E)$ when one of the off-diagonal blocks is zero. This turns out to be $\displaystyle 18$.

:::
