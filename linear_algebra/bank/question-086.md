---
title: Question-86
pagetitle: Question-86
order: 86
categories: [subspace, span, dimension, basis]
---

Consider the set $\displaystyle S=\{( 1,1,1) ,( -2,1,1) ,( 1,-2,-2)\}$. Which of the following are true?

- [ ] The cardinality of $\displaystyle S$ is the dimension of $\displaystyle \mathbb{R}^{3}$
- [ ] $\displaystyle S$ is a linearly dependent set
- [ ] $\displaystyle S$ spans $\displaystyle \mathbb{R}^{3}$
- [ ] $\displaystyle S$ spans a plane in $\displaystyle \mathbb{R}^{3}$
- [ ] $\displaystyle S$ is a basis of $\displaystyle \mathbb{R}^{3}$
- [ ] Vectors in $\displaystyle S$ are pairwise orthogonal

::: {.callout-note title="Answer" collapse=true}

- [ ] The cardinality of $\displaystyle S$ is the dimension of $\displaystyle \mathbb{R}^{3}$
- [x] $\displaystyle S$ is a linearly dependent set
- [ ] $\displaystyle S$ spans $\displaystyle \mathbb{R}^{3}$
- [x] $\displaystyle S$ spans a plane in $\displaystyle \mathbb{R}^{3}$
- [ ] $\displaystyle S$ is a basis of $\displaystyle \mathbb{R}^{3}$
- [ ] Vectors in $\displaystyle S$ are pairwise orthogonal

:::

::: {.callout-note title="Solution" collapse=true}

Let us add the vectors in $\displaystyle S$ and perform row reduction:

$$
\begin{equation*}
\begin{bmatrix}
1 & 1 & 1\\
-2 & 1 & 1\\
1 & -2 & -2
\end{bmatrix}\rightarrow \begin{bmatrix}
1 & 1 & 1\\
0 & 3 & 3\\
0 & -3 & -3
\end{bmatrix}
\end{equation*}
$$

$$
\begin{equation*}
\begin{bmatrix}
1 & 1 & 1\\
0 & 3 & 3\\
0 & -3 & -3
\end{bmatrix}\rightarrow \begin{bmatrix}
1 & 1 & 1\\
0 & 1 & 1\\
0 & 0 & 0
\end{bmatrix}
\end{equation*}
$$

$$
\begin{equation*}
\begin{bmatrix}
1 & 1 & 1\\
0 & 1 & 1\\
0 & 0 & 0
\end{bmatrix}\rightarrow \begin{bmatrix}
1 & 0 & 0\\
0 & 1 & 1\\
0 & 0 & 0
\end{bmatrix}
\end{equation*}
$$

The matrix has rank $\displaystyle 2$. It follows that $\displaystyle S$ is linearly dependent and $\displaystyle \text{span}( S)$ is a plane passing through the origin. $\displaystyle S$ is not a basis. We can also see that vectors in $\displaystyle S$ cannot be pair-wise orthogonal ($\displaystyle S$ is linearly dependent).


:::
