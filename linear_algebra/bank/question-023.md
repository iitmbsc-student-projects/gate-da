---
title: Question-23
pagetitle: Question-23
order: 23
categories: [linear independence]
---

Choose the correct options.

- [ ] The set $\{(1, 2, 3), (4, 5, 6), (7, 8, 9)\}$ is linearly dependent.
- [ ] The set $\{(1, 2, 3), (4, 5, 6), (5, 7, 9)\}$ is linearly independent.
- [ ] The set $\{(1, 2, 3), (0, 5, 6), (0, 0, 9)\}$ is linearly independent.
- [ ] The set $\{(1, 2, 3), (0, 0, 6), (0, 0, 9)\}$ is linearly independent.

::: {.callout-note title="Answer" collapse=true}

- [x] The set $\{(1, 2, 3), (4, 5, 6), (7, 8, 9)\}$ is linearly dependent.
- [ ] The set $\{(1, 2, 3), (4, 5, 6), (5, 7, 9)\}$ is linearly independent.
- [x] The set $\{(1, 2, 3), (0, 5, 6), (0, 0, 9)\}$ is linearly independent.
- [ ] The set $\{(1, 2, 3), (0, 0, 6), (0, 0, 9)\}$ is linearly independent.

:::

::: {.callout-note title="Solution" collapse=true}

<u>Option-1</u>

We have three vectors in $\mathbb{R}^{3}$. Let us form the matrix with these three vectors as rows:
$$
\begin{bmatrix}
1 & 2 & 3\\
4 & 5 & 6\\
7 & 8 & 9
\end{bmatrix}
$$
We can now perform row reduction:
$$
\begin{equation*}
\begin{bmatrix}
1 & 2 & 3\\
4 & 5 & 6\\
7 & 8 & 9
\end{bmatrix}\xrightarrow{R_{2}\rightarrow R_{2} -R_{1}}\begin{bmatrix}
1 & 2 & 3\\
3 & 3 & 3\\
7 & 8 & 9
\end{bmatrix}\xrightarrow{R_{3}\rightarrow R_{3} -R_{1}}\begin{bmatrix}
1 & 2 & 3\\
3 & 3 & 3\\
6 & 6 & 6
\end{bmatrix}
\end{equation*}
$$
Note that the third row is a multiple of the second row. Hence the determinant is zero. The vectors are linearly dependent.

<u>Option-2</u>

The third vector in the set is the sum of the first two. Hence this set is linearly dependent.

<u>Option-3</u>

Adding these three vectors as the rows of matrix, we see that the matrix has full rank. Hence, the set is linearly independent.

<u>Option-4</u>

The third vector is a multiple of the second. Hence this set is linearly dependent.

:::

