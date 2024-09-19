---
title: Question-30
pagetitle: Question-30
order: 30
categories: [continuity]
---

Let $\displaystyle f:\mathbb{R}\rightarrow \mathbb{R}$ such that $\displaystyle f( x+y) =f( x) +f( y)$ for all $\displaystyle x,y\in \mathbb{R}$. $\displaystyle f$ is continuous at $\displaystyle x=0$. Which of these statements is true if $\displaystyle \mathbb{N,Z,Q}$ are the set of natural numbers, integers and rational numbers respectively?

- [ ] $\displaystyle f$ is continuous everywhere
- [ ] $\displaystyle f$ is continuous only when $\displaystyle x\in \mathbb{N}$
- [ ] $\displaystyle f$ is continuous only when $\displaystyle x\in \mathbb{Z}$
- [ ] $\displaystyle f$ is continuous only when $\displaystyle x\in \mathbb{Q}$

::: {.callout-note title="Answer" collapse=true}


- [x] $\displaystyle f$ is continuous everywhere
- [ ] $\displaystyle f$ is continuous only when $\displaystyle x\in \mathbb{N}$
- [ ] $\displaystyle f$ is continuous only when $\displaystyle x\in \mathbb{Z}$
- [ ] $\displaystyle f$ is continuous only when $\displaystyle x\in \mathbb{Q}$


:::

::: {.callout-note title="Solution" collapse=true}

Setting $\displaystyle x=y=0$, we see that $\displaystyle f( 0) =0$. Let us now compute the following limit for an arbitrary $\displaystyle a\in \mathbb{R}$:

$$
\begin{equation*}
\begin{aligned}
\lim\limits _{h\rightarrow 0} \ f( a+h) & =\lim\limits _{h\rightarrow 0} \ f( a) +f( h)\\
 & \\
 & =f( a) +\lim\limits _{h\rightarrow 0} \ f( h)\\
 & \\
 & =f( a) +f( 0)\\
 & \\
 & =f( a)
\end{aligned}
\end{equation*}
$$

We have used the continuity of $\displaystyle f$ at $\displaystyle x=0$. Since the limit at $\displaystyle x=a$ is equal to the value of the function at $\displaystyle x=a$, $\displaystyle f$ is continuous at $\displaystyle x=a$. As $\displaystyle a$ was chosen to be an arbitrary point in $\displaystyle \mathbb{R}$, $\displaystyle f$ is continuous everywhere.

:::
