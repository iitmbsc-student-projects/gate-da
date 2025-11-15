---
title: Question-83
pagetitle: Question-83
order: 83
categories: [joint pmf]
---

The joint PMF of two discrete random variables $X$ and $Y$ is given by:

$$
f_{XY}( x,y) =\begin{cases}
\frac{1}{14}( 2x+3y+1) , & x,y\in \{0,1\}\\
0, & \text{otherwise}
\end{cases}
$$

What is the value of $P( 0< X\leqslant 1\ |\ Y >0)$? Enter your answer correct to one decimal place.

::: {.callout-note title="Answer" collapse=true}

$0.6$

:::

::: {.callout-note title="Solution" collapse=true}

We can build a table of the joint PMF:

$$
\begin{array}{|c|c|c|}
\hline
 & X=0 & X=1\\
\hline
Y=0 & \frac{1}{14} & \frac{3}{14}\\
\hline
Y=1 & \frac{4}{14} & \frac{6}{14}\\
\hline
\end{array}
$$

Now:

$$
\begin{aligned}
P( Y >0) & =\frac{10}{14}
\end{aligned}
$$
And:

$$
\begin{aligned}
P( 0< X\leqslant 1\cap Y >0) & =\frac{6}{14}
\end{aligned}
$$

Therefore, the required probability is: $\frac{6}{10} =\frac{3}{5} =0.6$.

:::