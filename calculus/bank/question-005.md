---
title: Question-5
pagetitle: Question-5
order: 5
categories: [maxima and minima]
---

Define a function $f$ as follows:

$$
\begin{aligned}
    f(x) = \begin{cases}
               kx^2+l, & \text{if } x \leqslant 1\\
              lx^2+kx+m, & \text{if } x > 1 
          \end{cases}
\end{aligned}
$$

If $f$ is continuous and differentible at $x=1$, find the value of $k-2l+m$.

::: {.callout-note title="Answer" collapse=true}
$0$
:::

::: {.callout-note title="Solution" collapse=true}
Since $f$ is continuous at $x = 1$, we have:

$$
k + l = l + k + m \implies m = 0
$$

Since $f$ is differentiable at $x = 1$, we have:

$$
2k = 2l + k \implies k = 2l
$$

From this, we see that $k - 2l + m = 0$
:::