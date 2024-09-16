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

::: {.callout-note title="Answer" collapse=true}

Spectral theorem.

:::

::: {.callout-note title="Answer" collapse=true}

- [ ] $P$ is true, but $Q$ is false.
- [ ] $P$ is false, but $Q$ is true.
- [x] Both $P$ and $Q$ are true.
- [ ] Both $P$ and $Q$ are false.

:::

::: {.callout-note title="Solution" collapse=true}

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
