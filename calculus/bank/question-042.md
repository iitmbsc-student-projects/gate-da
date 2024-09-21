---
title: Question-42
pagetitle: Question-42
order: 42
categories: [maxima and minima]
---

Consider the function defined on $\displaystyle \mathbb{R} \backslash \{0\}$:

$$
\begin{equation*}
f( x) =x+\frac{1}{x}
\end{equation*}
$$

- [ ] $\displaystyle f$ has a local maximum at $\displaystyle x=1$
- [ ] $\displaystyle f$ has a global maximum at $\displaystyle x=1$
- [ ] $\displaystyle f$ has a local minimum at $\displaystyle x=1$
- [ ] $\displaystyle f$ has a global minimum at $\displaystyle x=1$
- [ ] $\displaystyle f$ has a local maximum at $\displaystyle x=-1$
- [ ] $\displaystyle f$ has a global maximum at $\displaystyle x=-1$
- [ ] $\displaystyle f$ has a local minimum at $\displaystyle x=-1$
- [ ] $\displaystyle f$ has a global minimum at $\displaystyle x=-1$

::: {.callout-note title="Hint" collapse=true}
First and second derivatives
:::

::: {.callout-note title="Answer" collapse=true}

- [ ] $\displaystyle f$ has a local maximum at $\displaystyle x=1$
- [ ] $\displaystyle f$ has a global maximum at $\displaystyle x=1$
- [x] $\displaystyle f$ has a local minimum at $\displaystyle x=1$
- [ ] $\displaystyle f$ has a global minimum at $\displaystyle x=1$
- [x] $\displaystyle f$ has a local maximum at $\displaystyle x=-1$
- [ ] $\displaystyle f$ has a global maximum at $\displaystyle x=-1$
- [ ] $\displaystyle f$ has a local minimum at $\displaystyle x=-1$
- [ ] $\displaystyle f$ has a global minimum at $\displaystyle x=-1$

:::

::: {.callout-note title="Solution" collapse=true}

We have:

$$
\begin{equation*}
f^{\prime }( x) =1-\frac{1}{x^{2}}
\end{equation*}
$$

Setting this to zero, we get $\displaystyle x=\pm 1$ as the two critical points. Now for the second derivative:

$$
\begin{equation*}
f^{\prime \prime }( x) =\frac{2}{x^{3}}
\end{equation*}
$$

We see that $\displaystyle f^{\prime \prime }( 1)  >0$ and $\displaystyle f^{\prime \prime }( -1) < 0$. This implies that $\displaystyle x=1$ corresponds to a local minimum and $\displaystyle x=-1$ corresponds to a local maximum. These two points cannot corresponds to global extrema since:

$$
\begin{equation*}
\lim\limits _{x\rightarrow \infty } \ f( x) =\infty ,\ \ \ \lim\limits _{x\rightarrow -\infty } \ f( x) =-\infty 
\end{equation*}
$$

:::
