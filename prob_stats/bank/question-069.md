---
title: Question-69 
pagetitle: Question-69
order: 69
categories: [Poisson distribution]
---

Six fair coin are tossed 6400 times. Using the Poisson distribution, find the approximate probability of getiing six heads $r$ times.





- [ ]  $\dfrac{e^{-100}(100)^r}{r!} ~;~ r = 0, 1, 2, \ldots$

  
- [ ] $\dfrac{e^{-100}(100)^r}{r!} ~;~ r = 1, 2, \ldots$

  
- [ ] $\dfrac{e^{-6400}(6400)^r}{r!} ~;~ r = 0, 1, 2, \ldots$
  

- [ ] $\dfrac{e^{-3200}(3200)^r}{r!} ~;~ r = 0, 1, 2, \ldots$
 
  
::: {.callout-note title="Hint" collapse=true}
Use the concept of "Poisson distribution is a limiting case of the binomial distribution under the following conditions:

(i). $n$, the number of trials is indefinitely large, i.e., $n \to \infty$.

(ii). $p$, the constant probability of success for each trial is indefinitely small, i.e., $p \to 0$.

(iii). $np = \lambda,$ (say) is finite.




:::

::: {.callout-note title="Answer" collapse=true}

- [x]  $\dfrac{e^{-100}(100)^r}{r!} ~;~ r = 0, 1, 2, \ldots$

  
- [ ] $\dfrac{e^{-100}(100)^r}{r!} ~;~ r = 1, 2, \ldots$

  
- [ ] $\dfrac{e^{-6400}(6400)^r}{r!} ~;~ r = 0, 1, 2, \ldots$
  

- [ ] $\dfrac{e^{-3200}(3200)^r}{r!} ~;~ r = 0, 1, 2, \ldots$
  
:::

::: {.callout-note title="Solution" collapse=true}

The probability of obtaining six heads in one throw of six coins (a single trial), is $p = \left(\dfrac{1}{2}\right)^6$.

$\lambda = np = 6400 \times \left(\dfrac{1}{2}\right)^6 = 100$

Hence, using Poisson Probability distribution, the required probability of getting 6 heads $r$ times is given by:

$P(X = r) = \dfrac{e^{-\lambda} \lambda^r}{r!} = \dfrac{e^{-100} (100)^r}{r!} ~;~ r = 0, 1, 2, \ldots$


:::