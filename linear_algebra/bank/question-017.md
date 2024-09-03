---
title: Question-17
pagetitle: Question-17
order: 17
categories: [matrix subspaces]
---

Does there exist a matrix whose row space contains $(1, 2, 1)$ and whose nullspace contains $(1, -2, 1)$?

- [ ] Yes
- [ ] No

::: {.callout-note title="Answer" collapse=true}

- [ ] Yes
- [x] No

:::

::: {.callout-note title="Solution" collapse=true} 

The row space is orthogonal to the null space. To see why:

-  Let $\displaystyle A=\begin{bmatrix}- & r_{1}^{T} & - \\ & \vdots  & \\-  & r_{n}^{T}&-\end{bmatrix}$ 

-  Let $\displaystyle x\in \mathcal{N}( A) \Longrightarrow Ax=0$ 

-  Do this component wise. $\displaystyle r{_{i}}^{T} x=0$ for $\displaystyle 1\leqslant i\leqslant n$ implying that $\displaystyle x$ is perpendicular to every row.

-  Therefore $\displaystyle x$ is perpendicular to the row space of $\displaystyle A$. 

-  It follows the row space is orthogonal to the null space of $\displaystyle A$.

:::