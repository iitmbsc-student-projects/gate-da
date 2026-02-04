---
title: Question-19
pagetitle: Question-19
order: 19
categories: [median, cdf, continuous random variable, DA-2025]
---

Let $X$ be a continuous random variable whose cumulative distribution function (CDF) $F_{X}( x)$, for some $t$, is given as follows:

$$
F_{X}( x) =\begin{cases}
0, & x\leqslant t\\
\cfrac{x-t}{4-t} , & t\leqslant x\leqslant 4\\
1, & x\geqslant 4
\end{cases}
$$

If the median of $X$ is $3$, then what is the value of $t$?

 - [ ] $2$

 - [ ] $1$

 - [ ] $-1$

 - [ ] $0$

::: {.callout-note title="Answer" collapse=true}

 - [x] $2$

 - [ ] $1$

 - [ ] $-1$

 - [ ] $0$

:::

::: {.callout-note title="Solution" collapse=true}

The median is that value of $x$ for which $F_{X}( x) =0.5$. The median here is $3$:

$$
\begin{array}{ c r l }
 & \cfrac{3-t}{4-t} & =\cfrac{1}{2}\\
\Longrightarrow  & 6-2t & =4-t\\
\Longrightarrow  & t & =2
\end{array}
$$

:::