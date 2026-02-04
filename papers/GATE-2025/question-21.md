---
title: Question-21
pagetitle: Question-21
order: 21
categories: [exponential distribution, continuous random variable, cdf, DA-2025]
---

It is given that $P( X\geqslant 2) =0.25$ for an exponentially distributed random variable $X$ with $E[ X] =\cfrac{1}{\lambda }$, where $E[ X]$ denotes the expectation of $X$. What is the value of $\lambda$? ($\ln$denotes natural logarithm)

 - [ ] $\ln 2$

 - [ ] $\ln 4$

 - [ ] $\ln 3$

 - [ ] $\ln 0.25$

::: {.callout-note title="Answer" collapse=true}

 - [x] $\ln 2$

 - [ ] $\ln 4$

 - [ ] $\ln 3$

 - [ ] $\ln 0.25$

:::

::: {.callout-note title="Solution" collapse=true}

The mean of an exponentially distributed random variable with parameter $\lambda$ is $\cfrac{1}{\lambda }$. The CDF is given by

$$
F_{X}( x) =\begin{cases}
1-e^{-\lambda x} , & x\geqslant 0\\
0, & \text{otherwise}
\end{cases}
$$
Now:

$$
\begin{array}{ r r l }
 & P( X\geqslant 2) & =0.25\\
\Longrightarrow  & 1-P( X< 2) & =0.25\\
\Longrightarrow  & P( X< 2) & =0.75\\
\Longrightarrow  & F_{X}( 2) & =0.75\\
\Longrightarrow  & 1-e^{-2\lambda } & =0.75\\
\Longrightarrow  & e^{-2\lambda } & =0.25\\
\Longrightarrow  & \lambda  & =-\cfrac{1}{2}\ln 0.25\\
\Longrightarrow  & \lambda  & =\ln 2
\end{array}
$$

:::