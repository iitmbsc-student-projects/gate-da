---
title: Question-96
pagetitle: Question-96
order: 96
categories: [determinant, invertibility]
---

Let $\displaystyle L,M,N$ be non-singular matrices of order $\displaystyle 3$ satisfying the following equations:

$$
\begin{aligned}
L^{2} & =L^{-1}\\
M & =L^{8}\\
N & =L^{2}
\end{aligned}
$$

Compute $\displaystyle \text{det}( M-N)$.

::: {.callout-note title="Hint" collapse=true}

Multiply both sides of the first equation by $L$.

:::

::: {.callout-note title="Answer" collapse=true}

$0$

:::

::: {.callout-note title="Solution" collapse=true}

We see that $\displaystyle L^{3} =I$. With this, we can conclude the following:

$$
\begin{aligned}
M & =L^{8}\\
 & =\left( L^{3}\right)^{2} L^{2}\\
 & =IL^{2}\\
 & =L^{2}
\end{aligned}
$$
Since $\displaystyle M=L^{2}$ and $\displaystyle N=L^{2}$, $\displaystyle M=N$, and $\displaystyle \text{det}( M-N) =0$.

:::
