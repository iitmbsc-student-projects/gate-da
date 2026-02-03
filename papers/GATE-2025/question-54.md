---
title: Question-54
pagetitle: Question-54
order: 54
categories: [variance, probability, Bernoulli, Binomial, DA-2025]
---

Consider a coin-toss experiment where the probability of head showing up is $p$. In the $i^{\text{th}}$ coin toss, let $X_{i} =1$ if head appears, and $X_{i} =0$ if tail appears. Consider:
$$
\widehat{p} =\cfrac{1}{n}\sum X_{i}
$$
where $n$ is the total number of independent coin tosses. Which of the following statements is/are correct?

 - [ ] $E[\widehat{p}] =p$

 - [ ] $E[\widehat{p}] =\cfrac{p}{n}$

 - [ ] As $n$ increases, the variance of $\widehat{p}$ decreases

 - [ ] Variance of $\widehat{p}$ does not depend on $n$

::: {.callout-note title="Answer" collapse=true}

 - [x] $E[\widehat{p}] =p$

 - [ ] $E[\widehat{p}] =\cfrac{p}{n}$

 - [x] As $n$ increases, the variance of $\widehat{p}$ decreases

 - [ ] Variance of $\widehat{p}$ does not depend on $n$

:::

::: {.callout-note title="Solution" collapse=true}

From the linearity of expectation, we have $E[\widehat{p}] =\cfrac{1}{n}\sum E[ X_{i}] =p$. Note that $X_{i} \sim \text{Bernoulli}( p)$, hence $E[ X_{i}] =p$. The variance is:

$$
\sigma _{\widehat{p}}^{2} =\cfrac{1}{n^{2}}\sum \sigma _{X_{i}}^{2} =\cfrac{p( 1-p)}{n}
$$

We see that the variance decreases as $n$ increases.

:::