---
title: Question-29
pagetitle: Question-29
order: 29
categories: [vector space]
---

Consider a set $V = \{(x, y)\ |\ x, y \in \mathbb{R}\}$ with the usual rule of addition borrowed from $\mathbb{R}^2$ and scalar multiplication defined as:

$$
c(x, y) = \begin{cases}
    (0, 0) & c = 0\\
    (\frac{cx}{2}, \frac{y}{c}) & c \neq 0
\end{cases}
$$


Consider the statements given below:

$\mathbf{P}$: $V$ is closed under addition.

$\mathbf{Q}$: $V$ has a zero element with respect to addition.

$\mathbf{R}$: $1.v=v$ where $1 \in \mathbb{R}$ and $v \in V$

$\mathbf{S}$ : $a(v_1 + v_2)=av_1 + av_2$, where $v_1, v_2 \in V$ and $a \in \mathbb{R}$

$\mathbf{T}$: $(a + b)v = av + bv$, where $a, b \in \mathbb{R}$ and $v \in V$

Choose all correct options

- [ ] Only $P$ is true

- [ ] Only $Q$ is true

- [ ] $P, Q$ and $S$ are true

- [ ] Both $R$ and $T$ are not true

::: {.callout-note title="Answer" collapse=true}

- [ ] Only $P$ is true

- [ ] Only $Q$ is true

- [x] $P, Q$ and $S$ are true

- [x] Both $R$ and $T$ are not true

:::

::: {.callout-note title="Solution" collapse=true}

 

- $P$ is true as the addition operation is the usual one defined for $\mathbb{R}^{2}$





- $Q$ is also true as $(0, 0)$ is an element of $V$





- $R$ is not true. Take $c = 1$ and $(x, y) = (1, 1)$. Then $1(1, 1) = \left(\cfrac{1}{2}, 1\right) \neq (1, 1)$.





- $S$ is true. 

  - Let $v_1 = (x_1, y_1)$ and $v_2 = (x_2, y_2)$. 

  

  - On the LHS we have:
    - $v_1 + v_2 = (x_1 + x_2, y_1 + y_2)$. Then, $a(v_1 + v_2) = \left(\cfrac{a}{2}(x_1 + x_2), \cfrac{y_1 + y_2}{a}\right)$.

  

  - On the RHS we have:
    - $av_1 + av_2 = \left(\cfrac{a}{2} x_1, \cfrac{y_1}{a}\right) + \left( \cfrac{a}{2} x_2, \cfrac{y_2}{a}\right) = \left(\cfrac{a}{2}(x_1 + x_2), \cfrac{y_1 + y_2}{a}\right)$. 

  

  

  - This is for $a \neq 0$. The proof for $a = 0$ is quite trivial.



- $T$ is not true. Set $a = 1, b = 1, v = (1, 1)$. Then $(a + b)v = 2(1, 1) = \left(1, \cfrac{1}{2}\right)$, while $av + bv = 1(1, 1) + 1(1, 1) = \left(\cfrac{1}{2}, 1\right) + \left(\cfrac{1}{2}, 1\right) = (1, 2)$.

:::

