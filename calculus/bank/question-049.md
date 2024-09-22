---
title: Question-49
pagetitle: Question-49
order: 49
categories: [maxima and minima]
---

The sum of two positive numbers is $\displaystyle 16$. What is the smallest positive value of the sum of their squares?

::: {.callout-note title="Answer" collapse=true}

$128$

:::

::: {.callout-note title="Solution" collapse=true}

Let the two numbers be $\displaystyle x,16-x$. We need to solve:

$$
\begin{equation*}
\underset{x}{\max} \ x^{2} +( 16-x)^{2}
\end{equation*}
$$

Let $\displaystyle f( x) =x^{2} +( 16-x)^{2}$. Then:

$$
\begin{equation*}
f^{\prime }( x) =2x-2( 16-x) =4x-32
\end{equation*}
$$

We have a critical point at $\displaystyle x=8$. $\displaystyle f^{\prime \prime }( 8) =4 >0$, which suggests that $\displaystyle x=8$ is a local minimum for $\displaystyle f$. Since $\displaystyle f$ is bounded in the interval $\displaystyle [ 0,16]$ and is continuous, we also check for the boundaries. $\displaystyle f( 0) =f( 16) =16^{2}$ which is clearly greater than $\displaystyle f( 8) =2\times 8^{2}$. Hence, $\displaystyle x=8$ corresponds to a global minimum of $\displaystyle f$ in the interval $\displaystyle [ 0,16]$. The required value is $\displaystyle \boxed{128}$.

:::
