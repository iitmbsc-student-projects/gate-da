---
title: Question-70 
pagetitle: Question-70
order: 70
categories: [Poisson distribution]

---

A small pharmaceutical company manufactures a rare vaccine for a specific disease. Based on historical data, the average failure rate of the vaccine is 8 per 10,000 doses due to improper storage or handling. In one year, the company distributes 5,000 doses. What is the probability that more than 2 doses fail in a given year$?$





- [ ]  0.238

  
- [ ] 0.762

  
- [ ] 0.092
  

- [ ] 0.908
 
  
::: {.callout-note title="Hint" collapse=true}
Use the concept of "Poisson distribution is a limiting case of the binomial distribution under the following conditions:

(i). $n$, the number of trials is indefinitely large, i.e., $n \to \infty$.

(ii). $p$, the constant probability of success for each trial is indefinitely small, i.e., $p \to 0$.

(iii). $np = \lambda,$ (say) is finite.




:::

::: {.callout-note title="Answer" collapse=true}

- [ ]  0.238

  
- [x] 0.762

  
- [ ] 0.092
  

- [ ] 0.908
:::

::: {.callout-note title="Solution" collapse=true}

The problem states that the failure rate of the vaccine is 8 per 10,000 doses. For a distribution of 5,000 doses, the expected number of failures $(\lambda)$ is calculated as :

$\lambda = n p = 5,000 \times \dfrac{8}{10,000} = 4$, since $p$ is small and $n$ is large.


Thus, the mean number of failures is $\lambda = 4$. 

Suppose $X$ be the random variable as number of vaccine failures. Now, we need to calculate $P(X > 2) = 1 - P(X \leq 2) ~~ \ldots (1)$.

Now, $P(X \leq 2)= P(X=0) + P(X = 1) + P(X=2)$

$P(X \leq 2) = \dfrac{e^{-4}4^0}{0!} + \dfrac{e^{-4}4^1}{1!} + \dfrac{e^{-4}4^2}{2!} = 0.238$

Thus, $P(X > 2) = 1 - 0.238 = 0.762$




:::