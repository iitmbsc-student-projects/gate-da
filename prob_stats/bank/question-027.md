---
title: Question-27
pagetitle: Question-27
order: 27
categories: [Uniform Distribution]
---
The total duration of a Test cricket match between any two cricket team is uniformly distributed between 90 overs and 450 overs, both inclusive. What is the probability that the duration of a test cricket match between two cricket team is more than 400 overs? Enter the answer correct two decimal places.

::: {.callout-note title="Hint" collapse=true}

If $X \sim \text{Uniform}[a,b]$, then $E(X) = \dfrac{a+b}{2}$ and $Var(X) =  \dfrac{(b-a)^{2}}{12}$. 
Also,

$F(x) = P(X \leq x) = \dfrac{x-a}{b-a}$ 

$P(X > x) = 1-P(X \leq x) = 1- \left(\dfrac{x-a}{b-a}\right).$
:::

::: {.callout-note title="Answer" collapse=true}


0.14

:::

::: {.callout-note title="Solution" collapse=true}

According to the question $X \sim \text{Uniform}[90, 450]$.

Prob.[the duration of a test cricket match between two cricket team is more than 400 overs]

$\implies P\left(X > 400\right) = 1 - P\left( X \leq 400\right)$

$= 1 - \left(\dfrac{400-90}{450-90}\right)$

$= 1- \dfrac{310}{360}$

$\implies 1-\dfrac{31}{36} = \dfrac{5}{36} = 0.14$

:::