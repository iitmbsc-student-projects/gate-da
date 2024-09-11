---
title: Question-6
pagetitle: Question-6
order: 6
categories: [PCA]
---

Which of the following can be the covariance matrix of a dataset in $\displaystyle \mathbb{R}^{2}$?

- [ ] $\displaystyle \begin{bmatrix}
  1 & 0\\
  0 & 3
  \end{bmatrix}$

  

- [ ] $\displaystyle \begin{bmatrix}
  -2 & 0\\
  0 & 3
  \end{bmatrix}$

  

- [ ] $\displaystyle \begin{bmatrix}
  1 & 2\\
  3 & 4
  \end{bmatrix}$

  

- [ ] $\displaystyle \begin{bmatrix}
2 & 3.9\\
3.9 & 8
\end{bmatrix}$

::: {.callout-note title="Answer" collapse=true}

- [x] $\displaystyle \begin{bmatrix}
1 & 0\\
0 & 3
\end{bmatrix}$

- [ ] $\displaystyle \begin{bmatrix}
-2 & 0\\
0 & 3
\end{bmatrix}$

- [ ] $\displaystyle \begin{bmatrix}
1 & 2\\
3 & 4
\end{bmatrix}$

- [x] $\displaystyle \begin{bmatrix}
2 & 3.9\\
3.9 & 8
\end{bmatrix}$  

:::

::: {.callout-note title="Solution" collapse=true}

For a matrix to be the covariance matrix of some dataset, it has to be symmetric positive semi-definite. Consider a symmetric matrix:

$$
\begin{equation*}
C=\begin{bmatrix}
d_{1} & a\\
a & d_{2}
\end{bmatrix}
\end{equation*}
$$

For $\displaystyle C$ to be positive semi-definite, its eigenvalues have to be non-negative. The characteristic polynomial is:

$$
\begin{equation*}
( d_{1} -\lambda )( d_{2} -\lambda ) -a^{2} =\lambda ^{2} -( d_{1} +d_{2}) \lambda +\left( d_{1} d_{2} -a^{2}\right)
\end{equation*}
$$

For the eigenvalues to be non-negative, we see that:

- $\displaystyle d_{1} +d_{2} \geqslant 0$ and
- $\displaystyle d_{1} d_{2} -a^{2} \geqslant 0$

From this, we conclude that both $\displaystyle d_{1}$ and $\displaystyle d_{2}$ have to be non-negative, with $\displaystyle |a|\leqslant \sqrt{d_{1} d_{2}}$. From the matrices given in the option, we see that (1) and (4) satisfy these conditions.

:::