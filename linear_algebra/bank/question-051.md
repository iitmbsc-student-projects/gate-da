---
title: Question-51
pagetitle: Question-51
order: 51
categories: [matrix]
---

If $\displaystyle A=\begin{bmatrix}
1 & 1\\
1 & 1
\end{bmatrix}$ what is $\displaystyle A^{37}$?

- [ ] $\displaystyle 2^{37} A$
- [ ] $\displaystyle 2^{36} A$
- [ ] $\displaystyle A$
- [ ] $\displaystyle A^{2}$


::: {.callout-note title="Hint" collapse=true}

Compute $A^2$ and $A^3$ and observe the pattern. Generalize.

:::

::: {.callout-note title="Answer" collapse=true}

- [ ] $\displaystyle 2^{37} A$
- [x] $\displaystyle 2^{36} A$
- [ ] $\displaystyle A$
- [ ] $\displaystyle A^{2}$

:::

::: {.callout-note title="Solution" collapse=true}

If $\displaystyle v=\begin{bmatrix}
1\\
1
\end{bmatrix}$, then $\displaystyle A=vv^{T}$. We see that:

$$
\begin{equation*}
\begin{aligned}
A^{2} & =\left( vv^{T}\right)\left( vv^{T}\right)\\
 & =\left( v^{T} v\right)\left( vv^{T}\right)\\
 & =\left( v^{T} v\right) A
\end{aligned}
\end{equation*}
$$

A couple of more rounds will show the following pattern:

$$
\begin{equation*}
A^{n} =\left( v^{T} v\right)^{n-1} A
\end{equation*}
$$

We have $\displaystyle v^{T} v=2$ and $\displaystyle n=37$. Therefore, $\displaystyle A^{37} =2^{36} A$.
:::