---
title: Question-84
pagetitle: Question-84
order: 84
categories: [cdf, continuous random variable, variance]
---

Let $X$ be a continuous random variable with the following PDF:

$$
f_{X}( x) =\begin{cases}
\cfrac{x}{2} , & 0\leqslant x\leqslant 2\\
0, & \text{otherwise}
\end{cases}
$$

Find the variance of $X$. Enter your answer correct to two decimal places.

::: {.callout-note title="Answer" collapse=true}

$0.22$

:::

::: {.callout-note title="Solution" collapse=true}

We know that $\sigma ^{2} =E\left[ X^{2}\right] -E[ X]^{2}$. So we first compute $E[ X]$ and $E\left[ X^{2}\right]$:

$$
\begin{aligned}
E[ X] & =\int\limits _{0}^{2}\frac{x^{2}}{2} dx\\
 & =\frac{4}{3}
\end{aligned}
$$
And

$$
\begin{aligned}
E\left[ X^{2}\right] & =\int\limits _{0}^{2}\frac{x^{3}}{2} dx\\
 & =2
\end{aligned}
$$

Therefore $\sigma ^{2} =2-\left(\frac{4}{3}\right)^{2} =\frac{2}{9}$.


:::