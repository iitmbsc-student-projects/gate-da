---
title: Question-41
pagetitle: Question-41
order: 41
categories: [exponential, geometric, DA-2025]
---

For $x\in \mathbb{R}$, the floor function is denoted by $f( x) =\lfloor x\rfloor$ and defined as follows

$$
\lfloor x\rfloor =k,k\leqslant x< k+1
$$

where $k$ is an integer. Let $Y=\lfloor X\rfloor$, where $X$ is an exponentially distributed random variable with mean $\cfrac{1}{\ln 10}$, where $\ln$ denotes the natural logarithm. For any positive integer $l$, one can write the probability of the event $Y=l$ as follows:

$$
P( Y=l) =q^{l}( 1-q)
$$

The value of $q$ is 

 - [ ] $0.1$
 - [ ] $0.01$
 - [ ] $0.5$
 - [ ] $0.434$

::: {.callout-note title="Answer" collapse=true}

 - [x] $0.1$
 - [ ] $0.01$
 - [ ] $0.5$
 - [ ] $0.434$

:::

::: {.callout-note title="Solution" collapse=true}

We have:

$$
\begin{aligned}
P( Y=l) & =P( l\leqslant X< l+1)\\
 & =F_{X}( l+1) -F_{X}( l)
\end{aligned}
$$

Recall that the CDF of the exponential distribution with parameter $\lambda$ is given by:

$$
F_{X}( x) =\begin{cases}
1-e^{-\lambda x} , & x\geqslant 0\\
0, & x< 0
\end{cases}
$$

The mean of $X$ is given by $\cfrac{1}{\lambda }$.

$$
\begin{aligned}
P( Y=l) & =\left( 1-e^{-\lambda ( l+1)}\right) -\left( 1-e^{-\lambda l}\right)\\
 & =e^{-\lambda l} -e^{-\lambda l-\lambda }\\
 & =e^{-\lambda l}\left[ 1-e^{-\lambda }\right]\\
 & =\left( e^{-\lambda }\right)^{l}\left[ 1-\left( e^{-\lambda }\right)\right]
\end{aligned}
$$

We see that $q=e^{-\lambda }$. In this case, we have $\lambda =\ln 10$, which makes $q=e^{-\lambda } =0.1$. Note how this is closely related to the geometric distribution.

:::