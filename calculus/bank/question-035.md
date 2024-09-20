---
title: Question-35
pagetitle: Question-35
order: 35
categories: [taylor series]
---

Consider a function $\displaystyle f:[ 0,\infty )\rightarrow \mathbb{R}$ defined as:

$$
\begin{equation*}
f( x) =x+\sqrt{x}
\end{equation*}
$$

Which of the following is a first-order linear approximation for $\displaystyle f$ around $\displaystyle x=1$?

- [ ] $\displaystyle \frac{6x+1}{4}$

- [ ] $\displaystyle \frac{x+3}{2}$

- [ ] $\displaystyle \frac{3x+1}{2}$

- [ ] $\displaystyle 3x-1$


::: {.callout-note title="Answer" collapse=true}

- [ ] $\displaystyle \frac{6x+1}{4}$

- [ ] $\displaystyle \frac{x+3}{2}$

- [x] $\displaystyle \frac{3x+1}{2}$

- [ ] $\displaystyle 3x-1$


:::

::: {.callout-note title="Solution" collapse=true}

The first order approximation is given by:

$$
\begin{equation*}
L_{f}( x)\Bigl|_{x=1} =f( 1) +f^{\prime }( 1)( x-1)
\end{equation*}
$$

Now we compute $f^{\prime}(x)$:
$$
\begin{equation*}
f^{\prime }( x) =1+\frac{1}{2\sqrt{x}}
\end{equation*}
$$

We see that $\displaystyle f^{\prime }( 1) =\frac{3}{2}$, which gives the first linear approximation is:

$$
\begin{equation*}
L_{f}( x)\Bigl|_{x=1} =2+\frac{3}{2}( x-1) =\frac{3x+1}{2}
\end{equation*}
$$

:::

