---
title: Question-39
pagetitle: Question-39
order: 39
categories: [cdf, continuous random variable, DA-2025]
---

Consider the cumulative distribution function (CDF) of a random variable $X$:

$$
F_{X}( x) =\begin{cases}
0, & x\leqslant -1\\
\frac{1}{4}( x+1)^{2} , & -1\leqslant x\leqslant 1\\
1, & x\geqslant 1
\end{cases}
$$

The value of $P\left( X^{2} \leqslant 0.25\right)$ is:

 - [ ] $0.625$
 - [ ] $0.25$
 - [ ] $0.5$
 - [ ] $0.5625$

::: {.callout-note title="Answer" collapse=true}

 - [ ] $0.625$
 - [ ] $0.25$
 - [x] $0.5$
 - [ ] $0.5625$

:::

::: {.callout-note title="Solution" collapse=true}

We have:

$$
\begin{aligned}
P\left( X^{2} \leqslant 0.25\right) & =P( -0.5\leqslant X\leqslant 0.5)\\\\
 & =F_{X}( 0.5) -F_{X}( -0.5)\\\\
 & =\frac{1}{4}\left[( 1.5)^{2} -( 0.5)^{2}\right]\\\\
 & =0.5
\end{aligned}
$$
:::