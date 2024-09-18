---
title: Question-49
pagetitle: Question-49
order: 49
categories: [singular value decomposition]
---

Consider a matrix $\displaystyle A$ of unit rank such that $\displaystyle Av=12u$, where $\displaystyle v=\frac{1}{2}( 1,1,1,1)$ and $\displaystyle u=\frac{1}{3}( 2,2,1)$. Find the smallest possible value of the largest singular value of $\displaystyle A$.

::: {.callout-note title="Answer" collapse=true}

$12$

:::

::: {.callout-note title="Solution" collapse=true}

Since $\displaystyle A$ has unit rank, it has only one non-zero singular value. Therefore, we have unit vectors $\displaystyle u_{1} \in \mathbb{R}^{3}$ and $\displaystyle v_{1} \in \mathbb{R}^{4}$ (not necessarily unique) such that:

\begin{equation*}
A=\sigma _{1} u_{1} v_{1}^{T}
\end{equation*}

We have:

\begin{equation*}
\begin{aligned}
Av & =12u
\end{aligned} \Longrightarrow \begin{aligned}
\sigma _{1} u_{1} v_{1}^{T} v & =12u
\end{aligned}
\end{equation*}

Taking the norm on both sides:

\begin{equation*}
\begin{aligned}
\sigma _{1} ||u_{1} ||\cdot |v_{1}^{T} v| & =12\cdot ||u||\\
|v_{1}^{T} v| & =\frac{12}{\sigma _{1}}
\end{aligned}
\end{equation*}
Now applying Cauchy-Schwarz:

\begin{equation*}
\frac{12}{\sigma _{1}} \leqslant |v_{1} |\cdot |v|=1\Longrightarrow \sigma _{1} \geqslant 12
\end{equation*}

The smallest value of $\displaystyle \sigma _{1}$ is $\displaystyle \boxed{12}$.

:::
