---
title: Question-8
pagetitle: Question-8
order: 8
categories: [PCA]
---

Consider a dataset in $\displaystyle \mathbb{R}^{5}$ in the context of PCA with mean zero. The only non-zero eigenvalue of the covariance matrix of the dataset is $\displaystyle 2$. What is the least possible variance along the first principal component expressed as a percentage of the total variance? Assume that the total variance is the sum of the variances along the five standard (basis) directions in $\displaystyle \mathbb{R}^{5}$.

::: {.callout-note title="Answer" collapse=true}

$20$

:::

::: {.callout-note title="Solution" collapse=true}

The total variance is the sum of the eigenvalues of the covariance matrix:

$$
\begin{equation*}
\lambda _{1} +\cdots +\lambda _{5}
\end{equation*}
$$

The first eigenvalue has to be $\displaystyle 2$. Therefore, the percentage variance captured is:

$$
\begin{equation*}
\frac{\lambda _{1}}{\lambda _{1} +\cdots +\lambda _{5}} =\frac{2}{\lambda _{1} +\cdots +\lambda _{5}}
\end{equation*}
$$

To get the least variance, the denominator has to be the largest. This happens if all eigenvalues are non-zero:

$$
\begin{equation*}
\frac{2}{2+2+2+2+2} =\frac{1}{5}
\end{equation*}
$$

Expressed as a percentage, we get $\displaystyle 20\%$.

:::