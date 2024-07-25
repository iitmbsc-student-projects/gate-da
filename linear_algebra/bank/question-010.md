---
title: Question-10
pagetitle: Question-10
order: 10
categories: [rank]
---

Let $A$ and $B$ be two matrices such that $AB$ is defined. Select the most appropriate statement.

- [ ] $\text{rank}(AB) = \text{rank}(A) + \text{rank}(B)$
- [ ] $\text{rank}(AB) = \text{rank}(A) \cdot \text{rank}(B)$
- [ ] $\text{rank}(AB) = \max(\text{rank}(A), \text{rank}(B))$
- [ ] $\text{rank}(AB) = \min(\text{rank}(A), \text{rank}(B))$
- [ ] $\text{rank}(AB) \leq \max(\text{rank}(A), \text{rank}(B))$
- [ ] $\text{rank}(AB) \leq \min(\text{rank}(A), \text{rank}(B))$

::: {.callout-note title="Answer" collapse=true}

- [ ] $\text{rank}(AB) = \text{rank}(A) + \text{rank}(B)$
- [ ] $\text{rank}(AB) = \text{rank}(A) \cdot \text{rank}(B)$
- [ ] $\text{rank}(AB) = \max(\text{rank}(A), \text{rank}(B))$
- [ ] $\text{rank}(AB) = \min(\text{rank}(A), \text{rank}(B))$
- [ ] $\text{rank}(AB) \leq \max(\text{rank}(A), \text{rank}(B))$
- [x] $\text{rank}(AB) \leq \min(\text{rank}(A), \text{rank}(B))$

:::

::: {.callout-note title="Solution" collapse=true}

Matrix multiplication doesn't increase the rank. To see why note that we can view matrix multiplication in the following way. If $B = \begin{bmatrix}b_1 & \cdots & b_n\end{bmatrix}$ has $n$ columns, then $AB$ can be written as:

$$
AB = \begin{bmatrix}
Ab_1 & \cdots & Ab_n
\end{bmatrix}
$$
We see that the $i^{th}$ column of $AB$ is a linear combination of the columns of $A$, with the multipliers coming from the $i^{th}$ column of $b$. Thus the column space of $AB$ is a subspace of the column space of $A$. It follows that $\text{rank}(AB) \leqslant \text{rank}(A)$.

We could also view matrix multiplication in another way. If $A = \begin{bmatrix}r_1^T\\\vdots\\r_m^T\end{bmatrix}$ has $m$ rows, then $AB$ can be written as:
$$
AB = \begin{bmatrix}
r_1^TB\\
\vdots\\
r_m^TB
\end{bmatrix}
$$
We see that the $i^{th}$ row of $AB$ is a linear combination of the rows of $B$, with the multipliers coming form the $i^{th}$ row of $A$. Thus the row space of $AB$ is a subspace of the row space of $B$.  It follows that $\text{rank}(AB) \leqslant \text{rank}(B)$.

Combining the two inequalities, we have:
$$
\text{rank}(AB) \leqslant \min(\text{rank}(A), \text{rank}(B))
$$

Thus if we start with a matrix $A$ and multiply it by some matrix $B$, the rank of the resulting matrix cannot be more than the rank of $A$.

:::