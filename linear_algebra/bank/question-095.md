---
title: Question-95
pagetitle: Question-95
order: 95
categories: [matrix multiplication]
---

If $\displaystyle A=\begin{bmatrix}
1 & 2\\
2 & -1
\end{bmatrix}$, which of the following is $\displaystyle A^{8}$?

- [ ] $\displaystyle \begin{bmatrix}
25 & 0\\
0 & 25
\end{bmatrix}$

- [ ] $\displaystyle \begin{bmatrix}
125 & 0\\
0 & 125
\end{bmatrix}$

- [ ] $\displaystyle \begin{bmatrix}
625 & 0\\
0 & 625
\end{bmatrix}$

- [ ] $\displaystyle \begin{bmatrix}
3125 & 0\\
0 & 3125
\end{bmatrix}$

::: {.callout-note title="Hint" collapse=true}

Find $A^2$.

:::

::: {.callout-note title="Answer" collapse=true}

- [ ] $\displaystyle \begin{bmatrix}
25 & 0\\
0 & 25
\end{bmatrix}$

- [ ] $\displaystyle \begin{bmatrix}
125 & 0\\
0 & 125
\end{bmatrix}$

- [x] $\displaystyle \begin{bmatrix}
625 & 0\\
0 & 625
\end{bmatrix}$

- [ ] $\displaystyle \begin{bmatrix}
3125 & 0\\
0 & 3125
\end{bmatrix}$

:::

::: {.callout-note title="Solution" collapse=true}

Let us first compute $\displaystyle A^{2}$:

$$
\begin{aligned}
A^{2} & =\begin{bmatrix}
1 & 2\\
2 & -1
\end{bmatrix}\begin{bmatrix}
1 & 2\\
2 & -1
\end{bmatrix}\\
 & =\begin{bmatrix}
5 & 0\\
0 & 5
\end{bmatrix}\\
 & =5I
\end{aligned}
$$

Therefore, $\displaystyle A^{8} =5^{4} I=625I$.

:::
