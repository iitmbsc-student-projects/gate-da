---
title: Question-88
pagetitle: Question-88
order: 88
categories: [eigenvalue, eigenvector]
---

Consider a square matrix $\displaystyle A$ with real entries of order $\displaystyle 2$ which has two equal eigenvalues. If $\displaystyle t$ is its trace and $\displaystyle d$ its determinant, which of the following are true?

- [ ] $\displaystyle d\geqslant 0$
- [ ] $\displaystyle d< 0$
- [ ] $\displaystyle A=0$
- [ ] $\displaystyle A$ is a scalar matrix
- [ ] The diagonal entries of $\displaystyle A$ are equal

::: {.callout-note title="Answer" collapse=true}

- [x] $\displaystyle d\geqslant 0$
- [ ] $\displaystyle d< 0$
- [ ] $\displaystyle A=0$
- [ ] $\displaystyle A$ is a scalar matrix
- [ ] The diagonal entries of $\displaystyle A$ are equal

:::

::: {.callout-note title="Solution" collapse=true}

Let:

$$
\begin{equation*}
A=\begin{bmatrix}
a & b\\
c & d
\end{bmatrix}
\end{equation*}
$$

The characteristic equation is given by:

$$
\begin{equation*}
( a-\lambda )( d-\lambda ) -bc=0
\end{equation*}
$$

Simplifying:

$$
\begin{equation*}
\lambda ^{2} -( a+d) \lambda +ad-bc=0
\end{equation*}
$$

For two equal eigenvalues, the discriminant of the quadratic equation has to be zero:

$$
\begin{equation*}
( a+d)^{2} -4( ad-bc) =0
\end{equation*}
$$

This simplifies to:

$$
\begin{equation*}
( a-d)^{2} +4bc=0
\end{equation*}
$$

Alternatively, we can express the characteristic equation as:

$$
\begin{equation*}
\lambda ^{2} -t\lambda +d=0
\end{equation*}
$$

For equal real roots:

$$
\begin{equation*}
t^{2} =4d
\end{equation*}
$$

We now see that $\displaystyle d\geqslant 0$. $\displaystyle A$ needn't be a scalar matrix, nor is it necessary for the diagonal entries to be equal. A quick counter-example that addresses both cases: $\displaystyle \begin{bmatrix}
2 & -1\\
1 & 0
\end{bmatrix}$.

:::
