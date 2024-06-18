---
title: Math Support
pagetitle: Math Support
order: 3
categories: [template]
---

## Inline vs Display

Inline math includes math symbols that occur in the middle of a sentence. For example, $\pi$ and $e$ are special math constants. Display math is used to display more prominent items such as equations:
$$
x^2 + y^2 = z^2
$$
The following are some of the commonly used symbols and environments in $\LaTeX$ which can also be rendered in markdown.



## Sets

$$
A \cap B = \left\{x: x \in A \text{ and } x \in B \right\}
$$

$$
A \cup B = \left\{x: x \in A \text{ or } x \in B \right\}
$$

$$
A \subset B \implies B \supset A
$$

$$
\left\{ \cfrac{1}{2}, \cfrac{3}{4}, \cfrac{5}{6} \right\}
$$



## Vectors, Matrices and Determinants

$$
v = \begin{pmatrix}
1\\
2\\
3
\end{pmatrix}
$$

$$
A = \begin{bmatrix}
1 & 2 & 3\\
4 & 5 & 6\\
7 & 8 & 9
\end{bmatrix}
$$

$$
|A| = \begin{vmatrix}
1 & 2\\
3 & 4
\end{vmatrix}
$$

## Aligned

$$
\begin{aligned}
x^2 - 5x + 6 &= 0\\
(x - 2)(x - 3) &= 0\\
\implies x &= 2, 3
\end{aligned}
$$

## Cases

$$
f(x) = \begin{cases}
x^2 - 1, & x < 0\\
x^2 + 1, &x \geqslant 0
\end{cases}
$$



## Summation, Product, Limits, Integrals

$$
\sum \limits_{i = 1}^{n} i = \cfrac{n(n + 1)}{2}
$$

$$
\prod \limits_{i = 1}^{n} i = n!
$$

$$
\lim \limits_{n \rightarrow \infty} \cfrac{1}{n} = 0
$$

$$
\int \limits_{0}^{1} x\ dx = \cfrac{1}{2}
$$



## Misc symbols

- $m \choose n$



- $x \times y$



- $1, 2, 3, \cdots$



- $\cfrac{df}{dx}$



- $\cfrac{\partial f}{\partial x}$



- $\nabla f$



- $\alpha, \beta, \gamma, \theta$



- $\mathbf{x}, \mathbf{y}, \mathbf{X}, \mathbf{Y}, \boldsymbol{\alpha}, \boldsymbol{\theta}$



- $\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{R}, \mathbb{C}$



- $\mathcal{X}, \mathcal{Y}$
