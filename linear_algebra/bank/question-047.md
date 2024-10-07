---
title: Question-47
pagetitle: Question-47
order: 47
categories: [idempotent matrix, partition matrix]
---

If:

$$
\begin{equation*}
A=\begin{bmatrix}
1 & 0 & 0 & 1/3 & 1/3 & 1/3\\
0 & 1 & 0 & 1/3 & 1/3 & 1/3\\
0 & 0 & 1 & 1/3 & 1/3 & 1/3\\
0 & 0 & 0 & 1/3 & 1/3 & 1/3\\
0 & 0 & 0 & 1/3 & 1/3 & 1/3\\
0 & 0 & 0 & 1/3 & 1/3 & 1/3
\end{bmatrix}
\end{equation*}
$$

Then consider the following matrices:

$$
\begin{equation*}
\begin{aligned}
P & =\begin{bmatrix}
1 & 0 & 0 & ( 1/3)^{300} & ( 1/3)^{300} & ( 1/3)^{300}\\
0 & 1 & 0 & ( 1/3)^{300} & ( 1/3)^{300} & ( 1/3)^{300}\\
0 & 0 & 1 & ( 1/3)^{300} & ( 1/3)^{300} & ( 1/3)^{300}\\
0 & 0 & 0 & ( 1/3)^{300} & ( 1/3)^{300} & ( 1/3)^{300}\\
0 & 0 & 0 & ( 1/3)^{300} & ( 1/3)^{300} & ( 1/3)^{300}\\
0 & 0 & 0 & ( 1/3)^{300} & ( 1/3)^{300} & ( 1/3)^{300}
\end{bmatrix}
\end{aligned} ,\ Q=\begin{bmatrix}
1 & 0 & 0 & 100 & 100 & 100\\
0 & 1 & 0 & 100 & 100 & 100\\
0 & 0 & 1 & 100 & 100 & 100\\
0 & 0 & 0 & 1/3 & 1/3 & 1/3\\
0 & 0 & 0 & 1/3 & 1/3 & 1/3\\
0 & 0 & 0 & 1/3 & 1/3 & 1/3
\end{bmatrix}
\end{equation*}
$$

What is $\displaystyle A^{300}$ equal to?

- [ ] $A$
- [ ] $P$
- [ ] $Q$
- [ ] $P + Q$

::: {.callout-note title="Hint" collapse=true}

Look for an idempotent matrix.

:::

::: {.callout-note title="Answer" collapse=true}

- [ ] $A$
- [ ] $P$
- [x] $Q$
- [ ] $P + Q$

:::

::: {.callout-note title="Solution" collapse=true}

This can be partitioned as follows:

$$
\begin{equation*}
A=\begin{bmatrix}
I & B\\
0 & B
\end{bmatrix}
\end{equation*}
$$

where, $\displaystyle B=\frac{1}{3}\begin{bmatrix}
1 & 1 & 1\\
1 & 1 & 1\\
1 & 1 & 1
\end{bmatrix}$. Notice that $\displaystyle B^{2} =B$.


First, let us compute $\displaystyle A^{2}$:

$$
\begin{equation*}
A^{2} =\begin{bmatrix}
I & B\\
0 & B
\end{bmatrix}\begin{bmatrix}
I & B\\
0 & B
\end{bmatrix} =\begin{bmatrix}
I & 2B\\
0 & B
\end{bmatrix}
\end{equation*}
$$

Assuming that $\displaystyle A^{n-1} =\begin{bmatrix}
I & ( n-1) B\\
0 & B
\end{bmatrix}$, we have:
$$
\begin{equation*}
A^{n} =\begin{bmatrix}
I & ( n-1) B\\
0 & B
\end{bmatrix}\begin{bmatrix}
I & B\\
0 & B
\end{bmatrix} =\begin{bmatrix}
I & nB\\
0 & B
\end{bmatrix}
\end{equation*}
$$

Hence we have shown that for all $n \geqslant 2$:

$$
\begin{equation*}
A^{n} =\begin{bmatrix}
I & nB\\
0 & B
\end{bmatrix}
\end{equation*}
$$

:::
