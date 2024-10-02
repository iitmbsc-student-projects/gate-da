---
title: Question-52
pagetitle: Question-52
order: 52
categories: [gaussian elimination]
---

Consider $\displaystyle A=\begin{bmatrix}
1 & 3 & 2\\
a & 6 & 2\\
0 & 9 & 5
\end{bmatrix}$. 

For what value of $\displaystyle a$ will a row interchange be required during Gaussian elimination?

::: {.callout-note title="Answer" collapse=true}
$2$
:::

::: {.callout-note title="Solution" collapse=true}


The first row needn't budge. We already have a zero in the last entry of the first column. To get a zero in the second element of the first column, we have to perform $\displaystyle R_{2}\rightarrow R_{2} -aR_{1}$, which results in:

$$
\begin{equation*}
\begin{bmatrix}
1 & 3 & 2\\
0 & 6-3a & 2-2a\\
0 & 9 & 5
\end{bmatrix}
\end{equation*}
$$

A row interchange would be required if the second row is of the form $\displaystyle \begin{bmatrix}
0 & 0 & \#
\end{bmatrix}$, which happens when $\displaystyle 6-3a=0$. From this, we get $\displaystyle a=2$.

:::
