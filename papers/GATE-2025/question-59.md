---
title: Question-59
pagetitle: Question-59
order: 59
categories: [calculus, derivatives, first principles, DA-2025]
---

Let $f:\mathbb{R}\rightarrow \mathbb{R}$ be such that $|f( x) -f( y) |\leqslant ( x-y)^{2}$ for all $x,y\in \mathbb{R}$. Then $f( 1) -f( 0) =$_____ (Answer in integer)

::: {.callout-note title="Answer" collapse=true}

$0$

:::

::: {.callout-note title="Solution" collapse=true}

Let us rewrite the inequality as:

$$
\begin{aligned}
-( x-y)^{2} & \leqslant f( x) -f( y) \leqslant ( x-y)^{2}
\end{aligned}
$$

Now, let $x=y+h$, with $h\neq 0$, then:

$$
\begin{aligned}
-h^{2} & \leqslant f( y+h) -f( y) \leqslant h^{2}\\
 & \\
-h & \leqslant \frac{f( y+h) -f( y)}{h} \leqslant h
\end{aligned}
$$

Taking limit $h\rightarrow 0$ for all three expressions and using the sandwich theorem, we see that for all $y\in \mathbb{R}$:

$$
\lim\limits _{h\rightarrow 0} \ \frac{f( y+h) -f( h)}{h} =0
$$

The limit is nothing but the derivative of $f$ at $y$, namely, $f^{\prime }( y)$. Therefore, $f^{\prime }( y) =0$ for all $y\in \mathbb{R}$. This shows that $f( y) =c$. The answer follows.

:::