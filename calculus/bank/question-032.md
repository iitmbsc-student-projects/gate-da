---
title: Question-32
pagetitle: Question-32
order: 32
categories: [maxima and minima]
---

A rectangular, wire-fenced garden is to be constructed, one of whose sides is a wall. Find the maximum area that can be covered if the length of fencing wire available is $\displaystyle L$.

![](img-6.svg)

- [ ] $L^2$

- [ ] $\cfrac{L^2}{4}$

- [ ] $\cfrac{L^2}{8}$

- [ ] $\cfrac{L}{4}$


::: {.callout-note title="Hint" collapse=true}
Concave downards parabola
:::

::: {.callout-note title="Answer" collapse=true}

- [ ] $L^2$

- [ ] $\cfrac{L^2}{4}$

- [x] $\cfrac{L^2}{8}$

- [ ] $\cfrac{L}{4}$


:::

::: {.callout-note title="Solution" collapse=true}

Let the dimensions of the garden be $\displaystyle ( x,L-2x)$.

![](img-7.svg)

We have the following optimization problem:

$$
\begin{equation*}
\underset{x}{\max} \ \ x( L-2x)
\end{equation*}
$$

Set $\displaystyle f( x) =Lx-2x^{2}$. With $\displaystyle f^{\prime }( x) =0$, we get $\displaystyle x=\frac{L}{4}$. This corresponds to a maximum since $\displaystyle f$ is a concave downwards parabola. Thus, the maximum area that can be enclosed is $\displaystyle \frac{L}{4} \times \frac{L}{2} =\frac{L^{2}}{8}$.

:::
