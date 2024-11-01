---
title: Question-79
pagetitle: Question-79
order: 79
categories: [determinant, trace, eigenvalue]
---

Let $\displaystyle A$ be a $\displaystyle 2\times 2$ matrix of real numbers. Which of the following are true?

- [ ] $\displaystyle \text{det}\left( A^{2}\right)$ is non-negative
- [ ] $\displaystyle \text{trace}\left( A^{2}\right)$ is non-negative
- [ ] All the elements of $\displaystyle A^{2}$ are non-negative
- [ ] All the eigenvalues of $\displaystyle A^{2}$ are non-negative
- [ ] If $\displaystyle A$ has two distinct real eigenvalues, then so does $\displaystyle A^{2}$

::: {.callout-note title="Answer" collapse=true}

- [x] $\displaystyle \text{det}\left( A^{2}\right)$ is non-negative
- [ ] $\displaystyle \text{trace}\left( A^{2}\right)$ is non-negative
- [ ] All the elements of $\displaystyle A^{2}$ are non-negative
- [ ] All the eigenvalues of $\displaystyle A^{2}$ are non-negative
- [x] If $\displaystyle A$ has two distinct real eigenvalues, then so does $\displaystyle A^{2}$

:::

::: {.callout-note title="Solution" collapse=true}


### Option-1

$$
\begin{equation*}
\begin{aligned}
\text{det}\left( A^{2}\right) & =\left[\text{det}( A)\right]^{2}\\
 & \geqslant 0
\end{aligned}
\end{equation*}
$$

### Option-2, 3, 4

These three options are false. Interestingly, all three can be addressed with the help of a single counter-example. The key is to look for a matrix whose eigenvalues are complex. Here is one such example:

$$
\begin{equation*}
A=\begin{bmatrix}
0 & 1\\
-1 & 0
\end{bmatrix} \Longrightarrow A^{2} =\begin{bmatrix}
-1 & 0\\
0 & -1
\end{bmatrix}
\end{equation*}
$$

We see that the elements of $\displaystyle A^{2}$ could also be negative. The eigenvalues of $\displaystyle A^{2}$ are both negative and its trace is also negative.

### Option-5

This is true. Let the real eigenvalues of $\displaystyle A$ be $\displaystyle \lambda _{1} ,\lambda _{2}$:

$$
\begin{equation*}
\begin{aligned}
Av_{1} & =\lambda _{1} v_{1}\\
\Longrightarrow A^{2} v_{1} & =\lambda _{1}^{2} v_{1}
\end{aligned}
\end{equation*}
$$

We see that $\displaystyle \lambda _{1}^{2} ,\lambda _{2}^{2}$ are distinct eigenvalues of $\displaystyle A^{2}$.

:::
