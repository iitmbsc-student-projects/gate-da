---
title: Question-41
pagetitle: Question-41
order: 41
categories: [differentiability]
---

Consider a function $\displaystyle f:\mathbb{R}\rightarrow \mathbb{R}$ that satisfies the following identity for all $\displaystyle x,y\in \mathbb{R}$:

$$
\begin{equation*}
f( x+y) =f( x) \cdot f( y)
\end{equation*}
$$

If $\displaystyle f$ is differentiable at $\displaystyle x=0$ with $\displaystyle f^{\prime }( 0) =2$ and $\displaystyle f( 0) \neq 0$, which of the following is true?

- [ ] $f^{\prime}(x) = f(x)$

- [ ] $f^{\prime}(x) = 2f(x)$

- [ ] $f^{\prime}(x) = 2f(x) - 1$

- [ ] $f^{\prime}(x) = f(x)/2$

::: {.callout-note title="Hint" collapse=true}
Use the definition of derivative.
:::

::: {.callout-note title="Answer" collapse=true}

- [ ] $f^{\prime}(x) = f(x)$

- [x] $f^{\prime}(x) = 2f(x)$

- [ ] $f^{\prime}(x) = 2f(x) - 1$

- [ ] $f^{\prime}(x) = f(x)/2$


:::

::: {.callout-note title="Solution" collapse=true}

From the definition of the derivative at $\displaystyle x$, we have:

$$
\begin{equation*}
\begin{aligned}
f^{\prime }( x) & =\lim\limits _{h\rightarrow 0} \ \frac{f( x+h) -f( x)}{h}\\
 & \\
 & =\lim\limits _{h\rightarrow 0} \ \frac{f( x) f( h) -f( x)}{h}\\
 & \\
 & =\lim\limits _{h\rightarrow 0} \ f( x)\frac{f( h) -1}{h}\\
 & \\
 & =f( x) \cdot \lim\limits _{h\rightarrow 0} \ \frac{f( h) -1}{h} \ 
\end{aligned}
\end{equation*}
$$

Plugging $\displaystyle x=y=0$ in the identity, we get:

$$
\begin{equation*}
f( 0) =f( 0)^{2} \Longrightarrow f( 0) =1,0
\end{equation*}
$$

Since $\displaystyle f( 0) \neq 0$ as per the question, $\displaystyle f( 0) =1$. Plugging this back into the equation of the derivative:

$$
\begin{equation*}
f^{\prime }( x) =f( x) \cdot \lim\limits _{h\rightarrow 0} \ \frac{f( h) -f( 0)}{h} =f( x) \cdot f^{\prime }( 0)
\end{equation*}
$$

We are given that $\displaystyle f^{\prime }( 0) =2$. Therefore:

$$
\begin{equation*}
\boxed{f^{\prime }( x) =2f( x)}
\end{equation*}
$$

:::
