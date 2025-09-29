---
title: Question-93
pagetitle: Question-93
order: 93
categories: [linear independence]
---

Let $\displaystyle S=\{v_{1} ,\cdots ,v_{n}\}$ be a finite set of vectors in a vector space. Is the following statement true or false?

$\displaystyle S$ is linearly dependent if and only if $\displaystyle v_{i}$ is in the span of $\displaystyle S-\{v_{i}\}$ for every $\displaystyle v_{i} \in S$.


- [ ] True
- [ ] False

::: {.callout-note title="Answer" collapse=true}

- [ ] True
- [x] False

:::

::: {.callout-note title="Solution" collapse=true}

This is false. It is sufficient if there is at least one vector in $\displaystyle S$ that is in the span of the remaining. The condition that every vector in $\displaystyle S$ should be in the span of the remaining vectors is too hard a constraint for linear dependence.

As a counter-example, consider:

$$
\begin{equation*}
S=\{( 1,0,0,0) ,( 0,1,0,0) ,( 1,1,0,0) ,( 0,0,0,1)\}
\end{equation*}
$$

$\displaystyle S$ is linearly dependent, but $\displaystyle ( 0,0,0,1)$ is not in the span of the first three vectors.

::: {.callout-note}

The proper definition is:

> A finite set of vectors $S = \{v_1, \cdots, v_n\}$ is linearly dependent if there is at least one vector in $S$ that belongs to the span of the remaining vectors.

This definition of linear dependence continues to hold if the set has only one element. If $S = \{0\}$, then $0$ is in the span of $S - \{0\} = \phi$. Recall that the span of the empty set is the trivial subspace $\{0\}$.

:::

:::
