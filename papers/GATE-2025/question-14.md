---
title: Question-14
pagetitle: Question-14
order: 14
categories: [calculus, functions, derivatives, DA-2025]
---

Let $f( x) =\frac{e^{x} -e^{-x}}{2} ,x\in \mathbb{R}$. Let $f^{( k)}( a)$ denote the $k^{\text{th}}$ derivative of $f$ evaluated at $a$. What is the value of $f^{10}( 0)$? (Note $!$ denotes factorial)

 - [ ] $0$

 - [ ] $1$

 - [ ] $\cfrac{1}{10!}$

 - [ ] $\cfrac{2}{20!}$

::: {.callout-note title="Answer" collapse=true}

 - [x] $0$

 - [ ] $1$

 - [ ] $\cfrac{1}{10!}$

 - [ ] $\cfrac{2}{20!}$

:::

::: {.callout-note title="Solution" collapse=true}

We have:

$$
\begin{aligned}
f^{( 1)}( x) =f^{\prime }( x) & =\frac{e^{x} +e^{-x}}{2}\\
f^{( 2)}( x) =f^{\prime \prime }( x) & =\frac{e^{x} -e^{-x}}{2}
\end{aligned}
$$

We see that $f^{( 2n)}( x) =f( x)$. Therefore, $f^{( 10)}( 0) =f( 0) =0$.