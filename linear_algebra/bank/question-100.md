---
title: Question-100
pagetitle: Question-100
order: 100
categories: [eigenvalues]
---

Consider a matrix $\displaystyle A=uv^{T}$ where $\displaystyle u=( 1,2)$ and $\displaystyle v=( 1,1)$. Find the largest eigenvalue of $\displaystyle A$.

::: {.callout-note title="Answer" collapse=true}

$3$
:::

::: {.callout-note title="Solution" collapse=true}


- Let $\displaystyle ( \lambda ,w)$ be an eigenpair of $\displaystyle A$ with $\displaystyle ||w||=1$.

$$
\begin{aligned}
Aw & =\lambda w\\
\Longrightarrow u\left( v^{T} w\right) & =\lambda w
\end{aligned}
$$

- If $\displaystyle \lambda =0$, then $\displaystyle v^{T} w=0$. It follows that $\displaystyle v\perp w$. From this we see that any non-zero vector orthogonal to $\displaystyle v$ is an eigenvector with eigenvalue $\displaystyle 0$.

- If $\displaystyle \lambda \neq 0$, then $\displaystyle u$ and $\displaystyle w$ are dependent. $\displaystyle w$ has to be some multiple of $\displaystyle u$. Calling $\displaystyle w=ku$, $\displaystyle k\neq 0$, we get:

$$
\begin{aligned}
k\left( v^{T} u\right) u & =\lambda ku\\
\Longrightarrow \lambda  & =v^{T} u
\end{aligned}
$$


|         Therefore, every non-zero multiple of $\displaystyle u$ is an eigenvector with eigenvalue $\displaystyle v^{T} u$.

:::
