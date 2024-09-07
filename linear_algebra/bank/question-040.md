---
title: Question-40
pagetitle: Question-40
order: 40
categories: [projection matrix]
---

Find the matrix that projects every point in the plane onto the line $\displaystyle x+2y=0$.

- [ ] $\displaystyle \begin{bmatrix}
2 & -1\\
-1 & 2
\end{bmatrix}$

- [ ] $\displaystyle \begin{bmatrix}
4 & -2\\
-2 & 1
\end{bmatrix}$

- [ ] $\displaystyle \frac{1}{5}\begin{bmatrix}
2 & -1\\
-1 & 2
\end{bmatrix}$

- [ ] $\displaystyle \frac{1}{5}\begin{bmatrix}
4 & -2\\
-2 & 1
\end{bmatrix}$

::: {.callout-note title="Answer" collapse=true}

- [ ] $\displaystyle \begin{bmatrix}
2 & -1\\
-1 & 2
\end{bmatrix}$

- [ ] $\displaystyle \begin{bmatrix}
4 & -2\\
-2 & 1
\end{bmatrix}$

- [ ] $\displaystyle \frac{1}{5}\begin{bmatrix}
2 & -1\\
-1 & 2
\end{bmatrix}$

- [x] $\displaystyle \frac{1}{5}\begin{bmatrix}
4 & -2\\
-2 & 1
\end{bmatrix}$
:::

::: {.callout-note title="Solution" collapse=true}

The unit vector along this line is $\displaystyle v=\frac{1}{\sqrt{5}}( 2,-1)$. The projection of any point $\displaystyle u$ along this line is therefore:

$$
\begin{equation*}
\left( u^{T} v\right) v
\end{equation*}
$$

Expressing it slightly differently using the symmetry of dot-products and the associativity of matrix multiplication:

$$
\begin{equation*}
\left( vv^{T}\right) u
\end{equation*}
$$

Therefore, the projection matrix is $\displaystyle P=vv^{T}$ and is given by:

$$
\begin{equation*}
P=\frac{1}{5}\begin{bmatrix}
4 & -2\\
-2 & 1
\end{bmatrix}
\end{equation*}
$$

:::