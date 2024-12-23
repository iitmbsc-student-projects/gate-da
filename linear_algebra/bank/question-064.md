---
title: Question-64
pagetitle: Question-64
order: 64
categories: [trace, matrix]
---

The trace of a square matrix is the sum of its diagonal entries. Two matrices $\displaystyle A$ and $\displaystyle B$ that are compatible for multiplication are said to commute if $\displaystyle AB=BA$. Assume that $\displaystyle A$ and $\displaystyle B$ are two matrices compatible for multiplication such that $\displaystyle AB$ and $\displaystyle BA$ are both square matrices. Which of the following are true?

- [ ] $\displaystyle \text{tr}( AB) =\text{tr}( BA)$ only if $\displaystyle A$ and $\displaystyle B$ commute

- [ ] $\displaystyle \text{tr}( AB) =\text{tr}( BA)$ only if $\displaystyle A$ and $\displaystyle B$ are square matrices

- [ ] $\displaystyle \text{tr}( AB) \neq \text{tr}( BA)$

- [ ] $\displaystyle \text{tr}( AB) =\text{tr}( BA)$

::: {.callout-note title="Answer" collapse=true}

- [ ] $\displaystyle \text{tr}( AB) =\text{tr}( BA)$ only if $\displaystyle A$ and $\displaystyle B$ commute

- [ ] $\displaystyle \text{tr}( AB) =\text{tr}( BA)$ only if $\displaystyle A$ and $\displaystyle B$ are square matrices

- [ ] $\displaystyle \text{tr}( AB) \neq \text{tr}( BA)$

- [x] $\displaystyle \text{tr}( AB) =\text{tr}( BA)$

:::

::: {.callout-note title="Solutions" collapse=true}
::: {.panel-tabset}

## Solution-1

> This solution was provided by **Vivek Sivaramakrishnan**. Besides its elegance, it is notable for the marriage of multiple ideas: different ways of multiplying matrices, linking inner products, outer producs and the trace.

Let $\displaystyle A$ be an $\displaystyle m\times n$ matrix and $\displaystyle B$ be an $\displaystyle n\times m$ matrix. We can represent $\displaystyle A$ and $\displaystyle B$ as follows:

$$
\begin{equation*}
A=\begin{bmatrix}
| &  & |\\
a_{1} & \cdots  & a_{n}\\
| &  & |
\end{bmatrix} ,\ B=\begin{bmatrix}
- & b_{1}^{T} & -\\
 &  & \\
- & b_{n}^{T} & -
\end{bmatrix}
\end{equation*}
$$

Here, $\displaystyle a_{i} \in \mathbb{R}^{m}$ and $\displaystyle b_{i} \in \mathbb{R}^{m}$. We can express $\displaystyle AB$ as a sum of $\displaystyle n$ outer-products:

$$
\begin{equation*}
AB=a_{1} b_{1}^{T} +\cdots +a_{n} b_{n}^{T}
\end{equation*}
$$

We have:

$$
\begin{equation*}
\text{tr}( AB) =\text{tr}\left( a_{1} b_{1}^{T}\right) +\cdots +\text{tr}\left( a_{n} b_{n}^{T}\right)
\end{equation*}
$$

If $\displaystyle a$ and $\displaystyle b$ are two vectors in $\displaystyle \mathbb{R}^{m}$, the diagonal of $\displaystyle ab^{T}$ is made up of elements of the form $\displaystyle a_{i} b_{i}$. So the trace of $\displaystyle ab^{T}$ is nothing but the dot product $\displaystyle a^{T} b$! Therefore, the equation becomes:

$$
\begin{equation*}
\text{tr}( AB) =a_{1}^{T} b_{1} +\cdots +a_{n}^{T} b_{n}
\end{equation*}
$$

We can now rewrite this as:

$$
\begin{equation*}
\text{tr}( AB) =b_{1}^{T} a_{1} +\cdots +b_{n}^{T} a_{n}
\end{equation*}
$$

This is nothing but $\displaystyle \text{tr}( BA)$. To see this, recall that:

$$
\begin{equation*}
B=\begin{bmatrix}
- & b_{1}^{T} & -\\
 &  & \\
- & b_{n}^{T} & -
\end{bmatrix} ,\ A=\begin{bmatrix}
| &  & |\\
a_{1} & \cdots  & a_{n}\\
| &  & |
\end{bmatrix}
\end{equation*}
$$

Each diagonal entry of $\displaystyle BA$ is just the dot product of the $\displaystyle i^{th}$ row of $\displaystyle B$ with the $\displaystyle i^{th}$ column of $\displaystyle A$.

## Solution-2
Let $\displaystyle A$ be of shape $\displaystyle m\times n$. If $\displaystyle AB$ and $\displaystyle BA$ are to be square matrices, $\displaystyle B$ has to be of shape $\displaystyle n\times m$. Let us represent $\displaystyle A$ and $\displaystyle B$ as:

$$
\begin{equation*}
A=\begin{bmatrix}
| &  & |\\
a_{1} & \cdots  & a_{n}\\
| &  & |
\end{bmatrix} ,\ B=\begin{bmatrix}
| &  & |\\
b_{1} & \cdots  & b_{m}\\
| &  & |
\end{bmatrix}
\end{equation*}
$$

This allows us to express $\displaystyle AB$ and $\displaystyle BA$ as:

$$
\begin{equation*}
AB=\begin{bmatrix}
| &  & |\\
Ab_{1} & \cdots  & Ab_{m}\\
| &  & |
\end{bmatrix} ,\ BA=\begin{bmatrix}
| &  & |\\
Ba_{1} & \cdots  & Ba_{n}\\
| &  & |
\end{bmatrix}
\end{equation*}
$$

And now for the trace of $\displaystyle AB$:

$$
\begin{equation*}
\begin{aligned}
\sum\limits _{i=1}^{m}( AB)_{ii} & =\sum\limits _{i=1}^{m}( Ab_{i})_{i}\\
 & =\sum\limits _{i=1}^{m}\left(\sum\limits _{j=1}^{n} a_{j} b_{ij}\right)_{i}\\
 & =\sum\limits _{i=1}^{m}\sum\limits _{j=1}^{n} a_{ji} b_{ij}
\end{aligned}
\end{equation*}
$$

And now for the trace of $\displaystyle BA$:

$$
\begin{equation*}
\begin{aligned}
\sum\limits _{j=1}^{n}( BA)_{jj} & =\sum\limits _{j=1}^{n}( Ba_{j})_{j}\\
 & =\sum\limits _{j=1}^{n}\left(\sum\limits _{i=1}^{m} b_{i} a_{ji}\right)_{j}\\
 & =\sum\limits _{j=1}^{n}\sum\limits _{i=1}^{n} b_{ij} a_{ji}
\end{aligned}
\end{equation*}
$$

By interchanging the order of the summations (which is allowed in this case), we see that the two double summations are one and the same. What we have shown is the following result:

::: {.callout-note title="Note"}
Let $\displaystyle A$ and $\displaystyle B$ be two matrices such that $\displaystyle AB$ and $\displaystyle BA$ are square matrices. Then, $\displaystyle \text{tr}( AB) =\text{tr}( BA)$.
:::
:::
:::