---
title: Question-7
pagetitle: Question-7
order: 7
categories: [maxima and minima]
---

Suppose $x+y=16$. What is the value of $x y$ when $x^3+y^3$ is minimum? 

::: {.callout-note title="Answer" collapse=true}

$64$

:::

::: {.callout-note title="Solution-1" collapse=true}

We have:
$$
\underset{x.y}{\min} \ x^{3} +y^{3}
$$
subject to:
$$
x+y=16
$$
This is a constrained optimization problem in two variables. But we can turn it into an unconstrained optimization problem in one variable by using the constraint:

$$
\underset{x}{\min} \ x^{3} +( 16-x)^{3}
$$
From here, we proceed as usual:

$$
f( x) =x^{3} +( 16-x)^{3}
$$

Computing the first and second derivatives:

$$
\begin{aligned}
f^{\prime }( x) & =3x^{2} -3( 16-x)^{2}\\
 & =3( x+16-x)( x-16+x)\\
 & =96( x-8)
\end{aligned}
$$

There is just one critical point, $\displaystyle x=8$. Evaluating the second partial derivative at this point:

$$
f^{\prime \prime }( 8) =96 >0
$$

Therefore $\displaystyle x=8$ corresponds to a local minimum. This is in fact a global minimum as $f$ turns out to be a quadratic function. We can now recover $\displaystyle y=8$. The value of $\displaystyle xy$ is $\displaystyle 64$ when $\displaystyle x^{3} +y^{3}$ is minimum.


:::

::: {.callout-note title="Solution-2" collapse=true}

We have:
$$
\underset{x.y}{\min} \ x^{3} +y^{3}
$$
subject to:
$$
x+y=16
$$
This is a constrained optimization problem in two variables. But we can turn it into an unconstrained optimization problem in one variable by using the constraint:

$$
\underset{x}{\min} \ x^{3} +( 16-x)^{3}
$$
We first simplify the objective function:

$$
\begin{aligned}
f( x) & =x^{3} +( 16-x)^{3}\\
 & =16^{3} -3\times 16^{2} \times x+3\times 16\times x^{2} -x^{3}\\
 & =3\times 16x^{2} -3\times 16^{2} x+16^{3}
\end{aligned}
$$

This is a quadratic equation in $\displaystyle x$ that has a parabola facing upwards. So it has a global minimum, which occurs at $\displaystyle x=\frac{3\times 16^{2}}{2\times 3\times 16} =8$. We can now recover $\displaystyle y=8$. The value of $\displaystyle xy$ is $\displaystyle 64$ when $\displaystyle x^{3} +y^{3}$ is minimum.


:::