---
title: Question-28
pagetitle: Question-28
order: 28
categories: [eigenvalues, eigenvectors, DA-2025]
---

Let $A=I_{n} +xx^{T}$, where $I_{n}$ is the $n\times n$ identity matrix and $x\in \mathbb{R}^{n} ,x^{T} x=1$. Which of the following options is/are correct?

 - [ ] Rank of $A$ is $n$

 - [ ] $A$ is invertible

 - [ ] $0$ is an eigenvalue of $A$

 - [ ] $A^{-1}$ has a negative eigenvalue

::: {.callout-note title="Answer" collapse=true}

 - [x] Rank of $A$ is $n$

 - [x] $A$ is invertible

 - [ ] $0$ is an eigenvalue of $A$

 - [ ] $A^{-1}$ has a negative eigenvalue

:::

::: {.callout-note title="Solution" collapse=true}

We see that $xx^{T}$ has two eigenvalues, $1$ and $0$. $x$ is an eigenvector with eigenvalue $1$ and any vector orthogonal to $x$ is an eigenvector with eigenvalue $0$. The set of all vectors orthogonal to $x$ is a subspace of dimension $n-1$. To see why the dimension is $n-1$, note that we can extend $x$ to an orthonormal basis of $\mathbb{R}^{n}$. Let us call this orthonormal basis $\{x,x_{1} ,\cdots ,x_{n-1}\}$. Finally, note that $1$ and $0$ are the only eigenvalues for this matrix.

Next, notice that $u$ is an eigenvector of a matrix $B$ with eigenvalue $\lambda$ if and only if $u$ is an eigenvalue of $B+cI$ with eigenvalue $\lambda +c$. Using this, we see that $x$ is an eigenvector of $A=I+xx^{T}$ with eigenvalue $2$ and $x_{i}$ is an eigenvector of $A=I+xx^{T}$ with eigenvalue $1$. We can conclude that $1$ and $2$ are the only eigenvalues of $A$.

Since $A$ doesn't have zero as an eigenvalue, $Ax=0\Longrightarrow x=0$. It follows that $A$ is invertible and full rank. The eigenvalues of $A^{-1}$ are $1$ and $\frac{1}{2}$. So the last option is incorrect.

:::