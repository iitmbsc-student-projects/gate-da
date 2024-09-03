---
title: Question-12
pagetitle: Question-12
order: 12
categories: [Binomial Distribution]
---
If a fair coin is tossed an even number $2n$ times, then what is the probability of obtaining more heads than tails? 

- [ ] $^{2n}C_{n} \left(\dfrac{1}{2}\right)^{2n}$
  
- [ ] $\dfrac{1}{2}\left\{1-^{2n}C_{n}\left(\dfrac{1}{2}\right)^{2n}\right\}$  
  
- [ ] $1 -^{2n}C_{n}\left(\dfrac{1}{2}\right)^{n}$  
  
- [ ] $^{2n}C_{n}\left(\dfrac{1}{2}\right)^{n}$
  

::: {.callout-note title="Hint" collapse=true}

  Start with defining random variables as $X$ represents number of heads and $Y$ represents number of tails. Given, total number of trials is $2n$ and consider
  $P(X>Y) + P(X<Y) + P(X=Y) = 1$

:::

::: {.callout-note title="Answer" collapse=true}

- [ ] $^{2n}C_{n} \left(\dfrac{1}{2}\right)^{2n}$
  
- [x] $\dfrac{1}{2}\left\{1-^{2n}C_{n}\left(\dfrac{1}{2}\right)^{2n}\right\}$  
  
- [ ] $1 -^{2n}C_{n}\left(\dfrac{1}{2}\right)^{n}$  
  
- [ ] $^{2n}C_{n}\left(\dfrac{1}{2}\right)^{n}$
:::

::: {.callout-note title="Solution" collapse=true}

Let $X$ represents number of heads and $Y$ represents number of tails. Total number of trials is $2n$.  
    $P(X>Y) + P(X<Y) + P(X=Y) = 1\hspace{20mm} \ldots (i)$  
    Since, by symmetry, $p=1-p=\dfrac{1}{2} \implies P(X>Y) = P(X<Y)$. Therefore, equation $(i)$ will be:
   $2P(X>Y) = 1 - P(X = Y)\hspace{20mm} \ldots (ii)$  
    In $2n$ trials, $X = Y \implies$ Number of heads $=$ Number of tails $=n$. Thus, the equation $(ii)$ will be:
    $2 P (X > Y ) = 1 - ^{2n}C_{n}\left(\dfrac{1}{2}\right)^{n}\left(\dfrac{1}{2}\right)^{n}$   
    $\implies P(X > Y) = \dfrac{1}{2}\left\{1-^{2n}C_{n}\left(\dfrac{1}{2}\right)^{2n}\right\}$

:::