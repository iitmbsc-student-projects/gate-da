---
title: Question-87
pagetitle: Question-87
order: 87
categories: [cdf, change of variable, continuous random variable]
---


If $X\sim \text{Exp}( \lambda )$, then find the PDF of $Y=X^{2}$.

 - [ ] $f_{Y}( x) =\begin{cases}
\lambda e^{\lambda y^{2}} , & y >0\\
0, & \text{otherwise}
\end{cases}$

 - [ ] $f_{Y}( y) =\begin{cases}
\frac{1}{2\sqrt{y}} \lambda e^{-\lambda \sqrt{y}} , & y >0\\
0, & \text{otherwise}
\end{cases}$

 - [ ] $f_{Y}( y) =\begin{cases}
2\sqrt{y} e^{-\lambda \sqrt{y}} , & y >0\\
0, & \text{otherwise}
\end{cases}$

 - [ ]  $f_{Y}( y) =\begin{cases}
\frac{1}{2\sqrt{y}} \lambda e^{\lambda \sqrt{y}} , & y >0\\
0, & \text{otherwise}
\end{cases}$

::: {.callout-note title="Answer" collapse=true}

 - [ ] $f_{Y}( x) =\begin{cases}
\lambda e^{\lambda y^{2}} , & y >0\\
0, & \text{otherwise}
\end{cases}$

 - [x] $f_{Y}( y) =\begin{cases}
\frac{1}{2\sqrt{y}} \lambda e^{-\lambda \sqrt{y}} , & y >0\\
0, & \text{otherwise}
\end{cases}$

 - [ ] $f_{Y}( y) =\begin{cases}
2\sqrt{y} e^{-\lambda \sqrt{y}} , & y >0\\
0, & \text{otherwise}
\end{cases}$

 - [ ]  $f_{Y}( y) =\begin{cases}
\frac{1}{2\sqrt{y}} \lambda e^{\lambda \sqrt{y}} , & y >0\\
0, & \text{otherwise}
\end{cases}$

:::

::: {.callout-note title="Solution" collapse=true}

The PDF of $X$ is:

$$
f_{X}( x) =\begin{cases}
\lambda e^{-\lambda x} , & x\geqslant 0\\
0, & \text{otherwise}
\end{cases}
$$

Its CDF is:

$$
F_{X}( x) =\begin{cases}
1-e^{-\lambda x} , & x\geqslant 0\\
0, & \text{otherwise}
\end{cases}
$$


The CDF of $Y=X^{2}$ is:

$$
\begin{aligned}
F_{Y}( y) & =P( Y\leqslant y)\\
 & =P\left( X^{2} \leqslant y\right)
\end{aligned}
$$

If $y\leqslant 0$, then $P\left( X^{2} \leqslant y\right) =0$, since $X^{2}$ is a non-negative random variable. Therefore, we can safely assume that $y >0$. Now:

$$
\begin{aligned}
P\left( X^{2} \leqslant y\right) & =P\left( -\sqrt{y} \leqslant X\leqslant \sqrt{y}\right)\\
 & =F_{X}\left(\sqrt{y}\right) -F_{X}\left( -\sqrt{y}\right)\\
 & =F_{X}\left(\sqrt{y}\right)\\
 & =1-e^{-\lambda \sqrt{y}}
\end{aligned}
$$

Therefore, we can express the CDF of $Y$ as:

$$
\begin{aligned}
F_{Y}( y) & =\begin{cases}
1-e^{-\lambda \sqrt{y}} , & y\geqslant 0\\
0, & \text{otherwise}
\end{cases}
\end{aligned}
$$

Differentiating this with respect to $y$ gives us the PDF of $Y$:

$$
\begin{aligned}
f_{Y}( y) & =\begin{cases}
\frac{\lambda }{2\sqrt{y}} e^{-\lambda \sqrt{y}} , & y\geqslant 0\\
0, & \text{otherwise}
\end{cases}
\end{aligned}
$$

:::