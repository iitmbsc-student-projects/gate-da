---
title: Question-88
pagetitle: Question-88
order: 88
categories: [random sample, sum of random variables, normal]
---

A random sample of size $100$ is collected from a normal population with mean $\mu$ and variance $\sigma^{2}$. Suppose the expected value and variance of the sample mean is $50$ and $0.25$ respectively, find the value of $\mu+10\sigma$.

::: {.callout-note title="Answer" collapse=true}

$100$

:::

::: {.callout-note title="Solution" collapse=true}

Let the $i^{\text{th}}$ observation in the random sample be $X_{i} \sim N\left( \mu,\sigma^{2}\right)$, then the sample mean is:

$$
\overline{X} =\frac{X_{1} +\cdots +X_{100}}{100}
$$

The expected value of the sample mean is just just $\mu$ using the linearity of expectation and the i.i.d nature of the $100$ random variables. The variance of $\overline{X}$ is $\frac{\sigma^{2}}{100}$ using the properties of variance of a sum of independent random variables. Therefore:

$$
\begin{aligned}
\mu & =50\\
\frac{\sigma^{2}}{100} & =0.25
\end{aligned} \Longrightarrow \mu+10\sigma=100
$$

:::