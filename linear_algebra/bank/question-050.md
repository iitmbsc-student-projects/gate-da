---
title: Question-50
pagetitle: Question-50
order: 50
categories: [singular value decomposition]
---

Let $\displaystyle A$ be a real invertible matrix whose SVD is given by:

\begin{equation*}
A=U\Sigma V^{T}
\end{equation*}

- [ ] $\displaystyle A^{-1} =U\Sigma ^{-1} V^{T}$
- [ ] $\displaystyle A^{-1} =V\Sigma U^{T}$
- [ ] $\displaystyle A^{-1} =V\Sigma ^{-1} U^{T}$
- [ ] $\displaystyle A^{-1} =U^{-1} \Sigma ^{-1} V^{-1}$

::: {.callout-note title="Answer" collapse=true}

- [ ] $\displaystyle A^{-1} =U\Sigma ^{-1} V^{T}$
- [ ] $\displaystyle A^{-1} =V\Sigma U^{T}$
- [x] $\displaystyle A^{-1} =V\Sigma ^{-1} U^{T}$
- [ ] $\displaystyle A^{-1} =U^{-1} \Sigma ^{-1} V^{-1}$

:::

::: {.callout-note title="Solution" collapse=true}

Since $\displaystyle A$ is invertible, it has full rank. All three matrices, $\displaystyle U,\Sigma ,V$, are square and invertible. $\displaystyle \Sigma$ in particular is diagonal with non-zero entries on the diagonal. Recall that $\displaystyle U$ and $\displaystyle V$ are orthogonal. It follows that the transpose is the inverse for these two matrices. With all this the inverse becomes:

\begin{equation*}
A^{-1} =V\Sigma ^{-1} U^{T}
\end{equation*}
We can check this:

\begin{equation*}
AA^{-1} =\left( U\Sigma V^{T}\right)\left( V\Sigma ^{-1} U^{T}\right) =I
\end{equation*}

:::