---
title: Question-33
pagetitle: Question-33
order: 33
categories: [quadratic form]
---

Consider the quadratic function in three variables:
$$
f(x, y, z) = 3x^2 - 2y^2 +z^2- 2xy + 4yz -8zx 
$$
If $u = \begin{bmatrix}x & y & z\end{bmatrix}^T$ and $f(x, y, z) = u^T Au$, which of the following is/are $A$?

- [ ] $\begin{bmatrix}
3 & -1 & -4\\
-1 & -2 & 2\\
-4 & 2 & 1
\end{bmatrix}$

- [ ] $\begin{bmatrix}
3 & 4 & -4\\
-6 & -2 & 3\\
-4 & 1 & 1
\end{bmatrix}$

- [ ] $\begin{bmatrix}
3 & 0 & -4\\
-1 & -2 & 2\\
0 & 1 & 1
\end{bmatrix}$

- [ ] $\begin{bmatrix}
3 & -2 & 1\\
-1 & 1 & 2\\
-4 & 0 & 1
\end{bmatrix}$

::: {.callout-note title="Answer" collapse=true}

- [x] $\begin{bmatrix}
3 & -1 & -4\\
-1 & -2 & 2\\
-4 & 2 & 1
\end{bmatrix}$

- [x] $\begin{bmatrix}
3 & 4 & -4\\
-6 & -2 & 3\\
-4 & 1 & 1
\end{bmatrix}$

- [ ] $\begin{bmatrix}
3 & 0 & -4\\
-1 & -2 & 2\\
0 & 1 & 1
\end{bmatrix}$

- [ ] $\begin{bmatrix}
3 & -2 & 1\\
-1 & 1 & 2\\
-4 & 0 & 1
\end{bmatrix}$

:::

::: {.callout-note title="Solution" collapse=true}

The general expression of a quadratic form in $3$ variables is given below:


$$
\begin{aligned}
f(x, y, z) &= \mathbf{x}^T \mathbf{A} \mathbf{x}\\\\
&= a_{xx} x^2 + a_{yy}y^2 + a_{zz} z^2\\\\
&+ (a_{xy} + a_{yx}) xy + (a_{yz} + a_{zy}) yz + (a_{zx} + a_{xz}) zx
\end{aligned}
$$


Here $\mathbf{x} = \begin{bmatrix}x\\y\\z\end{bmatrix}$ and $\mathbf{A} =\begin{bmatrix}a_{xx} & a_{xy} & a_{xz}\\a_{yx} & a_{yy} & a_{yz}\\a_{zx} & a_{zy} & a_{zz}\end{bmatrix}$



We see that options (a) and (b) are valid choices for $A$.


:::

