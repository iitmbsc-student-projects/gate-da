---
title: Question-19
pagetitle: Question-19
order: 19
categories: [projection]
---

Let $P$ be the projection matrix that projects vectors in $\mathbb{R}^{4}$ onto the line $(1, 2, -1, 1)$. Compute the trace of $P$.

::: {.callout-note title="Answer" collapse=true}

$1$

:::

::: {.callout-note title="Solution" collapse=true}

$\displaystyle P$ is a projection transformation for $\displaystyle \mathbb{R}^{n}$ onto the vector $\displaystyle v=( v_{1} ,\cdots ,v_{n})$. Then for any $\displaystyle x\in \mathbb{R}^{n}$:


$$
\begin{aligned}
P( x) & =\frac{x^{T} v}{v^{T} v} v
\end{aligned}
$$


The matrix corresponding to this transformation is given by:


$$
P=\begin{bmatrix}
| &  & |\\
P( e_{1}) & \cdots  & P( e_{n})\\
| &  & |
\end{bmatrix} =\frac{1}{v^{T} v}\begin{bmatrix}
| &  & |\\
v_{1} v & \cdots  & v_{n} v\\
| &  & |
\end{bmatrix} =\frac{1}{v^{T} v} vv^{T}
$$

We have $\displaystyle P_{ii} =\frac{v_{i}^{2}}{v^{T} v}$. Summing this from $\displaystyle i=1$ to $\displaystyle i=n$, we get the trace as $\displaystyle 1$.

:::