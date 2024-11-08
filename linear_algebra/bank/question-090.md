---
title: Question-90
pagetitle: Question-90
order: 90
categories: [idempotent matrix, eigenvalue, eigenvector, rank]
---

Let $\displaystyle A$ be a real idempotent matrix of order $\displaystyle n$. Then which of the following are true?

- [ ] $\displaystyle I-A$ is also an idempotent matrix.
- [ ] $\displaystyle A$ is always invertible
- [ ] $\displaystyle A$ has $\displaystyle n$ real eigenvalues (including multiplicity)
- [ ] All non-zero vectors in the column space of $\displaystyle A$ are eigenvectors of $\displaystyle A$
- [ ] The rank of $\displaystyle A$ is equal to its trace

::: {.callout-note title="Answer" collapse=true}

- [x] $\displaystyle I-A$ is also an idempotent matrix.
- [ ] $\displaystyle A$ is always invertible
- [x] $\displaystyle A$ has $\displaystyle n$ real eigenvalues (including multiplicity)
- [x] All non-zero vectors in the column space of $\displaystyle A$ are eigenvectors of $\displaystyle A$
- [x] The rank of $\displaystyle A$ is equal to its trace

:::

::: {.callout-note title="Solution" collapse=true}

### Option-1

We have:

$$
\begin{equation*}
\begin{aligned}
( I-A)^{2} & =I^{2} +A^{2} -2IA\\
 & =I+A-2A\\
 & =I-A
\end{aligned}
\end{equation*}
$$

### Option-2

This is not true. A simple counter-example: $\displaystyle \begin{bmatrix}
0 & 0\\
1 & 1
\end{bmatrix}$

### Option-3

If $\displaystyle ( \lambda ,v)$ is an eigenpair of $\displaystyle A$, we have:

$$
\begin{equation*}
\begin{aligned}
Av & =\lambda v
\end{aligned} ,\ \ \begin{aligned}
A^{2} v & =\lambda ^{2} v\\
Av & =\lambda ^{2} v
\end{aligned}
\end{equation*}
$$

From this:

$$
\begin{equation*}
\lambda ^{2} v=\lambda v\Longrightarrow \lambda ( \lambda -1) v=0
\end{equation*}
$$

It follows that $\displaystyle \lambda =0,1$. It is known that every matrix has $\displaystyle n$ complex eigenvalues. The above argument shows that every eigenvalue of an idempotent has to be either $\displaystyle 1$ or $\displaystyle 0$. Therefore, $\displaystyle A$ has $\displaystyle n$ real eigenvalues.

### Option-4

Let $\displaystyle C( A) =\text{span}\{v_{1} ,\cdots ,v_{r}\}$ be the column space of $\displaystyle A$ whose rank is $\displaystyle r$. For each $\displaystyle v_{i}$, there is some $\displaystyle u_{i} \in \mathbb{R}^{n}$ such that $\displaystyle v_{i} =Au_{i}$. This is from the definition of the column space. With this:

$$
\begin{equation*}
\begin{aligned}
Av_{i} & =A^{2} u_{i}\\
 & =Au_{i}\\
 & =v_{i}
\end{aligned}
\end{equation*}
$$

We see that $\displaystyle ( 1,v_{i})$ is an eigenpair of $\displaystyle A$. Therefore, every eigenvector in the column space of $\displaystyle A$ is an eigenvector with eigenvalue $\displaystyle 1$.

### Option-5

Here is an outline of the proof. In the previous option, we have shown that $\displaystyle A$ (of rank $\displaystyle r$) has $\displaystyle r$ linearly independent eigenvectors with eigenvalue $\displaystyle 1$. With some more work, we can show that the characteristic polynomial of $\displaystyle A$ exactly factors as $\displaystyle ( \lambda -1)^{r} \lambda ^{n-r}$. The sum of the eigenvalues is the trace which is $\displaystyle r$.

:::