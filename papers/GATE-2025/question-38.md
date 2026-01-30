---
title: Question-38
pagetitle: Question-38
order: 38
categories: [singular values, definiteness, invertibility, DA-2025]
---

Let $\{x_{1} ,\cdots ,x_{n}\}$ be a set of linearly independent vectors in $\mathbb{R}^{n}$. Let the $( i,j)$-th element of matrix $A\in \mathbb{R}^{n\times n}$ be given by $A_{ij} =x_{i}^{T} x_{j} ,1\leqslant i,j\leqslant n$. Which one of the following statements is correct?

 - [ ] $A$ is invertible
 - [ ] $0$ is a singular value of $A$
 - [ ] Determinant of $A$ is $0$
 - [ ] $z^{T} Az=0$ for some non-zero $z\in \mathbb{R}^{n}$

::: {.callout-note title="Answer" collapse=true}

 - [x] $A$ is invertible
 - [ ] $0$ is a singular value of $A$
 - [ ] Determinant of $A$ is $0$
 - [ ] $z^{T} Az=0$ for some non-zero $z\in \mathbb{R}^{n}$

:::

::: {.callout-note title="Solution" collapse=true}

We see that $A$ is a collection of the pair-wise dot product between vectors in the linearly independent set. Introducing a matrix $B$ whose columns are the linearly independent vectors, we have:

$$
B=\begin{bmatrix}
| &  & |\\
x_{1} & \cdots  & x_{n}\\
| &  & |
\end{bmatrix} \Longrightarrow A=B^{T} B
$$

We see that $B$ and $B^{T}$ are invertible. It follows that $A$ is invertible. To see why the other options are false:

 - $0$ cannot be a singular value of an invertible matrix. Recall that the number of non-zero singular values (including multiplicity) is equal to the rank of a matrix. So an invertible matrix cannot have any zero singular values.

 - The determinant of an invertible matrix is non-zero.
 
 - $A=B^{T} B$ is a positive definite matrix. To see this, consider any $z\neq 0$:

$$
\begin{aligned}
z^{T} Az & =z^{T} B^{T} Bz\\
 & =( Bz)^{T}( Bz)\\
 & =||Bz||^{2}\\
 &  >0
\end{aligned}
$$

To see how we arrived at the last step, since $B$ is invertible, $Bz=0$ if and only if $z=0$. To put it in another way, $Bz$ is non-zero whenever $z\neq 0$.

:::