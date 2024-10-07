---
title: Question-44
pagetitle: Question-44
order: 44
categories: [eigenvalue and eigenvector, quadratic form]
---

Let $\displaystyle A$ be a positive definite matrix.

- Statement-$P$: $\displaystyle A^{2}$ is positive definite.
- Statement-$Q$: $\displaystyle A^{-1}$ is positive definite.

Which of these options is correct?

- [ ] $P$ is true, but $Q$ is false.
- [ ] $P$ is false, but $Q$ is true.
- [ ] Both $P$ and $Q$ are true.
- [ ] Both $P$ and $Q$ are false.

::: {.callout-note title="Hint" collapse=true}

- Spectral theorem
- Eigenvalue equation

:::

::: {.callout-note title="Answer" collapse=true}

- [ ] $P$ is true, but $Q$ is false.
- [ ] $P$ is false, but $Q$ is true.
- [x] Both $P$ and $Q$ are true.
- [ ] Both $P$ and $Q$ are false.

:::

::: {.callout-note title="Solutions" collapse=true}

::: {.panel-tabset}

## Solution-1

Thanks to Vivek, Sherry and Aniruddha for this solution.

This solution uses the result that a matrix is positive definite if and only if all its eigenvalues are positive. Since $\displaystyle A$ is positive definite, let $\displaystyle ( \lambda _{i} ,v_{i})$ be the $i^{th}$ eigenpair of $\displaystyle A$ with $\lambda_i > 0$, for $\displaystyle i=1,\cdots ,n$. Pre-multiplying both sides by $A$:
$$
\begin{equation*}
\begin{aligned}
Av_{i} & =\lambda v_{i}\\
A^{2} v_{i} & =\lambda _{i}^{2} v_{i}
\end{aligned}
\end{equation*}
$$

We see that $\displaystyle \left( \lambda _{i}^{2} ,v_{i}\right)$ is an eigenpair of $\displaystyle A^{2}$ for $\displaystyle i=1,\cdots ,n$. It follows that $\displaystyle \left\{\lambda _{1}^{2} ,\cdots ,\lambda _{n}^{2}\right\}$ is the set of eigenvalues of $\displaystyle A^{2}$, where each entry is strictly positive. Therefore, $\displaystyle A^{2}$ is also positive definite.

Since $\displaystyle A$ has $\displaystyle n$ positive eigenvalues, its rank is $\displaystyle n$ and it is invertible. Pre-multiplying both sides by $A^{-1}$ and dividing both sides by $\lambda_i$ (we can do this since $\lambda_i > 0$:

$$
\begin{equation*}
\begin{aligned}
Av_{i} & =\lambda v_{i}\\
A^{-1} v_{i} & =\frac{1}{\lambda _{i}} v_{i}
\end{aligned}
\end{equation*}
$$

We see that $\displaystyle \left(\frac{1}{\lambda _{i}} ,v_{i}\right)$ is an eigenpair of $\displaystyle A^{-1}$. The set of eigenpairs of $\displaystyle A^{-1}$ is given by $\displaystyle \left\{\frac{1}{\lambda _{1}} ,\cdots ,\frac{1}{\lambda _{n}}\right\}$. It is clear that all these are positive. Therefore, $\displaystyle A^{-1}$ is also positive definite.

## Solution-2

Since $\displaystyle A$ is p.d., we can decompose $\displaystyle A$ as:

$$
\begin{equation*}
A=Q\Sigma Q^{T}
\end{equation*}
$$

where $\displaystyle Q$ is an orthogonal matrix and $\Sigma$ is a diagonal matrix with positive entries on the diagonal. It follows that:

$$
\begin{equation*}
\begin{aligned}
A^{2} & =Q\Sigma ^{2} Q^{T}\\
A^{-1} & =Q\Sigma ^{-1} Q^{T}
\end{aligned}
\end{equation*}
$$

We see that both these matrices are positive definite.

:::

:::
