---
title: Question-60
pagetitle: Question-60
order: 60
categories: [PCA, eigenvalue, eigenvector, covariance matrix, unsupervised learning, DA-2025]
---

Let $D=\left\{x^{( 1)} ,\cdots ,x^{( n)}\right\}$ be a dataset of $n$ observations where each $x^{( i)} \in \mathbb{R}^{100}$. It is given that $\sum\limits _{i=1}^{n} x^{( i)} =0$. The covariance matrix computed from $D$ has eigenvalues $\lambda _{i} =100^{2-i} ,1\leqslant i\leqslant 100$. Let $u\in \mathbb{R}^{100}$ be the direction of maximum variance with $u^{T} u=1$.

Find the value of

$$
\frac{1}{n}\sum\limits _{i=1}^{n}\left( u^{T} x^{( i)}\right)^{2}
$$

(Answer in integer)

::: {.callout-note title="Answer" collapse=true}

$100$

:::

::: {.callout-note title="Solution" collapse=true}

The expression given in the question is the variance of the dataset along the direction $u$. We can rework this expression as follows:

$$
\begin{aligned}
\frac{1}{n}\sum\limits _{i=1}^{n}\left( u^{T} x^{( i)}\right)^{2} & =\frac{1}{n}\sum\limits _{i=1}^{n}\left( u^{T} x^{( i)}\right)\left( u^{T} x^{( i)}\right)\\
 & \\
 & =\frac{1}{n}\sum\limits _{i=1}^{n}\left( u^{T} x^{( i)}\right)\left( x{^{( i)}}^{T} u\right)\\
 & \\
 & =u^{T}\left[\frac{1}{n}\sum\limits _{i=1}^{n} x^{( i)} x{^{( i)}}^{T}\right] u\\
 & \\
 & =u^{T} Cu
\end{aligned}
$$

where $C$ is the covariance matrix. Recall that the direction of maximum variance is the first principal component, which is the eigenvector corresponding to the largest eigenvalue of the covariance matrix. Therefore:

$$
\begin{aligned}
u^{T} Cu & =u^{T}( \lambda u)\\
 & =\lambda \left( u^{T} u\right)\\
 & =\lambda 
\end{aligned}
$$

where $\lambda$ is the largest eigenvalue of $C$. From the data, this happens to be $100^{2-1} =100$.

:::