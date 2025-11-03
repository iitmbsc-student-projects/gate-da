---
title: Question-76
pagetitle: Question-76
order: 76
categories: [expectation, continuous random variables]
---

The unit interval $(0,1)$ is divided at a point chosen uniformly distributed over $(0,1)$ in $\mathbb{R}$ into two disjoint subintervals. Find the expected length of the subinterval that contains $0.4$ rounded off to two decimal places.

::: {.callout-note title="Answer" collapse=true}

$0.74$

:::

::: {.callout-note title="Solution" collapse=true}

Let the length of the sub-interval be $\displaystyle L$. Then:

$$
L=\begin{cases}
1-X, & X< 0.4\\
X & X\geqslant 0.4
\end{cases}
$$

Since the PDF of the uniform distribution $\displaystyle U[ 0,1]$ in its support is just the constant $\displaystyle 1$, we can compute the expectation of $\displaystyle L$ as:

$$
\begin{aligned}
\mathbb{E}[ L] & =\int\limits _{0}^{0.4} 1\cdot ( 1-x) dx+\int\limits _{0.4}^{1} 1\cdot xdx\\
 & \\
 & =\left[ x-\frac{x^{2}}{2}\right]_{0}^{0.4} +\left[\frac{x^{2}}{2}\right]_{0.4}^{1}\\
 & \\
 & =0.74
\end{aligned}
$$


:::