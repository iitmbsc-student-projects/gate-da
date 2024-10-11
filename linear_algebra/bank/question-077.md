---
title: Question-77
pagetitle: Question-77
order: 77
categories: [eigenvalue, eigenvector, diagonalizable]
---

A square matrix $\displaystyle A$ of order $\displaystyle n$ is diagonalizable if $\displaystyle \mathbb{R}^{n}$ has a basis made up of the eigenvectors of $\displaystyle A$. Which of the following are true?

- [ ] The characteristic polynomial of a diagonalizable matrix has $\displaystyle n$ distinct roots.

- [ ] If a matrix has $\displaystyle n$ distinct eigenvalues, it is diagonalizable.

- [ ] If $\displaystyle A$ is diagonalizable, $\displaystyle A+cI$ is diagonalizable for any $\displaystyle c\in \mathbb{R}$.

- [ ] A diagonalizable matrix is symmetric.

- [ ] If a matrix is diagonalizable, it has to be a diagonal matrix.

::: {.callout-note title="Answer" collapse=true}

- [ ] The characteristic polynomial of a diagonalizable matrix has $\displaystyle n$ distinct roots.

- [x] If a matrix has $\displaystyle n$ distinct eigenvalues, it is diagonalizable.

- [x] If $\displaystyle A$ is diagonalizable, $\displaystyle A+cI$ is diagonalizable for any $\displaystyle c\in \mathbb{R}$.

- [ ] A diagonalizable matrix is symmetric.

- [ ] If a matrix is diagonalizable, it has to be a diagonal matrix.

:::

::: {.callout-note title="Solution" collapse=true}



#### Option-1

This is not necessary. Consider the identity matrix, which is diagonalizable. It has only one eigenvalue, namely $\displaystyle 1$, repeated $\displaystyle n$ times.

#### Option-2

Eigenvectors corresponding to distinct eigenvalues are linearly independent. We can use this fact to show that we can find a basis of eigenvectors for $\displaystyle \mathbb{R}^{n}$.

#### Option-3

If $\displaystyle ( \lambda ,v)$ is an eigenpair of $\displaystyle A$, $\displaystyle ( \lambda +c,v)$ is an eigenpair of $\displaystyle A+cI$:

$$
\begin{equation*}
\begin{aligned}
( A+cI) v & =Av+cv\\
 & =\lambda v+cv\\
 & =( \lambda +c) v
\end{aligned}
\end{equation*}
$$

It follows that $\displaystyle A$ and $\displaystyle A+cI$ have the same set of eigenvectors. It follows that $\displaystyle A+cI$ is also diagonalizable.

#### Option-4

Symmetric matrices are diagonalizable. But all diagonalizable matrices need not be symmetric. For instance, consider:

$$
\begin{equation*}
A=\begin{bmatrix}
1 & 1\\
0 & 2
\end{bmatrix}
\end{equation*}
$$

$\displaystyle A$ has two distinct eigenvalues, hence we can choose two linearly independent eigenvectors, which form a basis for $\displaystyle \mathbb{R}^{2}$.

#### Option-5

The previous example can serve as a counter-example here as well.

:::
