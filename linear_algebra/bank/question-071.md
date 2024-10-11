---
title: Question-71
pagetitle: Question-71
order: 71
categories: [eigenvalue, eigenvector]
---

$\displaystyle A$ is a square matrix. Consider the two statements given below:

$\displaystyle P$: $\displaystyle A$ and $\displaystyle A^{T}$ have the same eigenvalues.

$\displaystyle Q$: $\displaystyle A$ and $\displaystyle A^{T}$ have the same eigenvectors.

Which of the following is true?

- [ ] $\displaystyle P$ is true, but $\displaystyle Q$ is false.

- [ ] $\displaystyle P$ is false, but $\displaystyle Q$ is true.

- [ ] Both $\displaystyle P$ and $\displaystyle Q$ are true.

- [ ] Both $\displaystyle P$ and $\displaystyle Q$ are false

::: {.callout-note title="Answer" collapse=true}

- [x] $\displaystyle P$ is true, but $\displaystyle Q$ is false.

- [ ] $\displaystyle P$ is false, but $\displaystyle Q$ is true.

- [ ] Both $\displaystyle P$ and $\displaystyle Q$ are true.

- [ ] Both $\displaystyle P$ and $\displaystyle Q$ are false

:::

::: {.callout-note title="Solution" collapse=true}

Let us consider the characteristic polynomial of $\displaystyle A^{T}$:

$$
\begin{equation*}
\begin{aligned}
|A^{T} -\lambda I| & =|A^{T} -\lambda I^{T} |\\
 & =|( A-\lambda I)^{T} |\\
 & =|A-\lambda I|
\end{aligned}
\end{equation*}
$$

We see that both $\displaystyle A$ and $\displaystyle A^{T}$ have the same characteristic polynomial. Therefore, they have the same eigenvalues.

To see that they don't need to have the same eigenvectors, consider the following example:

$$
\begin{equation*}
A=\begin{bmatrix}
1 & 1\\
0 & 2
\end{bmatrix} ,\ A^{T} =\begin{bmatrix}
1 & 0\\
1 & 2
\end{bmatrix}
\end{equation*}
$$

The eigenvalues of $\displaystyle A$ and $\displaystyle A^{T}$ are $\displaystyle 1,2$. A pair of eigenvectors of $\displaystyle A$ is $\displaystyle ( 1,0)$ and $\displaystyle ( 1,1)$. A pair of eigenvectors for $\displaystyle A^{T}$ is $\displaystyle ( 1,-1)$ and $\displaystyle ( 0,1)$.

:::
