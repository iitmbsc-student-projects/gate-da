---
title: Question-38
pagetitle: Question-38
order: 38
categories: [permutation matrix]
---

Which permutation matrix $\displaystyle P$ makes $\displaystyle PA$ upper triangular where:

$$
\begin{equation*}
A=\begin{bmatrix}
0 & 0 & 6\\
1 & 2 & 3\\
0 & 4 & 5
\end{bmatrix}
\end{equation*}
$$


- [ ] $\displaystyle \begin{bmatrix}
0 & 1 & 0\\
0 & 0 & 1\\
1 & 0 & 0
\end{bmatrix}$

- [ ] $\displaystyle \begin{bmatrix}
0 & 1 & 0\\
1 & 0 & 0\\
0 & 0 & 1
\end{bmatrix}$

- [ ] $\displaystyle \begin{bmatrix}
1 & 0 & 0\\
0 & 0 & 1\\
0 & 1 & 0
\end{bmatrix}$

- [ ] $\displaystyle \begin{bmatrix}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 1
\end{bmatrix}$

::: {.callout-note title="Answer" collapse=true}

- [x] $\displaystyle \begin{bmatrix}
0 & 1 & 0\\
0 & 0 & 1\\
1 & 0 & 0
\end{bmatrix}$

- [ ] $\displaystyle \begin{bmatrix}
0 & 1 & 0\\
1 & 0 & 0\\
0 & 0 & 1
\end{bmatrix}$

- [ ] $\displaystyle \begin{bmatrix}
1 & 0 & 0\\
0 & 0 & 1\\
0 & 1 & 0
\end{bmatrix}$

- [ ] $\displaystyle \begin{bmatrix}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 1
\end{bmatrix}$


:::

::: {.callout-note title="Solution" collapse=true}
Recall the following facts:

- A permutation matrix is obtained by permuting the rows of the identity matrix.

- Pre-multiplying $\displaystyle A$ by a permutation matrix is equivalent to permuting the rows of $\displaystyle A$.

To get $\displaystyle A$ into an upper triangular matrix, we need:

$$
\begin{equation*}
\begin{bmatrix}
- & R_{2} & -\\
- & R_{3} & -\\
- & R_{1} & -
\end{bmatrix} \Longrightarrow P=\begin{bmatrix}
0 & 1 & 0\\
0 & 0 & 1\\
1 & 0 & 0
\end{bmatrix}
\end{equation*}
$$
:::