---
title: Question-17
pagetitle: Question-17
order: 17
categories: [Poisson Distribtuion]
---
 Suppose $X \sim Poisson(\lambda)$. Find the value of $\lambda$ for which $3 P(X=3) = 2P(X=2) + 4P(X=1)$.


::: {.callout-note title="Hint" collapse=true}

Apply the PMF formula of Poisson distribution.

:::

::: {.callout-note title="Answer" collapse=true}


4

:::

::: {.callout-note title="Solution" collapse=true}

$3 P(X=3) = 2P(X=2) + 4P(X=1)$  

$3\times \left(\dfrac{e^{-\lambda} \lambda^3}{3!}\right) = 2\times \left(\dfrac{e^{-\lambda} \lambda^2}{2!}\right) + 4\times\left( \dfrac{e^{-\lambda} \lambda^1}{1!}\right)$  

$3\times \left(\dfrac{\lambda^3}{3 \times 2!}\right) = 2\times \left(\dfrac{\lambda^2}{2}\right) + 4\times\left(\lambda\right)$  
     
$\dfrac{\lambda^2}{2} = \lambda + 4$  

$\lambda^2 = 2\lambda + 8$  
$\lambda^2 - 2\lambda - 8 = 0$  
$(\lambda+2)(\lambda-4)=0 \implies \lambda = 4$  




:::