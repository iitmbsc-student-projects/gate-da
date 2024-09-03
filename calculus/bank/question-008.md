---
title: Question-8
pagetitle: Question-8
order: 8
categories: [continuity]
---

Consider a function $f$ defined as:
$$
f(x) = \begin{cases} \displaystyle
     3ax + b &    x < 1, \\
     11 &  x = 1,\\
     5ax - 2b &  x > 1
   \end{cases}
$$
If $f$ is  continuous at $x=1$, then find the value of  $a+b$.

::: {.callout-note title="Answer" collapse=true}

$5$

:::

::: {.callout-note title="Solution" collapse=true}

We have:

$$
f( x) =\begin{cases}
{\displaystyle 3ax+b} & x< 1,\\
11 & x=1,\\
5ax-2b & x >1
\end{cases}
$$

Since $\displaystyle f$ is continuous at $\displaystyle x=1$, we have LHL and RHL to be equal to the value of the function at $\displaystyle x=1$. This gives us the following system of linear equations:

$$
\begin{aligned}
3a+b & =11\\
5a-2b & =11
\end{aligned}
$$

Solving this system, we get $\displaystyle a=3,b=2$. Therefore, $\displaystyle a+b=11$.


:::