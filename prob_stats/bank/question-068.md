---
title: Question-68 
pagetitle: Question-68
order: 68
categories: [Probability]
---
A box contains 4 red balls and 6 blue balls. Two balls are drawn one by one, without replacement. Let 
$X$ be the number of red balls drawn. What is the probability that exactly 1 red ball is drawn, given that at least one red ball is drawn$?$


Choose the correct options.



- [ ]  $\dfrac{8}{15}$

  
- [ ] $\dfrac{1}{3}$

  
- [ ] $\dfrac{2}{3}$
  

- [ ] $\dfrac{4}{5}$
 
  
::: {.callout-note title="Hint" collapse=true}
We have to calculate $P(X = 1 ~ | ~ X \geq 1)$, which is the conditional probability.

So, 
$P(X = 1 ~ | ~ X \geq 1) = \dfrac{P(X = 1 \cap X \geq 1)}{P(X \geq 1)}$





:::

::: {.callout-note title="Answer" collapse=true}
- [ ]  $\dfrac{8}{15}$

  
- [ ] $\dfrac{1}{3}$

  
- [ ] $\dfrac{2}{3}$
  

- [x] $\dfrac{4}{5}$
  
:::

::: {.callout-note title="Solution" collapse=true}

$P(X = 1 ~ | ~ X \geq 1) = \dfrac{P(X = 1 \cap X \geq 1)}{P(X \geq 1)}$

Now,
$P(X = 1) = \dfrac{^4C_1 \times ^6C_1}{^{10}C_2} = \dfrac{24}{45} = \dfrac{8}{15}$

Next, calculate $P(X \geq 1) = 1 - P(X < 1) = 1 - P(X = 0)$

$P(X = 0 ) = \dfrac{^4C_0 \times ^6C_2}{^{10}C_2} = \dfrac{15}{45} = \dfrac{1}{3}$

So, $P(X \geq 1 ) = 1 - P(X =0) = 1- \dfrac{1}{3} = \dfrac{2}{3}$

Thus, the required probability:

$P(X = 1 ~ | ~ X \geq 1) = \dfrac{P(X = 1 \cap X \geq 1)}{P(X \geq 1)} = \dfrac{8}{15} \times \dfrac{3}{2} = \dfrac{4}{5}$



:::