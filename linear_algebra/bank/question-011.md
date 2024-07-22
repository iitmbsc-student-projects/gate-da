---
title: Question-11
pagetitle: Question-11
order: 11
categories: [rank, similarity]
---

$A$ and $B$ are two square matrices. Select all correct options.

- [ ] If $A$ and $B$ are similar then they have the same rank.
- [ ] If $A$ and $B$ have the same rank then they are similar.
- [ ] If $A$ and $B$ have the same trace, then $A$ and $B$ are similar.
- [ ] Any two diagonal matrices are similar.

::: {.callout-note title="Answer" collapse=true}

- [x] If $A$ and $B$ are similar then they have the same rank.
- [ ] If $A$ and $B$ have the same rank then they are similar.
- [ ] If $A$ and $B$ have the same trace, then $A$ and $B$ are similar.
- [ ] Any two diagonal matrices are similar.

:::

::: {.callout-note title="Solution" collapse=true}

If $A$ and $B$ are similar, then we have $B = P^{-1} A P$ for some invertible matrix $P$. Multiplying by an invertible matrix doesn't change the rank, hence the rank of $A$ and $B$ are the same. Alternatively, we can view $A$ and $B$ as matrix representations of a common linear map $T$. The rank of $A$ is equal to the rank of $T$ which is in turn equal to the rank of $B$.

<u>Counter example for option-2</u>
$$
A = 3I, B = 5I
$$
$A$ and $B$ have the same rank but are not similar. The only matrix similar to a scalar matrix is the matrix itself.

<u>Counter example for option-3</u>
$$
A = \begin{bmatrix}
2 & 0\\
0 & 0
\end{bmatrix}, B = \begin{bmatrix}
1 & 0\\
0 & 1
\end{bmatrix}
$$
$A$ and $B$ have the same trace but are not similar. This serves as a counter example for option-4 as well.

:::