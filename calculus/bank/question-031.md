---
title: Question-31
pagetitle: Question-31
order: 31
categories: [function, differentiability]
---

Suppose $\displaystyle f$ and $\displaystyle g$ are functions on $\displaystyle \mathbb{R}$ such that:

$$
\begin{equation*}
\begin{aligned}
f( 0) & =4\\
f^{\prime }( 0) & =3\\
f^{\prime }( 3) & =-1
\end{aligned} \ \ \ \ \ \ \ \ \begin{aligned}
g( 0) & =3\\
g^{\prime }( 0) & =-2
\end{aligned}
\end{equation*}
$$

Which of the following are true?

- [ ] $\displaystyle ( f\circ g)^{\prime }( 0) =2$

- [ ] $\displaystyle ( fg)^{\prime }( 0) =-6$

- [ ] $\displaystyle \left(\frac{f}{g}\right)( 0) =\frac{-17}{9}$

- [ ] $\displaystyle \left(\frac{f}{g}\right)( 0) =\frac{17}{9}$


::: {.callout-note title="Hint" collapse=true}
- Chain rule
- Product rule
- Quotient rule
:::

::: {.callout-note title="Answer" collapse=true}

- [x] $\displaystyle ( f\circ g)^{\prime }( 0) =2$

- [ ] $\displaystyle ( fg)^{\prime }( 0) =-6$

- [ ] $\displaystyle \left(\frac{f}{g}\right)( 0) =\frac{-17}{9}$

- [x] $\displaystyle \left(\frac{f}{g}\right)( 0) =\frac{17}{9}$

:::

::: {.callout-note title="Solution" collapse=true}

### Chain rule

Using the chain rule, we have:

$$
\begin{equation*}
( f\circ g)( x) =f( g( x)) \Longrightarrow ( f\circ g)^{\prime }( x) =f^{\prime }( g( x)) g^{\prime }( x)
\end{equation*}
$$

For $\displaystyle x=0$, we get $\displaystyle f^{\prime }( g( 0)) g^{\prime }( 0) =f^{\prime }( 3) g^{\prime }( 0) =( -1)( -2) =2$

### Product rule

Next, using the product rule:

$$
\begin{equation*}
( fg)( x) =f( x) g( x) \Longrightarrow ( fg)^{\prime }( x) =f^{\prime }( x) g( x) +f( x) g^{\prime }( x)
\end{equation*}
$$

For $\displaystyle x=0$, we get this to be $\displaystyle 3\times 3+4\times ( -2) =1$

### Quotient rule

Finally, using the quotient rule:

::: {.column-margin}

Note that the function $\cfrac{f}{g}(x)$ is defined only for those points where $g(x) \neq 0$. Since $g(0) \neq 0$, the function is defined at $x = 0$.

:::
$$
\begin{equation*}
\left(\frac{f}{g}\right)( x) =\frac{f( x)}{g( x)} \Longrightarrow \left(\frac{f}{g}\right)^{\prime }( x) =\frac{g( x) f^{\prime }( x) -f( x) g^{\prime }( x)}{[ g( x)]^{2}}
\end{equation*}
$$

For $\displaystyle x=0$, we get $\displaystyle \frac{3\times 3-4\times ( -2)}{3^{2}} =\frac{17}{9}$.

:::