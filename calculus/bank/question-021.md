---
title: Question-21
pagetitle: Question-21
order: 21
categories: [function]
---

Find the domain and range of $\displaystyle f( x) =\sqrt{5-4x-x^{2}}$.

- [ ] Domain is $[0, \infty)$
- [ ] Domain is $(-\infty, -5] \cup [1, \infty)$
- [ ] Domain is  $[-5, 1]$
- [ ] Range is $[0, \infty)$
- [ ] Range is $[0, 3]$

::: {.callout-note title="Hint" collapse=true}

Find the roots of the quadratic equation and the maximum value of the quadratic expression.

:::

::: {.callout-note title="Answer" collapse=true}

- [ ] Domain is $[0, \infty)$
- [ ] Domain is $(-\infty, -5] \cup [1, \infty)$
- [x] Domain is  $[-5, 1]$
- [ ] Range is $[0, \infty)$
- [x] Range is $[0, 3]$

:::

::: {.callout-note title="Solution" collapse=true}

For the domain, we have:

\begin{equation*}
\begin{aligned}
5-4x-x^{2} & \geqslant 0\\
x^{2} +4x-5 & \leqslant 0\\
( x+5)( x-1) & \leqslant 0\\
\Longrightarrow x & \in [ -5,1]
\end{aligned}
\end{equation*}

For the range, we see that the curve $\displaystyle 5-4x-x^{2}$	is a concave downward parabola that has a maximum. So the range of $\displaystyle f$ will be $\displaystyle [ 0,\max( f( x))]$. To compute the maximum, we can compute the derivative, set it to zero and find the point of maxima.
Alternatively, if the parabola is $\displaystyle ax^{2} +bx+c$, the maximum occurs at $\displaystyle \frac{-b}{2a}$. In this case, it occurs at $\displaystyle -2$ and the corresponding function-value is $\displaystyle 3$. Therefore, the range of $\displaystyle f$ is $\displaystyle [ 0,3]$.

:::
