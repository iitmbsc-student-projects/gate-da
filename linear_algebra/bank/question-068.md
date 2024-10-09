---
title: Question-68
pagetitle: Question-68
order: 68
categories: [skew-symmetric, invertible]
---

Which of the following statements are true regarding a skew-symmetric matrix?

- [ ] $\displaystyle A$ is invertible

- [ ] $\displaystyle A$ is not invertible

- [ ] If $\displaystyle A$ is of odd order, $\displaystyle A$ is invertible

- [ ] If $\displaystyle A$ is of odd order, $\displaystyle A$ is not invertible

- [ ] If $\displaystyle A$ is of even order, $\displaystyle A$ is invertible

- [ ] If $\displaystyle A$ is of even order, $\displaystyle A$ is not invertible

::: {.callout-note title="Answer" collapse=true}

- [ ] $\displaystyle A$ is invertible

- [ ] $\displaystyle A$ is not invertible

- [ ] If $\displaystyle A$ is of odd order, $\displaystyle A$ is invertible

- [x] If $\displaystyle A$ is of odd order, $\displaystyle A$ is not invertible

- [ ] If $\displaystyle A$ is of even order, $\displaystyle A$ is invertible

- [ ] If $\displaystyle A$ is of even order, $\displaystyle A$ is not invertible

:::

::: {.callout-note title="Solution" collapse=true}

For a skew-symmetric matrix, $\displaystyle A^{T} =-A$. Let us now use a few of the properties of determinants:

$$
\begin{equation*}
\begin{aligned}
|A| & =|A^{T} |\\
 & =|-A|\\
 & =( -1)^{n} |A|
\end{aligned}
\end{equation*}
$$

If $\displaystyle n$ is odd, $\displaystyle |A|=0$ and hence $\displaystyle A$ is not invertible. We have shown that skew-symmetric matrices of odd order are not invertible. For $\displaystyle n$ being even, the above equation won't allow us to conclude anything. Therefore, we have to deal in (counter) examples.

Consider the following counter examples:

$$
\begin{equation*}
A=\begin{bmatrix}
0 & 1\\
-1 & 0
\end{bmatrix} ,\ B=\begin{bmatrix}
0 & 0\\
0 & 0
\end{bmatrix} ,\ C=\begin{bmatrix}
0 & 1 & -1 & 0\\
-1 & 0 & 1 & 0\\
1 & -1 & 0 & 0\\
0 & 0 & 0 & 0
\end{bmatrix}
\end{equation*}
$$

All three matrices are skew-symmetric of even order. $\displaystyle A$ is invertible, while $\displaystyle B$ and $\displaystyle C$ are not. $\displaystyle C$ has been included as $\displaystyle B$ is quite trivial. If a skew-symmetric matrix is of even order, we can't comment on its invertibility without more information.

:::
