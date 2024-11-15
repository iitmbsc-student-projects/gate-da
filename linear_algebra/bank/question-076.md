---
title: Question-76
pagetitle: Question-76
order: 76
categories: [nilpotent, eigenvalue, eigenvector, diagonalizable]
---

Use the following definitions to solve this question:

- A square matrix $\displaystyle A$ of order $\displaystyle n$ is called nilpotent if $\displaystyle A^{k} =0$ for some positive integer $\displaystyle k$. For example, $\displaystyle \begin{bmatrix}
0 & 1\\
0 & 0
\end{bmatrix}$ is nilpotent. 

- A matrix is called diagonalizable if $\displaystyle \mathbb{R}^{n}$ has a basis of eigenvectors of $\displaystyle A$.

Which of the following statements are true?

- [ ] Zero is the only eigenvalue of a nilpotent matrix.

- [ ] A nilpotent matrix has at least one non-zero eigenvalue.

- [ ] If a matrix is nilpotent and diagonalizable, it has to be the zero matrix.

- [ ] All diagonal matrices are nilpotent.

::: {.callout-note title="Answer" collapse=true}

- [x] Zero is the only eigenvalue of a nilpotent matrix.

- [ ] A nilpotent matrix has at least one non-zero eigenvalue.

- [x] If a matrix is nilpotent and diagonalizable, it has to be the zero matrix.

- [ ] All diagonal matrices are nilpotent.

:::

::: {.callout-note title="Solution" collapse=true}


#### Eigenvalues of a nilpotent matrix

We have:

$$
\begin{equation*}
\begin{aligned}
Av & =\lambda v
\end{aligned}
\end{equation*}
$$

Pre-multiplying by $\displaystyle A$ on both sides $\displaystyle k-1$ times, we have:

$$
\begin{equation*}
A^{k} v=\lambda ^{k} v\Longrightarrow \lambda ^{k} v=0
\end{equation*}
$$

Since $\displaystyle v$ is an eigenvector, $\displaystyle v\neq 0$. This implies that $\displaystyle \lambda =0$. Therefore, zero is the only eigenvalue of a nilpotent matrix.

#### Nilpotent and diagonalizable

Since $\displaystyle A$ is nilpotent, we have $\displaystyle A^{k} =0$ for some $\displaystyle k$. Since $\displaystyle A$ is diagonalizable, there is a basis $\displaystyle B=\{v_{1} ,\cdots ,v_{n}\}$ for $\displaystyle \mathbb{R}^{n}$, where $\displaystyle v_{i}$ is an eigenvector of $\displaystyle A$. Since zero is the only eigenvalue, we have $\displaystyle Av_{i} =0$ for every eigenvector. Since $\displaystyle A$ maps every basis vector to the zero vector, $\displaystyle A$ has to be the zero matrix.

:::
