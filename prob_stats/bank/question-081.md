---
title: Question-81
pagetitle: Question-81
order: 81
categories: [poisson, pmf]
---

Let $X_{1} ,X_{2} ,X_{3}$ be three i.i.d Poison random variables with mean $\lambda =3$. Find the probability that exactly one of the $X_{i} =0$ and the other two variables are greater than $1$.

 - [ ] $3e^{-3}\left( 1-4e^{-3}\right)^{2}$
 - [ ] $6e^{-3}\left( 1-4e^{-3}\right)^{2}$
 - [ ] $e^{-3}\left( 1-4e^{-3}\right)^{2}$
 - [ ] $6e^{-6}\left( 1-4e^{-3}\right)^{2}$

::: {.callout-note title="Answer" collapse=true}

 - [x] $3e^{-3}\left( 1-4e^{-3}\right)^{2}$
 - [ ] $6e^{-3}\left( 1-4e^{-3}\right)^{2}$
 - [ ] $e^{-3}\left( 1-4e^{-3}\right)^{2}$
 - [ ] $6e^{-6}\left( 1-4e^{-3}\right)^{2}$

:::

::: {.callout-note title="Solution" collapse=true}

$X_{1} ,X_{2} ,X_{3}$ are i.i.d with $\text{Poisson}( \lambda )$. Using symmetry, the required probability is:

$$
P( X_{1} =0,X_{2}  >1,X_{3}  >1) \times 3
$$

Using independence, we have:

$$
\begin{aligned}
P( X_{1} =0,X_{2}  >1,X_{3}  >1) & =P( X_{1} =0)\\
 & \times P( X_{2}  >1)\\
 & \times P( X_{3}  >1)
\end{aligned}
$$

The PDF of a Poisson distribution is $f_{X}( x) =\frac{e^{-\lambda } \lambda ^{x}}{x!}$. This gives us:

$$
\begin{aligned}
P( X_{1} =0) & = e^{-\lambda }\\
 & = e^{-3}\\
P( X_{2}  >1) & =1-\left( e^{-\lambda } +\lambda e^{-\lambda }\right)\\
 & =1-4e^{-3}
\end{aligned}
$$

The required probability is:

$$
3e^{-3}\left( 1-4e^{-3}\right)^{2}
$$


:::