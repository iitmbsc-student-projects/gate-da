---
title: Question-28
pagetitle: Question-28
order: 28
categories: [Uniform Distribution]
---

The total duration of a Test cricket match between any two cricket team is uniformly distributed between 30 hours and 40 hours, both inclusive. What is the $65^{th}$ percentile for the duration of a test cricket match between any two cricket team in hours?


::: {.callout-note title="Hint" collapse=true}

If $X \sim \text{Uniform}[a,b]$, then $E(X) = \dfrac{a+b}{2}$ and $Var(X) =  \dfrac{(b-a)^{2}}{12}$. 
Also,

$F(x) = P(X \leq x) = \dfrac{x-a}{b-a}$ 

$65^{th}$ percentile denotes the value of $k$ for which $P(X \leq k) = 0.65$.
:::

::: {.callout-note title="Answer" collapse=true}


36.5

:::

::: {.callout-note title="Solution" collapse=true}

According to the question $X \sim \text{Uniform}[30, 40]$.

$65^{th}$ percentile denotes the value of $k$ for which $P(X \leq k) = 0.65$.

$\dfrac{k-30}{40-30} = 0.65 \implies \dfrac{k-30}{10} = 0.65$

$\implies k - 30 = 10 \times 0.65$

$\implies k - 30 = 6.5 \implies  k = 36.5$

:::