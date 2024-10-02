---
title: Question-55
pagetitle: Question-55
order: 55
categories: [matrix]
---

If $\displaystyle A$ is a square matrix of order $\displaystyle 2$ whose trace is $\displaystyle 0$, which of the following are true?

- [ ] $\displaystyle A^{2}$ is the zero matrix.
- [ ] $\displaystyle A^{2}$ is the identity matrix.
- [ ] $\displaystyle A^{2}$ is a diagonal matrix.
- [ ] $\displaystyle A^{2}$ is a scalar matrix.

::: {.callout-note title="Hint" collapse=true}

$$
\begin{equation*}
A=\begin{bmatrix}
a & b\\
c & -a
\end{bmatrix}
\end{equation*}
$$

:::

::: {.callout-note title="Answer" collapse=true}

- [ ] $\displaystyle A^{2}$ is the zero matrix.
- [ ] $\displaystyle A^{2}$ is the identity matrix.
- [x] $\displaystyle A^{2}$ is a diagonal matrix.
- [x] $\displaystyle A^{2}$ is a scalar matrix.

:::

::: {.callout-note title="Solution" collapse=true}

We have:

$$
\begin{equation*}
A=\begin{bmatrix}
a & b\\
c & -a
\end{bmatrix}
\end{equation*}
$$

From this, we see that:

$$
\begin{equation*}
A^{2} =\begin{bmatrix}
a^{2} +bc & 0\\
0 & a^{2} +bc
\end{bmatrix} =\left( a^{2} +bc\right) I
\end{equation*}
$$

This is a scalar matrix. Since every scalar matrix is also a diagonal matrix, option-(c) is also correct.

:::
