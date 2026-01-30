---
title: Question-36
pagetitle: Question-36
order: 36
categories: [normal distribution, variance, DA-2025]
---

Let $Y=Z^{2}$, $Z=\frac{X-\mu }{\sigma }$ , where $X$ is a normal random variable with mean $\mu$ and variance $\sigma ^{2}$. The variance of $Y$ is

 - [ ] 1
 - [ ] 2
 - [ ] 3
 - [ ] 4

::: {.callout-note title="Answer" collapse=true}

 - [ ] 1
 - [x] 2
 - [ ] 3
 - [ ] 4

:::

::: {.callout-note title="Solution" collapse=true}

We will use the result $\sigma _{X}^{2} =\mathbb{E}\left[ X^{2}\right] -\mathbb{E}[ X]^{2}$ repeatedly. First, we note that $Z\sim \mathcal{N}( 0,1)$, the standard normal random variable. Next:

$$
\begin{aligned}
\sigma _{Y}^{2} & =\mathbb{E}\left[ Y^{2}\right] -\mathbb{E}[ Y]^{2}\\
 & =\mathbb{E}\left[ Z^{4}\right] -\mathbb{E}\left[ Z^{2}\right]^{2}
\end{aligned}
$$

We see that $\sigma _{Z}^{2} =\mathbb{E}\left[ Z^{2}\right] -\mathbb{E}[ Z]^{2}$. Since $\mathbb{E}[ Z] =0$ and $\sigma _{Z} =1$, we have $\mathbb{E}\left[ Z^{2}\right] =1$. This leaves us with $\mathbb{E}\left[ Z^{4}\right]$, the fourth moment of $Z$, which is $3$. Therefore, the variance of $Y$ is $2$. 

One can also look at $Z^{2}$ as a Chi-squared random variable with one degree of freedom. The variance of a Chi-squared random variable with $k$ degrees of freedom is $2k$. Here, $k=1$, so the variance is $2$. Recall that a Chi-squared random variable with $k$ degrees of freedom is defined as the sum of squares of $k$ independent standard normal random variables.


Read on if you want to know how the fourth moment is computed from first principles.

::: {.callout-tip title="Fourth Moment" collapse=true}
We can go back to first principles here:

$$
\begin{aligned}
\mathbb{E}\left[ Z^{4}\right] & =\frac{1}{\sqrt{2\pi }} \ \int\limits _{-\infty }^{\infty } z^{4} \cdot e^{-\frac{z^{2}}{2}} dz
\end{aligned}
$$

Now, recall that from the product rule for derivatives we can get hold of the formula for integration by parts:

$$
\begin{aligned}
\int\limits _{a}^{b} d( uv) & =\int\limits _{a}^{b} udv+\int\limits _{a}^{b} vdu\\
\Longrightarrow \int\limits _{a}^{b} udv & =\int\limits _{a}^{b} d( uv) -\int\limits _{a}^{b} vdu\\
 & =[ uv]_{a}^{b} -\int\limits _{a}^{b} vdu
\end{aligned}
$$
Let us set $u=z^{3}$ and $dv=z \cdot e^{\frac{-z^{2}}{2}}$:

$$
\begin{aligned}
\frac{1}{\sqrt{2\pi }} \ \int\limits _{-\infty }^{\infty } z^{4} \cdot e^{-\frac{z^{2}}{2}} dz & =\frac{1}{\sqrt{2\pi }} \ \left[ z^{3} \cdot e^{\frac{-z^{2}}{2}} \cdot ( -1)\right]_{-\infty }^{\infty }\\
 & -\frac{1}{\sqrt{2\pi }} \ \int\limits _{-\infty }^{\infty } 3z^{2} \cdot e^{\frac{-z^{2}}{2}} \cdot ( -1) dz\\
 & =3
\end{aligned}
$$

Here, the first term is zero since $\lim\limits _{z\rightarrow \pm \infty } z^{3} \cdot e^{\frac{-z^{2}}{2}} =0$. The second term happens to be the second moment of $Z$ (which is $1$) scaled by $3$.
:::


:::