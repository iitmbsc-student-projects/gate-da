---
title: Question-86
pagetitle: Question-86
order: 86
categories: [correlation, discrete random variables]
---


Let $X,Y$ $\sim \text{Uniform}\{1,2\}$ be i.i.d discrete random variables. Define $U=X+Y$ and $V=X$. Find the correlation coefficient between $U$ and $V$. Enter your answer correct to two decimal places.

::: {.callout-note title="Answer" collapse=true}

$0.71$

:::

::: {.callout-note title="Solution" collapse=true}

We have the covariance between $U$ and $V$ given as:

$$
E[ UV] -E[ U] E[ V]
$$

So first we compute:

$$
\begin{aligned}
E[ U] & =E[ X] +E[ Y] =2\times \frac{3}{2} =3\\
E[ V] & =E[ X] =\frac{3}{2}
\end{aligned}
$$

where we have used the linearity of expectation in the first equality. Next:

$$
\begin{aligned}
E[ UV] & =E[( X+Y) X]\\
 & =E\left[ X^{2} +XY\right]\\
 & =E\left[ X^{2}\right] +E[ XY]
\end{aligned}
$$

Using the independence of $X$ and $Y$:

$$
\begin{aligned}
E[ UV] & =E\left[ X^{2}\right] +E[ X] E[ Y]\\
 & =\frac{5}{2} +\frac{9}{4}\\
 & =\frac{19}{4}
\end{aligned}
$$

The covariance is therefore:

$$
\text{cov} =\frac{19}{4} -\frac{9}{2} =\frac{1}{4}
$$

Next we note that $\sigma _{X}^{2} =E\left[ X^{2}\right] -E[ X]^{2} =\frac{5}{2} -\frac{9}{4} =\frac{1}{4}$. Now for $\sigma _{U}$ and $\sigma _{V}$. For $\sigma _{U}^{2}$, we use independence of $X$ and $Y$ again.

$$
\begin{aligned}
\sigma _{U}^{2} & =\sigma _{X}^{2} +\sigma _{Y}^{2} =\frac{1}{2}\\
\sigma _{V}^{2} & =\frac{1}{4}
\end{aligned}
$$

Finally, the correlation coefficient is:

$$
\frac{\frac{1}{4}}{\frac{1}{2} \times \frac{1}{\sqrt{2}}} =\frac{\sqrt{2}}{2} \approx 0.71
$$

:::