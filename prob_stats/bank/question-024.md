---
title: Question-24
pagetitle: Question-24
order: 24
categories: [Central Limit Theorem]
---
 The average life of a coffee machine is 5 years, with a standard deviation of 1 year. Assuming that the lives of these machines follow approximately a normal distribution, find the probability that the mean life of a random sample of 16 such machines falls between 4.6 and 5.4 years. Enter your answer correct to two decimals.


::: {.callout-note title="Hint" collapse=true}

If $X \sim N(\mu, \sigma^2)$, then $\overline{X} \sim N\left(\mu, \dfrac{\sigma^2}{n}\right)$, where $\overline{X} = \dfrac{\sum_{i=1}^{n}x_i}{n}$.

Also, 
$Z = \dfrac{X - E(X)}{\sqrt{Var(X)}} \sim N(0,1)$ is a standard normal variate.

Use $F_Z(1.6) = 0.9452$

:::

::: {.callout-note title="Answer" collapse=true}


0.89

:::

::: {.callout-note title="Solution" collapse=true}

According to the question, we have $\mu = 5$ and $\sigma = 1$.

Let $X_i$ represents the life of the $i^{th}$ machine, then $X_i \sim N\left(5, 1\right)$, $\forall \hspace{1mm}i=1, 2, \ldots, 16$.

Now, 

$\overline{X} \sim N\left(5, \dfrac{1}{16}\right)$, where $\overline{X} = \dfrac{\sum_{i=1}^{16}x_i}{16}$ will represent the mean life of a random sample of 16 machines.

$P(4.6 < \overline{X} < 5.4) = P\left(\dfrac{4.6-5}{1/4} < \dfrac{\overline{X}-5}{1/4} < \dfrac{5.4-5}{1/4}\right)$

$=P\left(\dfrac{-0.4}{1/4} < Z < \dfrac{0.4}{1/4}\right)$

$= P\left(-1.6 < Z < 1.6\right)$

$= P\left(Z < 1.6\right) - P\left(Z < -1.6\right)$

Since, $Z$ is a standard normal variable, therefore $P(Z<-a) = P(Z>a)$. Thus, $P(Z<-1.6) = P(Z>1.6)$. Now,

$= P\left(Z < 1.6\right) - P\left(Z > 1.6\right)$

$= P\left(Z < 1.6\right) - \left(1-P\left(Z < 1.6\right)\right)$

$= P\left(Z < 1.6\right) - 1 + P\left(Z < 1.6\right)$

$= 2P\left(Z < 1.6\right) - 1$

$= 2F_Z(1.6) - 1$

$= 2(0.9452) - 1 = 0.89 \hspace{2mm}\text{(till two decimal places.)}$

:::