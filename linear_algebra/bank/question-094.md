---
title: Question-94
pagetitle: Question-94
order: 94
categories: [symmetric matrix]
---

Consider these two statements:

- S1: The sum of two symmetric matrices is a symmetric matrix.
- S2: The product of two symmetric matrices is a symmetric matrix.

Select the correct option.

- [ ] S1 is true, S2 is false
- [ ] S1 is false, S2 is true
- [ ] S1 and S2 are true
- [ ] S1 and S2 are false

::: {.callout-note title="Answer" collapse=true}

- [x] S1 is true, S2 is false
- [ ] S1 is false, S2 is true
- [ ] S1 and S2 are true
- [ ] S1 and S2 are false


:::

::: {.callout-note title="Solution" collapse=true}

S1 is true and S2 is false. If $\displaystyle A,B$ are symmetric, then:

$$
\displaystyle ( A+B)^{T} =A^{T} +B^{T} =A+B
$$ 

A counter-example for S2:

$$
\begin{equation*}
A=\begin{bmatrix}
1 & 0\\
0 & 0
\end{bmatrix} ,\ B=\begin{bmatrix}
1 & 1\\
1 & 1
\end{bmatrix}
\end{equation*}
$$

Then:

$$
\begin{equation*}
AB=\begin{bmatrix}
1 & 1\\
0 & 0
\end{bmatrix}
\end{equation*}
$$

Clearly, $\displaystyle AB$ is not symmetric.

:::
