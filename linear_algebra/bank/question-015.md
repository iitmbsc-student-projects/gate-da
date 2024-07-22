---
title: Question-15
pagetitle: Question-15
order: 15
categories: [triangular matrix, vector space]
---

Let $\mathbb{R}^{n \times n}$ be the vector space of $n \times n$ matrices with the usual matrix addition and scalar multiplication defined on matrices. Let $\mathcal{L}$ be the subspace of all $n \times n$ lower triangular matrices and $\mathcal{U}$ be the subspace of all $n \times n$ upper triangular matrices. Select all true statements.

- [ ] $\mathcal{L} \cap \mathcal{U}$ contains just the zero matrix.
- [ ] The dimension of $\mathcal{L}$ is $\cfrac{n(n + 1)}{2}$
- [ ] The dimension of $\mathcal{U}$ is $n^2$
- [ ] $\mathcal{L}$ and $\mathcal{U}$ are isomorhpic subspaces of $\mathbb{R}^{n \times n}$

::: {.callout-note title="Answer" collapse=true}

- [ ] $\mathcal{L} \cap \mathcal{U}$ contains just the zero matrix.
- [x] The dimension of $\mathcal{L}$ is $\cfrac{n(n + 1)}{2}$
- [ ] The dimension of $\mathcal{U}$ is $n^2$
- [x] $\mathcal{L}$ and $\mathcal{U}$ are isomorhpic subspaces of $\mathbb{R}^{n \times n}$

:::

::: {.callout-note title="Solution" collapse=true} 

In a lower(upper) triangular matrix, $\cfrac{n(n + 1)}{2}$ elements can be non-zero and the rest have to be zero. The dimension of the space follows. Every upper triangular matrix in $\mathcal{U}$ can be mapped to its transpose in $\mathcal{L}$. This specifies an isomorphism between the two spaces. Every diagonal matrix is both upper triangular and lower triangular. Hence $\mathcal{L} \cap \mathcal{U}$ is actually more numerous than just the singleton set. In fact, the intersection of these two subspaces is the subspace made up of all $n \times n$ diagonal matrices.

:::