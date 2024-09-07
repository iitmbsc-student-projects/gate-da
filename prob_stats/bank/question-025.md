---
title: Question-25 
pagetitle: Question-25
order: 25
categories: [Central Limit Theorem]
---
 An electrical firm manufactures light bulbs that have a length of life that is approximately normally distributed, with mean equal to 600 hours and a standard deviation of 50 hours. Find the probability that a random sample of 25 bulbs will have an average life of less than 615 hours. Enter your answer correct to two decimals.


::: {.callout-note title="Hint" collapse=true}

If $X \sim N(\mu, \sigma^2)$, then $\overline{X} \sim N\left(\mu, \dfrac{\sigma^2}{n}\right)$, where $\overline{X} = \dfrac{\sum_{i=1}^{n}x_i}{n}$.

Also, 
$Z = \dfrac{X - E(X)}{\sqrt{Var(X)}} \sim N(0,1)$ is a standard normal variate.

Use $F_Z(1.5) = 0.933$

:::

::: {.callout-note title="Answer" collapse=true}


0.93

:::

::: {.callout-note title="Solution" collapse=true}

According to the question, we have $\mu = 600$ and $\sigma = 50$.

Let $X_i$ represents the life of the $i^{th}$ bulb, then $X_i \sim N\left(600, 50\right)$, $\forall \hspace{1mm}i=1, 2, \ldots, 25$.

Now, 

$\overline{X} \sim N\left(600, \dfrac{50^2}{25}\right)$, where $\overline{X} = \dfrac{\sum_{i=1}^{25}x_i}{25}$ will represent the mean life of a random sample of 25 light bulbs.

$P( \overline{X} < 615) = P\left(\dfrac{\overline{X}-600}{50/5} < \dfrac{615-600}{50/5}\right)$

$=P\left( Z < \dfrac{15}{10}\right)$

$= P\left(Z < 1.5\right)$

$= 0.93 \hspace{2mm}\text{(till two decimal places.)}$







:::