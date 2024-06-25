---
title: Question-49
pagetitle: Question-49
order: 49
categories: [linear algebra,projection matrix,DA-2024]
---

Let $\mathbb{R}$ be the set of real numbers, $U$ be a subspace of $\mathbb{R}^3$ and $\mathbf{M} \in \mathbb{R}^{3 \times 3}$ be the matrix corresponding to the projection on to the subspace $U$. Which of the following statements is/are true?

- [ ] If $U$ is a 1-dimensional subspace of $\mathbb{R}^3$, then the null space of $\mathbf{M}$ is a one-dimensional subspace.
- [ ] If $U$ is a 2-dimensional subspace of $\mathbb{R}^3$, then the null space of $\mathbf{M}$ is a one-dimensional subspace.
- [ ] $\mathbf{M}^2 = \mathbf{M}$
- [ ] $\mathbf{M}^3 = \mathbf{M}$

::: {.callout-note title="Answer" collapse=true}

- [ ] If $U$ is a 1-dimensional subspace of $\mathbb{R}^3$, then the null space of $\mathbf{M}$ is a one-dimensional subspace.
- [x] If $U$ is a 2-dimensional subspace of $\mathbb{R}^3$, then the null space of $\mathbf{M}$ is a one-dimensional subspace.
- [x] $\mathbf{M}^2 = \mathbf{M}$
- [x] $\mathbf{M}^3 = \mathbf{M}$

:::

::: {.callout-note title="Solution" collapse=true}

- Since $\mathbf{M}$ is a projection matrix, its column space is $U$ and its null space is $U^{\perp}$. If the dimension of $U$ is $k$, the dimension of the null space is $3 - k$.
- For a projection matrix, $\mathbf{M}^{2} = \mathbf{M}$. It follows that $\mathbf{M}^{3} = \mathbf{M}$.

:::