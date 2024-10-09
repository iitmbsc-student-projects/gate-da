---
title: Question-63
pagetitle: Question-63
order: 63
categories: [rank, nullity]
---

Let $\displaystyle A,B,C$ be three matrices such that $\displaystyle A=BC$, with $\displaystyle B$ having dimensions $\displaystyle 4\times 3$ and $\displaystyle C$ having dimensions $\displaystyle 3\times 4$. Which of the following statements are true?

- [ ] $\displaystyle A$ is invertible
- [ ] $\displaystyle A$ is not invertible
- [ ] The nullity of $\displaystyle A$ is at least $\displaystyle 1$.
- [ ] The nullity of $\displaystyle A$ is at most $\displaystyle 1$.


::: {.callout-note title="Answer" collapse=true}

- [ ] $\displaystyle A$ is invertible
- [x] $\displaystyle A$ is not invertible
- [x] The nullity of $\displaystyle A$ is at least $\displaystyle 1$.
- [ ] The nullity of $\displaystyle A$ is at most $\displaystyle 1$.

:::

::: {.callout-note title="Solution" collapse=true}

The rank of both $\displaystyle B$ and $\displaystyle C$ is at most $\displaystyle 3$. Therefore, the rank of $\displaystyle A=BC$ is at most $\displaystyle 3$. From this it follows that the nullity of $\displaystyle A$ is at least $\displaystyle 1$. This rests on the following fact:

::: {.callout-note title="Result"}
If $\displaystyle A=BC$, the rank of $\displaystyle A$ is at most $\displaystyle \min\left(\text{rank}( B) ,\text{rank}( C)\right)$. 
:::

::: {.callout-note title="Proof" collapse=true}

Let $\displaystyle B$ be of shape $\displaystyle m\times p$ and $\displaystyle C$ be of shape $\displaystyle p\times n$. We can express $\displaystyle A$ as

$$
\begin{equation*}
A=\begin{bmatrix}
| &  & |\\
Bc_{1} & \cdots  & Bc_{n}\\
| &  & |
\end{bmatrix}
\end{equation*}
$$

$\displaystyle Bc_{i}$ is a linear combination of the columns of $\displaystyle B$. The span of the columns of $\displaystyle A$, which is the column space of $\displaystyle A$, is therefore a subset of the column space of $\displaystyle B$. Thus, we have $\displaystyle \text{rank}( A) \leqslant \text{rank}( B)$.

We also have:

$$
\begin{equation*}
A=\begin{bmatrix}
- & b_{1}^{T} C & -\\
 & \vdots  & \\
- & b_{m}^{T} C & -
\end{bmatrix}
\end{equation*}
$$

$\displaystyle b_{i}^{T} C$ is a linear combination of the rows of $\displaystyle C$. The span of the rows of $\displaystyle A$, which is the rowspace of $\displaystyle A$, is therefore a subset of the row space of $\displaystyle C$. Thus, we have $\displaystyle \text{rank}( A) \leqslant \text{rank}( C)$. Here, we have used the fact that column rank equals the row rank.

Combining the two results, we get:

$$
\begin{equation*}
\text{rank}( A) \leqslant \min\left(\text{rank}( B) ,\text{rank}( C)\right)
\end{equation*}
$$
:::

:::
