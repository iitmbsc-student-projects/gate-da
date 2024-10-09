---
title: Question-69
pagetitle: Question-69
order: 69
categories: [eigenvalue]
---

Let $\displaystyle A$ be a real square matrix of order $\displaystyle 5$ such that $\displaystyle A^{2} =0$. Find the number of distinct eigenvalues of $\displaystyle A$.

::: {.callout-note title="Hint" collapse=true}

Use the eigenvalue equation.

:::

::: {.callout-note title="Answer" collapse=true}

$1$

:::

::: {.callout-note title="Solution" collapse=true}


Let $\displaystyle ( \lambda ,v)$ be an eigenpair of $\displaystyle A$. Then:

$$
\begin{equation*}
\begin{aligned}
Av & =\lambda v
\end{aligned}
\end{equation*}
$$

Multiplying both sides by $\displaystyle A$:

$$
\begin{equation*}
\begin{aligned}
A^{2} v & =A( \lambda v)\\
 & =\lambda ( Av)\\
 & =\lambda ^{2} v
\end{aligned}
\end{equation*}
$$

The LHS is the zero vector since $\displaystyle A^{2} =0$. This gives us:

$$
\begin{equation*}
\lambda ^{2} v=0
\end{equation*}
$$

Note that the zero on the RHS is the zero vector. $\displaystyle v$ can't be zero since its an eigenvector. This forces $\displaystyle \lambda =0$. Therefore the number of distinct eigenvalues of $\displaystyle A$ is equal to $\displaystyle 1$.

:::