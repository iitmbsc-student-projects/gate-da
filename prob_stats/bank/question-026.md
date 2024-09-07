---
title: Question-26
pagetitle: Question-26
order: 26
categories: [Exponential Distribution]
---
 Waiting time in a hospital is said to follow the exponential distribution with the expected waiting time of 10 minutes. What is the probability that a person visiting a hospital has to wait for more than 15 minutes? Enter the answer correct to two decimal places accuracy.

::: {.callout-note title="Hint" collapse=true}

If $X \sim Exp(\lambda)$, then $E(X) = \dfrac{1}{\lambda}$ and $Var(X) =  \dfrac{1}{\lambda^2}$. 
Also,

$F(x) = P(X \leq x) = 1 - e^{-\lambda x}$ 

$P(X > x) = 1-P(X \leq x) = 1 - \left(1 - e^{-\lambda x}\right) = 1 - 1 + e^{-\lambda x} = e^{-\lambda x}.$
:::

::: {.callout-note title="Answer" collapse=true}


0.22

:::

::: {.callout-note title="Solution" collapse=true}

Let $X$ represents the waiting time.

According to the question, we have given "Expected waiting time is 10 minutes", i.e., $E(X) = \dfrac{1}{\lambda} = 10 \implies \lambda = \dfrac{1}{10} = 0.1$. Thus

$X \sim Exp(0.1)$. Now,

Prob.(that a person visiting a hospital has to wait for more than 15 minutes)
$\implies P (X > 15) = e^{-0.1 \times 15} = e^{-1.5} = 0.22$ 

:::