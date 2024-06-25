---
title: Question-6
pagetitle: Question-6
order: 6
categories: [eigenvalue,DA-2024]
---

Consider the matrix $\mathbf{M} = \begin{bmatrix}2 & -1\\3 & 1\end{bmatrix}$. Which one of the following statements is true?

- [ ] The eigenvalues of $\mathbf{M}$ are non-negative and real.
- [ ] The eigenvalues of $\mathbf{M}$ are complex conjugate pairs.
- [ ] One eigenvalue of $\mathbf{M}$ is positive and real, and another eigenvalue of $\mathbf{M}$ is zero.
- [ ] One eigenvalue of $\mathbf{M}$ is non-negative and real, and another eigenvalue of $\mathbf{M}$ is negative and real

::: {.callout-note title="Answer" collapse=true}

- [ ] The eigenvalues of $\mathbf{M}$ are non-negative and real.
- [x] The eigenvalues of $\mathbf{M}$ are complex conjugate pairs.
- [ ] One eigenvalue of $\mathbf{M}$ is positive and real, and another eigenvalue of $\mathbf{M}$ is zero.
- [ ] One eigenvalue of $\mathbf{M}$ is non-negative and real, and another eigenvalue of $\mathbf{M}$ is negative and real

:::

::: {.callout-note title="Solution" collapse=true}

We can compute the eigenvalues with the help of the characteristic polynomial:
$$
\begin{aligned}
\begin{vmatrix}
2 - \lambda & -1\\
3 & 1 - \lambda
\end{vmatrix} &= 0\\\\
(2 - \lambda)(1 - \lambda) + 3 &= 0\\\\
\lambda^2 -3 \lambda + 5 &= 0\\\\
\end{aligned}
$$
We see that the discriminant of the quadratic equation is negative. Hence, the eigenvalues are complex conjugate pairs.

:::