---
title: Question-27
pagetitle: Question-27
order: 27
categories: [eigenvalue]
---

What is the product of the non-zero eigenvalues of the following matrix:
$$
\begin{bmatrix}
1 & 0 & 0 & 0 & 1\\
0 & 1 & 1 & 1 & 0\\
0 & 1 & 1 & 1 & 0\\
0 & 1 & 1 & 1 & 0\\
1 & 0 & 0 & 0 & 1
\end{bmatrix}
$$

::: {.callout-note title="Answer" collapse=true}

$6$

:::

::: {.callout-note title="Solutions" collapse=true}

::: {.panel-tabset}

## Solution-1

Thanks to Vivek, Sherry and Aniruddha for this elegant solution.

We have:

$$
\begin{equation*}
A=\begin{bmatrix}
1 & 0 & 0 & 0 & 1\\
0 & 1 & 1 & 1 & 0\\
0 & 1 & 1 & 1 & 0\\
0 & 1 & 1 & 1 & 0\\
1 & 0 & 0 & 0 & 1
\end{bmatrix}
\end{equation*}
$$

Given the symmetry in the problem, by inspection, we see that $\displaystyle A$ has the following eigenpairs:

$$
\begin{gather*}
( 2,( 1,0,0,0,1))\\
\\
( 3,( 0,1,1,1,0))
\end{gather*}
$$

We also see that the rank of $\displaystyle A$ is $\displaystyle 2$. For a symmetric matrix (a diagonalizable matrix, to be more specific), the rank is equal to the number of non-zero eigenvalues (including the multiplicity). Therefore $2$ and $3$ are the only non-zero eigenvalues and each of them occurs just once. The required product is $\boxed{6}$.

## Solution-2

The product of the eigenvalues of a matrix is equal to its determinant. But the determinant of this matrix is zero and we are asked to compute the product of the non-zero eigenvalues. We should therefore take recourse to the characteristic polynomial:
$$
D = \begin{vmatrix}
1 - \lambda & 0 & 0 & 0 & 1\\
0 & 1 - \lambda & 1 & 1 & 0\\
0 & 1 & 1 - \lambda & 1 & 0\\
0 & 1 & 1 & 1 - \lambda & 0\\
1 & 0 & 0 & 0 & 1 - \lambda
\end{vmatrix}
$$
Though this determinant looks forbidding, computing it is not all that cumbersome if we choose the right row/column along which to expand. Let us first break this down into the following sum by expanding along the first row:
$$
D = (1 - \lambda) \begin{vmatrix}
1 - \lambda & 1 & 1 & 0\\
1 & 1 - \lambda & 1 & 0\\
1 & 1 & 1 - \lambda & 0\\
0 & 0 & 0 & 1 - \lambda
\end{vmatrix} + \begin{vmatrix}
0 & 1 - \lambda & 1 & 1\\
0 & 1 & 1 - \lambda & 1\\
0 & 1 & 1 & 1 - \lambda\\
1 & 0 & 0 & 0
\end{vmatrix}
$$
The two determinants look quite similar to each other. We can expand along the last row for both of them:
$$
D = \left[(1 - \lambda)^2 - 1 \right] \begin{vmatrix}
1 - \lambda & 1 & 1\\
1 & 1 - \lambda & 1\\
1 & 1 & 1 - \lambda\\
\end{vmatrix}
$$
Let us first compute the $3 \times 3$ determinant:
$$
\begin{vmatrix}
1 - \lambda & 1 & 1\\
1 & 1 - \lambda & 1\\
1 & 1 & 1 - \lambda\\
\end{vmatrix} = - \lambda^2 (\lambda - 3)
$$
Putting it all together:
$$
D = -\lambda^3(\lambda - 2)(\lambda - 3)
$$
We see that there are five eigenvalues: $0, 0, 0, 2, 3$. The product of the non-zero eigenvalues is therefore $\boxed{6}$.

:::

:::
