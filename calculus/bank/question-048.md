---
title: Question-48
pagetitle: Question-48
order: 48
categories: [differentiability, maxima and minima]
---

For what value of $\displaystyle c$ is the function $\displaystyle f$ strictly increasing in $\displaystyle ( -\infty ,\infty )$?

$$
\begin{equation*}
f( x) =cx+\frac{1}{x^{2} +3}
\end{equation*}
$$

- [ ] $c > 1$

- [ ] $c < 1$

- [ ] $c > \cfrac{1}{8}$

- [ ] $c > \cfrac{3}{8}$


::: {.callout-note title="Answer" collapse=true}

- [ ] $c > 1$

- [ ] $c < 1$

- [x] $c > \cfrac{1}{8}$

- [ ] $c > \cfrac{3}{8}$

:::

::: {.callout-note title="Solution" collapse=true}

For $\displaystyle f$ to be strictly increasing in $\displaystyle \mathbb{R}$, $\displaystyle f^{\prime }( x)  >0$ for all $\displaystyle x\in \mathbb{R}$. 

$$
\begin{equation*}
f^{\prime }( x) =c-\frac{2x}{\left( x^{2} +3\right)^{2}}
\end{equation*}
$$

$\displaystyle f^{\prime }( x)  >0$ for all $\displaystyle x\in \mathbb{R}$ provided $\displaystyle c >\frac{2x}{\left( x^{2} +3\right)^{2}}$ for all $\displaystyle x\in \mathbb{R}$. We need to see if there is a possibility for this. Therefore, consider:

$$
\begin{equation*}
g( x) =\frac{x}{\left( x^{2} +3\right)^{2}}
\end{equation*}
$$

We notice that $\displaystyle g( x)\rightarrow 0$ as $\displaystyle x\rightarrow \pm \infty$. This shows that the x-axis is an asymptote to $\displaystyle g$. We also note that $\displaystyle g( x) < 0$ for $\displaystyle x< 0$ and $\displaystyle g( x)  >0$ for $\displaystyle x >0$. Let us try to understand $\displaystyle g$ better using its first derivative:

$$
\begin{equation*}
\begin{aligned}
g^{\prime }( x) & =\frac{\left( x^{2} +3\right)^{2} -4x^{2}\left( x^{2} +3\right)}{\left( x^{2} +3\right)^{4}}\\
 & \\
 & =\frac{3\left( 1-x^{2}\right)}{\left( x^{2} +3\right)^{3}}
\end{aligned}
\end{equation*}
$$

We see that $\displaystyle x=\pm 1$ correspond to critical points. We can also see that:

$$
\begin{equation*}
g^{\prime }( x) \ \text{is} \ \begin{cases}
< 0, & x< -1\\
=0, & x=-1\\
 >0, & -1< x< 1\\
=0, & x=1\\
< 0, & x >1
\end{cases}
\end{equation*}
$$

This suggests that $\displaystyle g$ decreases from $\displaystyle -\infty$ to $\displaystyle -1$, reaches a local minimum at $\displaystyle x=-1$, then increases from $\displaystyle -1$ to $\displaystyle 1$, reaches a local maximum at $\displaystyle x=1$ and then decreases from $\displaystyle 1$ to $\displaystyle \infty$. This along with the fact that the x-axis is an asymptote to $\displaystyle g$ suggests that $\displaystyle x=-1$ has to be a global minimum and $\displaystyle x=1$ has to be a global maximum. We have reached the following conclusion:

$$
\begin{equation*}
g( x) \geqslant g( 1) =\frac{1}{16}
\end{equation*}
$$

Plugging this back into $\displaystyle f^{\prime }( x)$, we see that:

$$
\begin{equation*}
c >\frac{1}{8} \Longrightarrow f^{\prime }( x)  >0,\ \forall x\in \mathbb{R}
\end{equation*}
$$


:::
