---
title: Question-34
pagetitle: Question-34
order: 34
categories: [function, continuity, differentiability]
---

Consider the function:

$$
\begin{equation*}
f( x) =\begin{cases}
\frac{|( x-1)( x-3) |}{x-3} , & x\neq 3\\
2, & x=3
\end{cases}
\end{equation*}
$$

- [ ] $\displaystyle f$ is continuous at $\displaystyle x=3$

- [ ] $\displaystyle f$ is discontinuous at $\displaystyle x=3$

- [ ] $\displaystyle f$ is differentiable at $\displaystyle x=3$

- [ ] $\displaystyle f$ is not differentiable at $\displaystyle x=3$

- [ ] $\displaystyle f$ is continuous at $\displaystyle x=1$

- [ ] $\displaystyle f$ is discontinuous at $\displaystyle x=1$

- [ ] $\displaystyle f$ is differentiable at $\displaystyle x=1$

- [ ] $\displaystyle f$ is not differentiable at $\displaystyle x=1$

::: {.callout-note title="Hint" collapse=true}

Break the piece-wise function by looking at important intervals.

:::

::: {.callout-note title="Answer" collapse=true}

- [ ] $\displaystyle f$ is continuous at $\displaystyle x=3$

- [x] $\displaystyle f$ is discontinuous at $\displaystyle x=3$

- [ ] $\displaystyle f$ is differentiable at $\displaystyle x=3$

- [x] $\displaystyle f$ is not differentiable at $\displaystyle x=3$

- [x] $\displaystyle f$ is continuous at $\displaystyle x=1$

- [ ] $\displaystyle f$ is discontinuous at $\displaystyle x=1$

- [ ] $\displaystyle f$ is differentiable at $\displaystyle x=1$

- [x] $\displaystyle f$ is not differentiable at $\displaystyle x=1$

:::

::: {.callout-note title="Solution" collapse=true}


We can break down the function as follows:

$$
\begin{equation*}
f( x) =\begin{cases}
\frac{( x-1)( x-3)}{x-3} , & x >3\\
2, & x=3\\
\frac{-( x-1)( x-3)}{x-3} , & 1< x< 3\\
\frac{( x-1)( x-3)}{x-3} , & x\leqslant 1
\end{cases}
\end{equation*}
$$

This simplifies to:

$$
\begin{equation*}
f( x) =\begin{cases}
x-1, & x >3\\
2, & x=3\\
1-x, & 1< x< 3\\
x-1, & x\leqslant 1
\end{cases}
\end{equation*}
$$

At $\displaystyle x=3$ we have:

$$
\begin{equation*}
\begin{aligned}
\lim\limits _{x\rightarrow 3^{+}} f( x) & =2\\
 & \\
\lim\limits _{x\rightarrow 3^{-}} f( x) & =-2
\end{aligned}
\end{equation*}
$$

The limit does not exist at $\displaystyle x=3$. Hence, $\displaystyle f$ is not continuous at $\displaystyle x=3$ and not differentiable at $\displaystyle x=3$.

At $\displaystyle x=1$ we have:

$$
\begin{gather*}
\lim\limits _{x\rightarrow 1^{+}} f( x) =0\\
\\
\lim\limits _{x\rightarrow 1^{-}} \ f( x) =0
\end{gather*}
$$

The limit exists at $\displaystyle x=1$ and is equal to $\displaystyle 0$. Since $\displaystyle f( 1) =0$, $\displaystyle f$ is continuous at $\displaystyle x=1$. The LHD at $\displaystyle x=1$ is $\displaystyle 1$ and the RHD at $\displaystyle x=1$ is $\displaystyle -1$. So $\displaystyle f$ is not differentiable at $\displaystyle x=3$.

:::
