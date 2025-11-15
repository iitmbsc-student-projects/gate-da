---
title: Question-85
pagetitle: Question-85
order: 85
categories: [cdf, uniform]
---

A package delivery time $T$ (in hours) is uniformly distributed over the interval $[ a,b]$. It is known that the probability that the delivery takes less than $5$ hours is equal to the probability that it takes more than $11$ hours. Find $a+b$.

::: {.callout-note title="Answer" collapse=true}

$16$

:::

::: {.callout-note title="Solution" collapse=true}

We are given that $P( T< 5) =P( T >11)$ where $T \sim U[a, b]$. From this, we have:

$$
\begin{aligned}
\frac{5-a}{b-a} & =\frac{b-11}{b-a}\\
5-a & =b-11\\
a+b & =16
\end{aligned}
$$

:::