---
title: Question-40
pagetitle: Question-40
order: 40
categories: [clt, bernoulli, binomial, DA-2025]
---

A random variable $X$ is said to be distributed as $\text{Bernoulli}( \theta )$, denoted by $X\sim \text{Bernoulli}( \theta )$, if 

$$
P( X=1) =\theta ,\ P( X=0) =1-\theta 
$$

for $0< \theta < 1$. Let $Y=\sum\limits _{i=1}^{300} X_{i}$, where $X_{i} \sim \text{Bernoulli}( \theta )$, $i=1,2,\cdots ,300$ be independent and identically distributed random variables with $\theta =0.25$. The value of $P( 60\leqslant Y\leqslant 90)$, after approximation through the Central Limit Theorem, is given by

(Recall that $\phi ( x) =\frac{1}{\sqrt{2\pi }}\int\limits _{-\infty }^{x} e^{-\frac{t}{2}^{2}} dt$)

 - [ ] $\phi ( 2) -\phi ( -2)$
 - [ ] $\phi ( 1) -\phi ( -1)$
 - [ ] $\phi ( 3) -\phi ( -3)$
 - [ ] $\phi ( 90) -\phi ( 60)$

::: {.callout-note title="Answer" collapse=true}

 - [x] $\phi ( 2) -\phi ( -2)$
 - [ ] $\phi ( 1) -\phi ( -1)$
 - [ ] $\phi ( 3) -\phi ( -3)$
 - [ ] $\phi ( 90) -\phi ( 60)$

:::

::: {.callout-note title="Solution" collapse=true}

Let us first state the central limit theorem. Let $X_{1} ,\cdots ,X_{n}$ be $n$ i.i.d random variables, each with mean $\mu$ and variance $\sigma ^{2}$. Then the distribution of 

$$
\frac{X_{1} +\cdots +X_{n} -n\mu }{\sqrt{n} \sigma }
$$

tends to the standard normal as $n\rightarrow \infty$. If we set $Z=\cfrac{Y-n\mu }{\sqrt{n} \sigma }$, where $Y=X_{1} +\cdots +X_{n}$, then we can approximate the distribution of $Z$ with a standard normal for large $n$.

In this question, $Y=X_{1} +\cdots +X_{n}$, $\mu =\theta$, $\sigma ^{2} =\theta ( 1-\theta )$. Now:

$$
P( 60\leqslant y\leqslant 90) =P( l\leqslant Z\leqslant r)
$$

where $l$ and $r$ can be computed by plugging in $60$ and $90$ in the equation linking $Z$ and $Y$. All that remains is to compute the two ends-points:

$$
\begin{aligned}
l=\frac{60-n\mu }{\sqrt{n} \sigma } & =\frac{60-300\times 0.25}{\sqrt{300} \times \sqrt{0.25\times 0.75}}\\
 & =-2
\end{aligned}
$$

The other end-point is:

$$
\begin{aligned}
r=\frac{90-n\mu }{\sqrt{n} \sigma } & =\frac{90-300\times 0.25}{\sqrt{300} \times \sqrt{0.25\times 0.75}}\\
 & =2
\end{aligned}
$$

We are given the CDF of the standard normal to be $\phi$. The required approximate probability is therefore $\phi ( 2) -\phi ( -2)$.

:::