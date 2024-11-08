---
title: Question-89
pagetitle: Question-89
order: 89
categories: [orthogonal matrix, eigenvalue, eigenvector]
---

Let $\displaystyle A$ be an orthogonal matrix. Find the number of true statements.

- $\displaystyle A$ cannot have a zero eigenvalue.
- If $\displaystyle \lambda $ is an eigenvalue of $\displaystyle A$, $\displaystyle \frac{1}{\lambda }$ is an eigenvalue of $\displaystyle A^{T}$.
- If $\displaystyle \lambda $ is a real eigenvalue of $\displaystyle A$, then $\displaystyle |\lambda |=1$.

::: {.callout-note title="Answer" collapse=true}

$3$

:::

::: {.callout-note title="Solution" collapse=true}

For an orthogonal matrix, we have:

$$
\begin{equation*}
A^{T} A=AA^{T} =I
\end{equation*}
$$

### Statement-1

We see that $\displaystyle A$ is invertible with its inverse being $\displaystyle A^{T}$. So it doesn't have a zero eigenvalue.

### Statement-2

Let $\displaystyle ( \lambda ,v)$ be an eigenpair of $\displaystyle A$. Then:

$$
\begin{equation*}
\begin{aligned}
Av & =\lambda v\\
A^{T} Av & =\lambda A^{T} v\\
\lambda A^{T} v & =v
\end{aligned}
\end{equation*}
$$

Now, we can divide by $\displaystyle \lambda $ only if $\displaystyle \lambda \neq 0$, which is the case as shown above. Therefore, we divide both sides by $\displaystyle \lambda $ to get:

$$
\begin{equation*}
\begin{aligned}
A^{T} v & =\frac{1}{\lambda } v
\end{aligned}
\end{equation*}
$$

This shows that $\displaystyle \frac{1}{\lambda }$ is an eigenvalue of $\displaystyle A^{T}$.

### Statement-3

If $\displaystyle ( \lambda ,v)$ is an eigenpair of $\displaystyle A$, consider:

$$
\begin{equation*}
\begin{aligned}
||Av||^{2} & =( Av)^{T}( Av)\\
 & =v^{T} A^{T} Av\\
 & =v^{T} v\\
 & =||v||^{2}
\end{aligned}
\end{equation*}
$$

Since $\displaystyle Av=\lambda v$, $\displaystyle ||Av||^{2} =\lambda ^{2} ||v||^{2}$. It follows that $\displaystyle |\lambda |=1$.

:::