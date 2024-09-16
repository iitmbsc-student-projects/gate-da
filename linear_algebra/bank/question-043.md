---
title: Question-43
pagetitle: Question-43
order: 43
categories: [eigenvalue and eigenvector, quadratic form]
---

Consider the following matrix:

\begin{equation*}
\begin{bmatrix}
1 & b\\
b & 9
\end{bmatrix}
\end{equation*}

Under what conditions is this matrix positive semi-definite?

- [ ] $b \in (\infty, -3] \cup [3, \infty)$
- [ ] $b \in \mathbb{R}$
- [ ] $b \geq 0$
- [ ] $b \in [-3, 3]$

::: {.callout-note title="Hint" collapse=true}

Characteristic polynomial

:::

::: {.callout-note title="Answer" collapse=true}

- [ ] $b \in (\infty, -3] \cup [3, \infty)$
- [ ] $b \in \mathbb{R}$
- [ ] $b \geq 0$
- [x] $b \in [-3, 3]$

:::

::: {.callout-note title="Solution" collapse=true}

For the matrix to be positive semi-definite, all its eigenvalues should be non-negative. This happens when $\displaystyle 9-b^{2} \geqslant 0\Longrightarrow b^{2} \leqslant 9\Longrightarrow b\in [ -3,3]$. In general:

::: {.callout-note title="Note" collapse=true}

Consider:

\begin{equation*}
A=\begin{bmatrix}
a & b\\
b & c
\end{bmatrix}
\end{equation*}

$\displaystyle A$ is positive semi-definite if and only if $\displaystyle a\geqslant 0$ and $\displaystyle ac-b^{2} \geqslant 0$. This can be derived as follows:

\begin{equation*}
\begin{aligned}
|A-\lambda I| & =( a-\lambda )( c-\lambda ) -b^{2}\\
 & =\lambda ^{2} -( a+c) \lambda +ac-b^{2}
\end{aligned}
\end{equation*}

For the roots to be non-negative, their sum and product have to be non-negative:

\begin{equation*}
a+c\geqslant 0\ \ \ \ \ \text{and} \ \ \ \ \ ac-b^{2} \geqslant 0
\end{equation*}

This can happen only if $\displaystyle a\geqslant 0$ and $\displaystyle c\geqslant 0$. When clubbed with the second condition, it is enough to have just $\displaystyle a\geqslant 0$ and $\displaystyle ac-b^{2} \geqslant 0$.

:::

:::
