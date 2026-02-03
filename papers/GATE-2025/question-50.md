---
title: Question-50
pagetitle: Question-50
order: 50
categories: [projection matrix, orthonormal basis, SVD, DA-2025]
---

Let $\{x_{1} ,x_{2} ,x_{3} ,x_{4} ,x_{5}\}$ be a set of orthonormal vectors in $\mathbb{R}^{10}$. Consider the matrix $A=x_{1} x_{1}^{T} +\cdots +x_{5} x_{5}^{T}$. Which of the following statements is/are correct?

 - [ ] Singular values of $A$ are also its eigenvalues

 - [ ] Singular values of $A$ are either $0$ or $1$

 - [ ] Determinant of $A$ is $1$

 - [ ] $A$ is invertible

::: {.callout-note title="Answer" collapse=true}

 - [x] Singular values of $A$ are also its eigenvalues

 - [x] Singular values of $A$ are either $0$ or $1$

 - [ ] Determinant of $A$ is $1$

 - [ ] $A$ is invertible

:::

::: {.callout-note title="Solution" collapse=true}

Let us extend $\{x_{1} ,\cdots ,x_{5}\}$ to an orthonormal basis $\{x_{1} ,\cdots ,x_{5} ,x_{6} ,\cdots ,x_{10}\}$ for $\mathbb{R}^{10}$. Now, we can express $A$ as:

$$
A=1\cdot x_{1} x_{1}^{T} +\cdots +1\cdot x_{5} x_{5}^{T} +0\cdot x_{6} x_{6}^{T} +\cdots +0\cdot x_{10} x_{10}^{T}
$$

Setting $Q=\begin{bmatrix}
| &  & |\\
x_{1} & \cdots  & x_{10}\\
| &  & |
\end{bmatrix}$ and $D=\begin{bmatrix}
I & 0\\
0 & 0
\end{bmatrix}$, where $D$ is a block diagonal matrix with each entry being a square matrix of order $5$, we see that $A=QDQ^{T}$. Next, note that each $x_{i}$ is an eigenvector of $A$ because $Ax_{i} =\lambda _{i} x_{i}$, where $\lambda =1$ or $\lambda =0$. Therefore, what we have is an eigen-decomposition of $A$. In fact, we also see that $A^{T} A=AA^{T} =A$. We can also conclude that $A=QDA^{T}$ is the singular value decomposition of $A$. In summary:

> $A$ has the same singular/eigenvalues which are either $1$ or $0$

Since $0$ is an eigenvalue, $A$ is neither invertible nor is its determinant $1$.

As an additional note, we see that $A$ is actually a projection matrix. It projects points in $\mathbb{R}^{10}$ onto the span of the vectors $\{x_{1} ,\cdots ,x_{5}\}$.

:::