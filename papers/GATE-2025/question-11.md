---
title: Question-11
pagetitle: Question-11
order: 11
categories: [expectation, DA-2025]
---

Suppose $X$ and $Y$ are random variables. The conditional expectation of $X$ given $Y$ is denoted by $E[ X\ |\ Y]$. Then $E[ E[ X\ |\ Y]]$ equals

 - [ ] $E[ X\ |\ Y]$

 - [ ] $\frac{E[ X]}{E[ Y]}$

 - [ ] $E[ X]$

 - [ ] $E[ Y]$

::: {.callout-note title="Answer" collapse=true}

 - [ ] $E[ X\ |\ Y]$

 - [ ] $\frac{E[ X]}{E[ Y]}$

 - [x] $E[ X]$

 - [ ] $E[ Y]$

:::

::: {.callout-note title="Solution" collapse=true}

For convenience, let us assume that $X,Y$ are discrete random variables with marginal PMFs $p_{X}( \cdot ) ,p_{Y}( \cdot )$ and conditional PMF $p_{X|Y}( \cdot ,\cdot )$. Then, we have:

$$
\begin{aligned}
E[ X\ |\ Y = y] & =E_{X|Y}[ X\ |\ Y=y]\\
 & =\sum\limits _{x} x\cdot p_{X|Y}( x,y)
\end{aligned}
$$

Note that the expectation here is over the conditional distribution of $X\ |\ Y$. However, $E[ X\ |\ Y]$ is itself a random variable, which is some function of the random variable $Y$. Now:

$$
\begin{aligned}
E[ E[ X\ |\ Y = y]] & =E_{Y}\left[\sum\limits _{x} x\cdot p_{X|Y}( x,y)\right]\\
 & =\sum\limits _{y}\left\{\sum\limits _{x} x\cdot p_{X|Y}( x,y)\right\} p_{Y}( y)\\
 & =\sum\limits _{x}\sum\limits _{y} x\cdot p_{Y}( y) p_{X|Y}( x,y)\\
 & =\sum\limits _{x}\sum\limits _{y} x\cdot p_{X,Y}( x,y)\\
 & =E_{X,Y}[ X]
\end{aligned}
$$

The final expectation is over the joint distribution over $X,Y$.

:::