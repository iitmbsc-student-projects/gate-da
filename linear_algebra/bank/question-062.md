---
title: Question-62
pagetitle: Question-62
order: 62
categories: [subspace]
---

Let $\displaystyle S_{1}$ and $\displaystyle S_{2}$ be two subspaces of $\displaystyle \mathbb{R}^{n}$. Select all true statements.

- [ ] If $\displaystyle S_{1} \subseteq S_{2}$, then $\displaystyle \text{dim}( S_{1}) \leqslant \text{dim}( S_{2})$
- [ ] If $\displaystyle \text{dim}( S_{1}) \leqslant \text{dim}( S_{2})$, then $\displaystyle S_{1} \subseteq S_{2}$
- [ ] If $\displaystyle \text{dim}( S_{1}) =\text{dim}( S_{2})$, then $\displaystyle S_{1} =S_{2}$
- [ ] If $\displaystyle S_{1} \subseteq S_{2}$ and $\displaystyle \text{dim}( S_{1}) =\text{dim}( S_{2})$, then $\displaystyle S_{1} =S_{2}$

::: {.callout-note title="Answer" collapse=true}

- [x] If $\displaystyle S_{1} \subseteq S_{2}$, then $\displaystyle \text{dim}( S_{1}) \leqslant \text{dim}( S_{2})$
- [ ] If $\displaystyle \text{dim}( S_{1}) \leqslant \text{dim}( S_{2})$, then $\displaystyle S_{1} \subseteq S_{2}$
- [ ] If $\displaystyle \text{dim}( S_{1}) =\text{dim}( S_{2})$, then $\displaystyle S_{1} =S_{2}$
- [x] If $\displaystyle S_{1} \subseteq S_{2}$ and $\displaystyle \text{dim}( S_{1}) =\text{dim}( S_{2})$, then $\displaystyle S_{1} =S_{2}$

:::

::: {.callout-note title="Solution" collapse=true}


#### Option-1: $\displaystyle S_{1} \subseteq S_{2}$

Let $\displaystyle B_{1}$ be a basis for $\displaystyle S_{1}$. We can extend $\displaystyle B_{1}$ to form a basis $\displaystyle B_{2}$ for $\displaystyle S_{2}$. $\displaystyle |B_{1} |\leqslant |B_{2} |$, from which it follows that $\displaystyle \text{dim}( S_{1}) \leqslant \text{dim}( S_{2})$.

#### Option-2: $\displaystyle \text{dim}( S_{1}) \leqslant \text{dim}( S_{2})$

As a counter example, choose $\displaystyle n=2$, $\displaystyle S_{1} =\text{span}\{( 1,0)\}$ and $\displaystyle S_{2} =\text{span}\{( 0,1)\}$. This choice satisfies the premise. Clearly, $\displaystyle S_{1} \not \subseteq S_{2}$.

#### Option-3

The previous argument holds here as well

#### Option-4

Let $\displaystyle B$ be a basis of $\displaystyle S_{1}$. We have $\displaystyle B\subset S_{1} \subseteq S_{2}$. Since $B$ is a basis of $S_1$, it is linearly independent. This means that $\displaystyle B$ is a linearly independent subset of $S_2$. Since the dimensions of $S_1$ and $S_2$ are equal, we also know that $|B| = \text{dim}(S_2)$. Every linearly independent subset of a vector space that has the same number of elements as its dimension is a basis. Therefore, $\displaystyle B$ is also a basis of $\displaystyle S_{2}$. It follows that $\displaystyle S_{1} =S_{2}$ since $\text{span}(B) = S_1 = S_2$.

:::
