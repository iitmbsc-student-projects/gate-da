---
title: Question-49
pagetitle: Question-49
order: 49
categories: [calculus, derivatives, maxima and minima, DA-2025]
---

Consider the function $f( x) =\cfrac{x^{3}}{3} +\cfrac{7}{2} x^{2} +10x+\cfrac{133}{2} ,x\in [ -8,0]$. Which of the following statements is/are correct?

 - [ ] The maximum value of $f$ is attained at $x=-5$

 - [ ] The minimum value of $f$ is attained at $x=-2$

 - [ ] The maximum value of $f$ is $\cfrac{133}{2}$

 - [ ] The minimum value of the derivative of $f$ is attained at $x=\cfrac{-7}{2}$.

::: {.callout-note title="Answer" collapse=true}

 - [ ] The maximum value of $f$ is attained at $x=-5$

 - [ ] The minimum value of $f$ is attained at $x=-2$

 - [x] The maximum value of $f$ is $\cfrac{133}{2}$

 - [x] The minimum value of the derivative of $f$ is attained at $x=\cfrac{-7}{2}$.

:::

::: {.callout-note title="Solution" collapse=true}

We are given $f( x) =\cfrac{x^{3}}{3} +\cfrac{7}{2} x^{2} +10x+\cfrac{133}{2}$. Taking the first and second derivative:

$$
\begin{aligned}
f^{\prime }( x) & =x^{2} +7x+10\\
 & =( x+2)( x+5)\\
 & \\
f^{\prime \prime }( x) & =2x+7
\end{aligned}
$$

$f$ has two stationary points $x=-2,x=-5$. $x=-2$ corresponds to a local minimum since $f^{\prime \prime }( -2)  >0$ and $x=-5$ corresponds to a local maximum since $f^{\prime \prime }( -5) < 0$. We also see that $f^{\prime }$ attains a minimum at $x=\cfrac{-7}{2}$. To see what the global extremum of $f$ is in its domain $[ -8,0]$, we have to compute the value of $f$ at the stationary points as well as the end-points:

$$
\begin{array}{|c|c|}
\hline
x & f( x)\\
\hline
-8 & 39.83\\
\hline
-5 & 62.33\\
\hline
-2 & 57.83\\
\hline
0 & 66.5\\
\hline
\end{array}
$$

We see that the minimum value of $f$ is attained at $x=-8$ and the maximum value at $x=0$.

:::