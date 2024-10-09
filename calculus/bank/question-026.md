---
title: Question-26
pagetitle: Question-26
order: 26
categories: [function]
---

Let $\displaystyle f:\mathbb{R}\rightarrow \mathbb{R}$

$$
\begin{equation*}
f( x) =\frac{e^{x} -e^{-x}}{2}
\end{equation*}
$$

Consider the following statements:

- $\displaystyle f$ is onto
- $\displaystyle f$ is one-one
- $\displaystyle f^{-1}$ exists
- $\displaystyle f^{-1}( x) = \ln \left(x+\sqrt{x^{2} +1}\right)$
- $\displaystyle f^{-1}$ doesn't exist
- $\displaystyle f( x) \geqslant 0$ for all $\displaystyle x\in \mathbb{R}$

Find the number of true statements.

::: {.callout-note title="Answer" collapse=true}
$4$
:::

::: {.callout-note title="Solution" collapse=true}

### One-one

$$
\begin{equation*}
\begin{aligned}
f( x_{1}) & =f( x_{2})\\
e^{x_{1}} -e^{x_{2}} & =e^{-x_{1}} -e^{-x_{2}}\\
\left[ e^{x_{1}} -e^{x_{2}}\right] e^{x_{1} +x_{2}} & =e^{x_{2}} -e^{x_{1}}\\
\left[ e^{x_{1}} -e^{x_{2}}\right]\left( e^{x_{1} +x_{2}} +1\right) & =0\\
e^{x_{1}} & =e^{x_{2}}\\
\Longrightarrow x_{1} & =x_{2}
\end{aligned}
\end{equation*}
$$

We see that $\displaystyle f$ is indeed one-one.

### Onto

Setting $\displaystyle z:=e^{x}$ and $\displaystyle y:=f( x)$, we have:

$$
\begin{equation*}
\begin{aligned}
2y & =z-\frac{1}{z}\\
z^{2} -( 2y) z-1 & =0
\end{aligned}
\end{equation*}
$$

This gives us:

$$
\begin{equation*}
z=y\pm \sqrt{y^{2} +1}
\end{equation*}
$$

Since $\displaystyle z=e^{x}  >0$, we have:

$$
\begin{equation*}
z=y+\sqrt{y^{2} +1}
\end{equation*}
$$

Substituting $\displaystyle z:=e^{x}$ back:

$$
\begin{equation*}
e^{x} =y+\sqrt{y^{2} +1} \Longrightarrow x=\ln\left( y+\sqrt{y^{2} +1}\right)
\end{equation*}
$$

This is well defined as $\displaystyle y+\sqrt{y^{2} +1}$ is always positive. Since $\displaystyle y$ can assume any real value and there is a corresponding $\displaystyle x$ for every such $\displaystyle y$, $\displaystyle f$ is onto.

### Inverse

Since $\displaystyle f$ is both one-one and onto, $\displaystyle f$ is bijective. The inverse exists, is unique and is given by:

$$
\begin{equation*}
f^{-1}( x) =\ln\left( x+\sqrt{1+x^{2}}\right)
\end{equation*}
$$

:::
