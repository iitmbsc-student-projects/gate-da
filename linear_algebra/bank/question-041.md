---
title: Question-41
pagetitle: Question-41
order: 41
categories: [eigenvalue and eigenvector]
---

Consider the following matrix:

$$
\begin{equation*}
\begin{bmatrix}
0 & 1 & 1 & 1\\
1 & 0 & 1 & 1\\
1 & 1 & 0 & 1\\
1 & 1 & 1 & 0
\end{bmatrix}
\end{equation*}
$$

What is the largest eigenvalue of the above matrix?

::: {.callout-note title="Answer" collapse=true}

$3$

:::

::: {.callout-note title="Solution" collapse=true}

Consider:

$$
\begin{equation*}
A=\begin{bmatrix}
1 & 1 & 1 & 1\\
1 & 1 & 1 & 1\\
1 & 1 & 1 & 1\\
1 & 1 & 1 & 1
\end{bmatrix} ,\ I=\begin{bmatrix}
1 &  &  & \\
 & 1 &  & \\
 &  & 1 & \\
 &  &  & 1
\end{bmatrix}
\end{equation*}
$$

Then, the matrix we are interested in is $\displaystyle A-I$. Let $\displaystyle ( \lambda ,v)$ be an eigenpair of $\displaystyle A$.

$$
\begin{equation*}
\begin{aligned}
( A-I) v & =\lambda v\\
\Longleftrightarrow Av & =( \lambda +1) v
\end{aligned}
\end{equation*}
$$

We have shown $\displaystyle ( \lambda ,v)$ is an eigenpair of $\displaystyle A-I$ if and only if $\displaystyle ( \lambda +1,v)$ is an eigenpair of $\displaystyle A$. Now:

$$
\begin{equation*}
A=\begin{bmatrix}
1\\
1\\
1\\
1
\end{bmatrix}\begin{bmatrix}
1 & 1 & 1 & 1
\end{bmatrix} =uu^{T} ;\ \ \ \ \ \ u=\begin{bmatrix}
1\\
1\\
1\\
1
\end{bmatrix}
\end{equation*}
$$

Clearly, $\displaystyle A$ is a matrix of unit rank with $\displaystyle ( 4,u)$ as an eigenpair. The other kind of eigenpair is $\displaystyle ( 0,v)$, where $\displaystyle v\perp u$. We can ignore this since we are only interested in the largest eigenvalue. Therefore, $\displaystyle ( 3,u)$ is an eigenpair of $\displaystyle A-I$. By the previous result, $\displaystyle 3$ happens to be the largest eigenvalue of $\displaystyle A-I$.
:::
