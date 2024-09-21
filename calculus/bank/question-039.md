---
title: Question-39
pagetitle: Question-39
order: 39
categories: [limit, continuity, differentiability]
---

Consider the function

$$
\begin{equation*}
f( x) =\begin{cases}
x\sin\frac{1}{x} , & x\neq 0\\
0, & x=0
\end{cases}
\end{equation*}
$$

- [ ] $f$ is continuous at $x = 0$
- [ ] $f$ is not continuous at $x = 0$
- [ ] $f$ is differentiable at $x = 0$
- [ ] $f$ is not differentiable at $x = 0$

::: {.callout-note title="Hint" collapse=true}
Use first principles approach.
:::

::: {.callout-note title="Answer" collapse=true}

- [x] $f$ is continuous at $x = 0$
- [ ] $f$ is not continuous at $x = 0$
- [ ] $f$ is differentiable at $x = 0$
- [x] $f$ is not differentiable at $x = 0$

:::

::: {.callout-note title="Solution" collapse=true}

We note that:

$$
\begin{equation*}
0\leqslant x\sin\frac{1}{x} \leqslant x
\end{equation*}
$$

Using sandwich theorem, we see that the limit as $\displaystyle x\rightarrow 0$ exists and is equal to $\displaystyle 0$. Since $\displaystyle f( 0) =0$, the function is continuous. For differentiability at $\displaystyle x=0$, we can approach this from first principles:

$$
\begin{equation*}
\begin{aligned}
\lim\limits _{h\rightarrow 0}\frac{f( h) -f( 0)}{h} & =\lim\limits _{h\rightarrow 0} \ \frac{h\sin\frac{1}{h} -0}{h}\\
 & \\
 & =\lim\limits _{h\rightarrow 0} \ \sin\frac{1}{h}
\end{aligned}
\end{equation*}
$$

We see that this limit does not exist. Hence, $\displaystyle f$ is not differentiable at $\displaystyle x=0$.

:::
