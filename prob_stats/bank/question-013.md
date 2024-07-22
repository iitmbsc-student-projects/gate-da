---
title: Question-13
pagetitle: Question-13
order: 13
categories: [Poisson Distribution]
---
 A shopkeeper sells mobile phones. The demand for mobile phone follows a Poisson distribution with mean 4.6 per week. The shopkeeper has 5 mobile phones in his shop at the beginning of a week. Find the probability that this will not be enough to satisfy the demand for mobile phones in that week. Enter your answer correct up to two decimals accuracy.


::: {.callout-note title="Hint" collapse=true}

Define random variable and find the condition for "not satisfying the demand" and apply the PMF formula of Poisson Distribution.

:::

::: {.callout-note title="Answer" collapse=true}


0.32

:::

::: {.callout-note title="Solution" collapse=true}

Let $X$ be a random variable which denotes the demand for mobile phones. 
Shopkeeper has 5 phones in his shop at the beginning of the week. So, this will not be enough to satisfy the demand for mobile phones in that week when $X > 5$.
From the question, it is given that $\lambda = 4.6$.
Thus, the required probability, $P(X > 5) = 1-P(X \leq 5)$


$= 1- \left(\dfrac{e^{-4.6}\times 4.6^0}{0!}  + \dfrac{e^{-4.6}\times 4.6^1}{1!} + \dfrac{e^{-4.6}\times 4.6^2}{2!} + \dfrac{e^{-4.6}\times 4.6^3}{3!} + \dfrac{e^{-4.6}\times 4.6^4}{4!}  + \dfrac{e^{-4.6}\times 4.6^5}{5!} \right )$  

:::