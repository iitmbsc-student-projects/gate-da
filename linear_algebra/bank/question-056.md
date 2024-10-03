---
title: Question-56
pagetitle: Question-56
order: 56
categories: [subspace]
---

Find the smallest subspace of $\displaystyle \mathbb{R}^{3}$ containing the vectors $\displaystyle ( 2,-3,-3)$ and $\displaystyle ( 0,3,2)$.

- [ ] $\displaystyle S=\{c( 2,-3,-3) ;c\in \mathbb{R}\}$
- [ ] $\displaystyle S=\{( x,y,z) :3x-4y+6z=0;x,y,z\in \mathbb{R}\}$
- [ ] $\displaystyle S=\{( x,y,z) :x-4y+z=0;x,y,z\in \mathbb{R}\}$
- [ ] $\displaystyle S=\{c( 0,3,2) ;c\in \mathbb{R}\}$

::: {.callout-note title="Answer" collapse=true}

- [ ] $\displaystyle S=\{c( 2,-3,-3) ;c\in \mathbb{R}\}$
- [x] $\displaystyle S=\{( x,y,z) :3x-4y+6z=0;x,y,z\in \mathbb{R}\}$
- [ ] $\displaystyle S=\{( x,y,z) :x-4y+z=0;x,y,z\in \mathbb{R}\}$
- [ ] $\displaystyle S=\{c( 0,3,2) ;c\in \mathbb{R}\}$

:::

::: {.callout-note title="Solution" collapse=true}

The smallest subspace that contains these two vectors is their span. Since the two vectors are linearly independent, their span will be a two-dimensional subspace of $\displaystyle \mathbb{R}^{3}$, which is a plane passing through the origin:

$$
\begin{equation*}
S=\{( x,y,z) :ax+by+cz=0\}
\end{equation*}
$$

We have:

$$
\begin{equation*}
\begin{aligned}
2a-3b-3c & =0\\
3b+2c & =0
\end{aligned}
\end{equation*}
$$

From the options, we see that $\displaystyle c=6$ is one possibility. This gives us:

$$
\begin{equation*}
\begin{aligned}
2a-3b-3c & =0\\
3b+2c & =0
\end{aligned} \Longrightarrow a=3,b=-4
\end{equation*}
$$

Therefore, the required subspace is:

$$
\begin{equation*}
S=\{( x,y,z) :3x-4y+6z=0\}
\end{equation*}
$$