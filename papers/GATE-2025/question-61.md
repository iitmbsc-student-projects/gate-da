---
title: Question-61
pagetitle: Question-61
order: 61
categories: [bernoulli, binomial, expectation, probability, DA-2025]
---

A bag contains $5$ white and $10$ black balls. In a random experiment, $n$ balls are drawn from the bag one at a time with replacement. Let $S_{n}$ denote the total number of black balls drawn in the experiment. 

The expectation of $S_{100}$ denoted by $E[ S_{100}] =$____.

(Round off to one decimal place) 

::: {.callout-note title="Answer" collapse=true}

$66.7$

:::

::: {.callout-note title="Solution" collapse=true}

Since the balls are drawn one at a time with replacement, we can assume that the draws are independent. Since the bag remains the same, we are also assured of identical distributions. Let $X_{i}$ denote the random variable corresponding to the $i^{\text{th}}$ draw that is $1$ if a black ball is drawn and $0$ otherwise. Then, $X_{i} \sim \text{Bernoulli}( p)$, where $p=\cfrac{10}{15} =\cfrac{2}{3}$. $S_{n}$ can then be written as $S_{n} =X_{1} +\cdots +X_{n}$. Therefore, $S_{n} \sim \text{Binomial}( n,p)$. The expectation of $S_{n}$ is $E[ S_{n}] =np$. The required answer is $E[ S_{100}] =\cfrac{200}{3} \approx 66.7$.

:::