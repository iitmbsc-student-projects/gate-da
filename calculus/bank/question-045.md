---
title: Question-45
pagetitle: Question-45
order: 45
categories: [function]
---

Consider:

$$
\begin{equation*}
f( x) =\ln\left( x+\sqrt{1+x^{2}} \ \right)
\end{equation*}
$$

- [ ] $\displaystyle f$ is an even function
- [ ] $\displaystyle f$ is an odd function
- [ ] $\displaystyle f$ is neither even nor odd

::: {.callout-note title="Hint" collapse=true}
Multiply the quantity inside the logarithm for $f(x)$ and $f(-x)$
:::

::: {.callout-note title="Answer" collapse=true}

- [ ] $\displaystyle f$ is an even function
- [x] $\displaystyle f$ is an odd function
- [ ] $\displaystyle f$ is neither even nor odd


:::

::: {.callout-note title="Solution" collapse=true}

Let us multiply the terms inside the logarithm for $\displaystyle f( x)$ and $\displaystyle f( -x)$. This seems like a reasonable thing to do since we know that $\displaystyle \ln( ab) =\ln( a) +\ln( b)$:

$$
\begin{equation*}
\left(\sqrt{1+x^{2}} +x\right)\left(\sqrt{1+x^{2}} -x\right) =1
\end{equation*}
$$

This is convenient. Since both products are positive for all $\displaystyle x$, we can take $\displaystyle \ln$ on both sides:

$$
\begin{equation*}
\ln\left(\sqrt{1+x^{2}} +x\right) =-\ln\left(\sqrt{1+x^{2}} -x\right)
\end{equation*}
$$

This is nothing but:

$$
\begin{equation*}
f( x) =-f( -x)
\end{equation*}
$$

This shows that $\displaystyle f$ is an odd function.

:::
