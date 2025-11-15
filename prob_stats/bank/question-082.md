---
title: Question-82
pagetitle: Question-82
order: 82
categories: [exponential, continuous random variable, cdf]
---

The time (in minutes) a customer spends inside a service center follows an exponential distribution with an average of $\displaystyle 10$ minutes. What is the probability that a customer has to wait at least $\displaystyle 12$ more minutes in the center given that he has already spent $\displaystyle 10$ minutes in the center? Enter the answer correct to two decimal places.

::: {.callout-note title="Answer" collapse=true}

$\displaystyle 0.30$

:::

::: {.callout-note title="Solution" collapse=true}

We can use the memory-less property of exponential distributions. We see that the additional time spent given the 10 minutes already spent is also exponential with the same mean. The CDF of an exponential distribution with mean $\displaystyle \frac{1}{\lambda }$ is $\displaystyle F_{X}( x) =1-e^{-\lambda x}$. The required probability is:

$$
P( X\geqslant 12) =1-F_{X}( 12) =e^{-1.2} \approx 0.30
$$

:::