---
title: Question-47
pagetitle: Question-47
order: 47
categories: [linear algebra,subspace,DA-2024]
---

Select all choices that are subspaces of $\mathbb{R}^{3}$.

**Note**: $\mathbb{R}$ denotes the set of real numbers.

- [ ] $\left\{ \mathbf{x} = \begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix} \in \mathbb{R}^{3}\ :\ \mathbf{x} = \alpha \begin{bmatrix}1 \\ 1 \\ 0\end{bmatrix} + \beta \begin{bmatrix}1 \\ 0 \\ 0\end{bmatrix},\ \alpha, \beta \in \mathbb{R} \right\}$
- [ ] $\left\{ \mathbf{x} = \begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix} \in \mathbb{R}^{3}\ :\ \mathbf{x} = \alpha^2 \begin{bmatrix}1 \\ 2 \\ 0\end{bmatrix} + \beta^2 \begin{bmatrix}1 \\ 0 \\ 1\end{bmatrix},\ \alpha, \beta \in \mathbb{R} \right\}$
- [ ] $\left\{ \mathbf{x} = \begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix} \in \mathbb{R}^{3}\ :\ 5x_1 + 2x_3 = 0,\ 4x_1-2x_2+3x_3=0 \right\}$

- [ ] $\left\{ \mathbf{x} = \begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix} \in \mathbb{R}^{3}\ :\ 5x_1 + 2x_3 + 4 = 0 \right\}$

::: {.callout-note title="Answer" collapse=true}

- [x] $\left\{ \mathbf{x} = \begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix} \in \mathbb{R}^{3}\ :\ \mathbf{x} = \alpha \begin{bmatrix}1 \\ 1 \\ 0\end{bmatrix} + \beta \begin{bmatrix}1 \\ 0 \\ 0\end{bmatrix},\ \alpha, \beta \in \mathbb{R} \right\}$
- [ ] $\left\{ \mathbf{x} = \begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix} \in \mathbb{R}^{3}\ :\ \mathbf{x} = \alpha^2 \begin{bmatrix}1 \\ 2 \\ 0\end{bmatrix} + \beta^2 \begin{bmatrix}1 \\ 0 \\ 1\end{bmatrix},\ \alpha, \beta \in \mathbb{R} \right\}$
- [x] $\left\{ \mathbf{x} = \begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix} \in \mathbb{R}^{3}\ :\ 5x_1 + 2x_3 = 0,\ 4x_1-2x_2+3x_3=0 \right\}$

- [ ] $\left\{ \mathbf{x} = \begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix} \in \mathbb{R}^{3}\ :\ 5x_1 + 2x_3 + 4 = 0 \right\}$

:::

::: {.callout-note title="Solution" collapse=true}

<u>Option-1</u>
$$
\left\{ \mathbf{x} = \begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix} \in \mathbb{R}^{3}\ :\ \mathbf{x} = \alpha \begin{bmatrix}1 \\ 1 \\ 0\end{bmatrix} + \beta \begin{bmatrix}1 \\ 0 \\ 0\end{bmatrix},\ \alpha, \beta \in \mathbb{R} \right\}
$$
This can be expressed as the span of the vectors $\begin{bmatrix}1 \\ 1 \\ 0\end{bmatrix}, \begin{bmatrix}1 \\ 0 \\ 0\end{bmatrix}$ and is a subspace. Geometrically, this is a plane in $\mathbb{R}^{3}$ passing through the origin.

<u>Option-2</u>
$$
\left\{ \mathbf{x} = \begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix} \in \mathbb{R}^{3}\ :\ \mathbf{x} = \alpha^2 \begin{bmatrix}1 \\ 2 \\ 0\end{bmatrix} + \beta^2 \begin{bmatrix}1 \\ 0 \\ 1\end{bmatrix},\ \alpha, \beta \in \mathbb{R} \right\}
$$


This is not a subspace as it is not closed under scalar multiplication. For instance, $\begin{bmatrix}1 \\ 2 \\ 0\end{bmatrix}$ is an element of the set, but $\begin{bmatrix}-1 \\ -2 \\ 0\end{bmatrix}$ isn't.

<u>Option-3</u>
$$
\left\{ \mathbf{x} = \begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix} \in \mathbb{R}^{3}\ :\ 5x_1 + 2x_3 = 0,\ 4x_1-2x_2+3x_3=0 \right\}
$$
This is the intersection of two planes and is hence a subspace of $\mathbb{R}^{3}$.

<u>Option-4</u>
$$
\left\{ \mathbf{x} = \begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix} \in \mathbb{R}^{3}\ :\ 5x_1 + 2x_3 + 4 = 0 \right\}
$$
This is not a subspace of $\mathbb{R}^{3}$ as it doesn't contain the zero vector.

:::