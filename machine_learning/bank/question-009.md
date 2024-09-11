---
title: Question-9
pagetitle: Question-9
order: 9
categories: [PCA]
---

Consider a covariance matrix $\mathbf{C}$ for a mean-centered dataset in $\mathbb{R}^{3}$. After performing standard PCA, the three principal components turn out to be $\begin{bmatrix}1\\
0\\
0
\end{bmatrix},\begin{bmatrix}0\\
1\\
0
\end{bmatrix},\begin{bmatrix}0\\
0\\
1
\end{bmatrix}$. Which of the following statements are true? You can assume that $\mathbf{C}$ is not the zero matrix.

- [ ] $\mathbf{C}$ is a diagonal matrix.
- [ ] The diagonal entries of $\mathbf{C}$ are non-negative.
- [ ] The diagonal entries of $\mathbf{C}$ are strictly greater than zero.
- [ ] $\mathbf{C}$ has to be the identity matrix.

::: {.callout-note title="Hint" collapse=true}

Try to think of a dataset that would have these three principal components.

:::

::: {.callout-note title="Answer" collapse=true}

- [x] $\mathbf{C}$ is a diagonal matrix.
- [x] The diagonal entries of $\mathbf{C}$ are non-negative.
- [ ] The diagonal entries of $\mathbf{C}$ are strictly greater than zero.
- [ ] $\mathbf{C}$ has to be the identity matrix.

:::

::: {.callout-note title="Solution" collapse=true}

Since the eigenvectors of $\displaystyle \mathbf{C}$ are themselves the standard basis vectors of $\displaystyle \mathbb{R}^{3}$, $\displaystyle \mathbf{C}$ is diagonal with the eigenvalues occupying the diagonal entries:

$$
\begin{equation*}
\mathbf{C} =\begin{bmatrix}
\lambda _{1} &  & \\
 & \lambda _{2} & \\
 &  & \lambda _{3}
\end{bmatrix}
\end{equation*}
$$

For a valid covariance matrix, the eigenvalues are non-negative. Recall that the eigenvalues represent the variance along the principal components. A sample dataset that has this kind of a structure:

$$
\begin{equation*}
\mathbf{X} =\begin{bmatrix}
1 & 0 & -1 & 0\\
0 & 1 & 0 & -1\\
0 & 0 & 0 & 0
\end{bmatrix} \Longrightarrow \mathbf{C} =\begin{bmatrix}
0.5 &  & \\
 & 0.5 & \\
 &  & 0
\end{bmatrix}
\end{equation*}
$$

Visually, these are four points that lie on the XY plane, hence there is no variance along the third dimension.

:::
