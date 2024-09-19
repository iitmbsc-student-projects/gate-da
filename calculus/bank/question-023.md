---
title: Question-23
pagetitle: Question-23
order: 23
categories: [maxima and minima]
---

Consider the function $\displaystyle f$ defined on the domain $\displaystyle ( 0,1)$:

\begin{equation*}
f( x) =x^{m}( x-1)^{n}
\end{equation*}

- [ ] $\displaystyle f$ has a stationary point in the interval $\displaystyle ( 0,1)$
- [ ] $\displaystyle f$ has a minimum in the interval $\displaystyle ( 0,1)$
- [ ] $\displaystyle f$ has a maximum in the interval $\displaystyle ( 0,1)$
- [ ] $\displaystyle f$ has a maximum in the interval $\displaystyle ( 0,1)$ if $\displaystyle n$ is even and a minimum in the interval $\displaystyle ( 0,1)$ if $\displaystyle n$ is odd.

::: {.callout-note title="Answer" collapse=true}

- [x] $\displaystyle f$ has a stationary point in the interval $\displaystyle ( 0,1)$
- [ ] $\displaystyle f$ has a minimum in the interval $\displaystyle ( 0,1)$
- [ ] $\displaystyle f$ has a maximum in the interval $\displaystyle ( 0,1)$
- [x] $\displaystyle f$ has a maximum in the interval $\displaystyle ( 0,1)$ if $\displaystyle n$ is even and a minimum in the interval $\displaystyle ( 0,1)$ if $\displaystyle n$ is odd.

:::

::: {.callout-note title="Solution" collapse=true}

We have:

\begin{equation*}
\begin{aligned}
f^{\prime }( x) & =mx^{m-1}( x-1)^{n} +nx^{m}( x-1)^{n-1}\\
 & =f( x)\left[\frac{m}{x} +\frac{n}{x-1}\right]\\
 & =f( x)\left[\frac{m}{x} -\frac{n}{1-x}\right]
\end{aligned}
\end{equation*}

To find the stationary points, we set $\displaystyle f^{\prime }( x) =0$. This happens when $\displaystyle x^{\star } =\frac{m}{m+n}$. This is in $\displaystyle ( 0,1)$.

\begin{equation*}
\begin{aligned}
f^{\prime \prime }( x) & =f^{\prime }( x)\left[\frac{m}{x} -\frac{n}{1-x}\right] -f( x)\left[\frac{m}{x^{2}} +\frac{n}{( 1-x)^{2}}\right]
\end{aligned}
\end{equation*}

At $\displaystyle x^{\star } =\frac{m}{m+n}$, we know that $\displaystyle f^{\prime }\left( x^{\star }\right) =0$. Therefore, $\displaystyle f^{\prime \prime }\left( x^{\star }\right)$ becomes:

\begin{equation*}
\begin{aligned}
f^{\prime \prime }\left( x^{\star }\right) & =-f\left( x^{\star }\right)\left[\frac{m}{x{^{\star }}^{2}} +\frac{n}{\left( 1-x^{\star }\right)^{2}}\right]
\end{aligned}
\end{equation*}

The sign of $\displaystyle f^{\prime \prime }\left( x^{\star }\right)$ depends on the sign of $\displaystyle f\left( x^{\star }\right)$. 

\begin{equation*}
f\left( x^{\star }\right) =x{^{\star }}^{m}\left( x^{\star } -1\right)^{n}
\end{equation*}

Since $\displaystyle x^{\star } \in ( 0,1)$, $\displaystyle f\left( x^{\star }\right)$ is positive when $\displaystyle n$ is even and negative when $\displaystyle n$ is odd. It follows that $\displaystyle x^{\star }$ corresponds to a maximum when $\displaystyle n$ is even and a minimum when $\displaystyle n$ is odd.

:::
