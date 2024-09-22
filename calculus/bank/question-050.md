---
title: Question-50
pagetitle: Question-50
order: 50
categories: [maxima and minima]
---

Find the points on the ellipse $\displaystyle 4x^{2} +y^{2} =4$ that are farthest away from the point $\displaystyle ( 1,0)$.

- [ ] $(0, 1)$

- [ ] $(0, -1)$

- [ ] $\displaystyle \left(\frac{-1}{3} ,\frac{4\sqrt{2}}{3}\right)$

- [ ] $\displaystyle \left(\frac{-1}{3} ,\frac{-4\sqrt{2}}{3}\right)$


::: {.callout-note title="Answer" collapse=true}

- [ ] $(0, 1)$

- [ ] $(0, -1)$

- [x] $\displaystyle \left(\frac{-1}{3} ,\frac{4\sqrt{2}}{3}\right)$

- [x] $\displaystyle \left(\frac{-1}{3} ,\frac{-4\sqrt{2}}{3}\right)$
:::

::: {.callout-note title="Solution" collapse=true}

Let $\displaystyle ( x,y)$ be a point on the ellipse. The square of the distance of this point from $\displaystyle ( 1,0)$ is:

$$
\begin{equation*}
d^{2} =( 1-x)^{2} +y^{2}
\end{equation*}
$$

Since $\displaystyle ( x,y)$ lies on the ellipse, this turns into:

$$
\begin{equation*}
\begin{aligned}
d^{2} & =( 1-x)^{2} +4-4x^{2}\\
 & =1+x^{2} -2x+4-4x^{2}\\
 & =5-2x-3x^{2}
\end{aligned}
\end{equation*}
$$

The optimization problem is therefore:

$$
\begin{equation*}
\underset{x}{\max} \ \ 5-2x-3x^{2}
\end{equation*}
$$

subject to $\displaystyle x\in [ -1,1]$. This is a constrained optimization problem. But let us not worry about that right now and try to treat this as though it were unconstrained. The parabola is concave downward and has a global maximum at $\displaystyle x=-\frac{1}{3}$. Thankfully, this value is inside the range $\displaystyle [ -1,1]$. We can get $\displaystyle y=\pm \sqrt{4-\frac{4}{9}} =\pm \frac{4}{3}\sqrt{2}$. This gives us two points:

$$
\begin{equation*}
\boxed{\left(\frac{-1}{3} ,\frac{4\sqrt{2}}{3}\right) ,\ \left(\frac{-1}{3} ,\frac{-4\sqrt{2}}{3}\right)}
\end{equation*}
$$

:::
