---
title: Question-52
pagetitle: Question-52
order: 52
categories: [orthogonal matrix, orthonormal basis, eigenvalues, DA-2025]
---

An $n\times n$ matrix with real entries satisfies the property $||Ax||^{2} =||x||^{2}$, for all $x\in \mathbb{R}^{n}$, where $||\cdot ||$ denotes the Euclidean norm. Which of the following statements is/are ALWAYS correct?

 - [ ] $A$ must be orthogonal.

 - [ ] $A=I$, where $I$ denotes the identity matrix, is the only solution.

 - [ ] The eigenvalues of $A$ are either $+1$ or $-1$.

 - [ ] $A$ has full rank.

::: {.callout-note title="Answer" collapse=true}

 - [x] $A$ must be orthogonal.

 - [ ] $A=I$, where $I$ denotes the identity matrix, is the only solution.

 - [ ] The eigenvalues of $A$ are either $+1$ or $-1$.

 - [x] $A$ has full rank.

:::

::: {.callout-note title="Solution" collapse=true}

We take up the first option which is true.

To see why $A$ is orthogonal, let $A=\begin{bmatrix}
| &  & |\\
v_{1} & \cdots  & v_{n}\\
| &  & |
\end{bmatrix}$. If $\{e_{1} ,\cdots ,e_{n}\}$ is the standard ordered basis for $\mathbb{R}^{n}$, then $Ae_{i} =v_{i}$. Also, since $||Ae_{i} ||^{2} =||e_{i} ||^{2} =1$, we have $||v_{i} ||^{2} =1$. This shows that $v_{i}$ is a unit-norm vector.

Next, let $u=a_{1} e_{1} +\cdots +a_{n} e_{n}$ be any vector in $\mathbb{R}^{n}$, then, 

$$
Au=a_{1} v_{1} +\cdots +a_{n} v_{n}$
$$

Now:

$$
\begin{aligned}
||Au||^{2} & =a_{1}^{2} +\cdots +a_{n}^{2} +2\sum\limits _{i=1}^{n}\sum\limits _{j=i+1}^{n} a_{i} a_{j} v_{i}^{T} v_{j}
\end{aligned}
$$
 Since $||Au||^{2} =||u||^{2}$, we have:

$$
\sum\limits _{i=1}^{n}\sum\limits _{j=i+1}^{n} a_{i} a_{j} v_{i}^{T} v_{j} =0
$$

This is true for every $u\in \mathbb{R}^{n}$. Setting $a_{i} =a_{j} =1$ and $a_{k} =0$ for all other components, we get $v_{i}^{T} v_{j} =0$. This shows that $\{v_{1} ,\cdots ,v_{n}\}$ is an orthogonal set. Together with the earlier result, we see that the columns of $A$ are orthonormal. Therefore, $A$ is an orthogonal matrix.

For the other three options:

- It follows that $A$ is invertible. In fact, $A^{-1} =A^{T}$ and $A$ has full rank. 

- $A=-I$ is another orthogonal matrix. So this is a counter-example for option-(B).

- Finally, an orthogonal matrix has complex eigenvalues whose magnitude is always $1$. If the eigenvalues are real, then it is indeed true that they can only be $1$ or $-1$. An example of an orthogonal matrix that doesn't have real eigenvalues is the following rotation matrix:

$$
A=\frac{1}{\sqrt{2}}\begin{bmatrix}
1 & -1\\
1 & 1
\end{bmatrix}
$$

This is a counter-example for option-(C).

:::