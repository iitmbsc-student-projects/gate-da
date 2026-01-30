---
title: Question-34
pagetitle: Question-34
order: 34
categories: [regression, DA-2025]
---

Given data $\{( −1,\ 1) ,\ ( 2,\ −5) ,\ ( 3,\ 5)\}$ of the form $( x,\ y)$, we fit a model $y=wx$ using linear least-squares regression. The optimal value of $w$ is ___ (Round off to three decimal places)


::: {.callout-note title="Answer" collapse=true}

$0.286$

:::

::: {.callout-note title="Solution" collapse=true}

We can start from first principles. The SSE is:

$$
\begin{aligned}
L( w) & =\sum\limits _{i=1}^{3}( wx_{i} -y_{i})^{2}
\end{aligned}
$$

Finding the derivative of $L$ w.r.t. $w$:

$$
\begin{aligned}
\frac{dL}{dw} & =\sum\limits _{i=1}^{3} 2( wx_{i} -y_{i}) x_{i}\\
 & =2\left[\sum\limits _{i=1}^{3} x_{i}^{2}\right] w-\sum\limits _{i=1}^{3} x_{i} y_{i}
\end{aligned}
$$
Setting this to zero:

$$
\begin{aligned}
w & =\frac{\sum\limits _{i=1}^{3} x_{i} y_{i}}{\sum\limits _{i=1}^{3} x_{i}^{2}}\\
 & =\frac{-1-10+15}{1+4+9}\\
 & =\frac{2}{7}
\end{aligned}
$$

Since $\frac{d^{2} L}{dw^{2}} =2\sum\limits _{i=1}^{3} x_{i}^{2}  >0$, we have a minimum at $w=\frac{2}{7}$.


:::