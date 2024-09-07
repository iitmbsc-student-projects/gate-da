---
title: Question-37
pagetitle: Question-37
order: 37
categories: [LU decomposition]
---

Consider the following system of linear equations:

$$
\begin{equation*}
\begin{aligned}
x_{1} +x_{2} -2x_{3} & =4\\
x_{1} +3x_{2} -x_{3} & =7\\
2x_{1} +x_{2} -5x_{3} & =7
\end{aligned}
\end{equation*}
$$

The LU decomposition of the coefficient matrix is given as:

$$
\begin{equation*}
L=\begin{bmatrix}
L_{11} & 0 & 0\\
L_{21} & L_{22} & 0\\
L_{31} & L_{32} & L_{33}
\end{bmatrix} ,U=\begin{bmatrix}
U_{11} & U_{12} & U_{13}\\
0 & U_{22} & U_{23}\\
0 & 0 & U_{33}
\end{bmatrix}
\end{equation*}
$$

Which one of the following is the correct combination of values for $\displaystyle L_{32} ,U_{33}$ and $\displaystyle x_{1}$?

- [ ] $L_{32} = 2, U_{33} = -0.5, x_{1} = -1$
- [ ] $L_{32} = 2, U_{33} = 2, x_1 = -1$
- [ ] $L_{32} = -0.5, U_{33} = 2, x_1 = 0$
- [ ] $L_{32} = -0.5, U_{33} = -0.5, x_1 = 0$ 

:::{.callout-note title="Answer" collapse=true}

- [ ] $L_{32} = 2, U_{33} = -0.5, x_{1} = -1$
- [ ] $L_{32} = 2, U_{33} = 2, x_1 = -1$
- [ ] $L_{32} = -0.5, U_{33} = 2, x_1 = 0$
- [x] $L_{32} = -0.5, U_{33} = -0.5, x_1 = 0$ 

:::

:::{.callout-note title="Solution" collapse=true}

We have:

$$
\begin{equation*}
A=\begin{bmatrix}
1 & 1 & -2\\
1 & 3 & -1\\
2 & 1 & -5
\end{bmatrix} ,\ x=\begin{bmatrix}
x_{1}\\
x_{2}\\
x_{3}
\end{bmatrix} ,\ b=\begin{bmatrix}
4\\
7\\
7
\end{bmatrix}
\end{equation*}
$$

We proceed with Gaussian elimination:

$$
\begin{equation*}
\begin{bmatrix}
1 & 1 & -2 &  & 4\\
1 & 3 & -1 &  & 7\\
2 & 1 & -5 &  & 7
\end{bmatrix}\xrightarrow{R_{2}\rightarrow R_{2} -R_{1}}\begin{bmatrix}
1 & 1 & -2 &  & 4\\
0 & 2 & 1 &  & 3\\
2 & 1 & -5 &  & 7
\end{bmatrix}
\end{equation*}
$$

$$
\begin{equation*}
\begin{bmatrix}
1 & 1 & -2 &  & 4\\
0 & 2 & 1 &  & 3\\
2 & 1 & -5 &  & 7
\end{bmatrix}\xrightarrow{R_{3}\rightarrow R_{3} -2R_{1}}\begin{bmatrix}
1 & 1 & -2 &  & 4\\
0 & 2 & 1 &  & 3\\
0 & -1 & -1 &  & -1
\end{bmatrix}
\end{equation*}
$$

$$
\begin{equation*}
\begin{bmatrix}
1 & 1 & -2 &  & 4\\
0 & 2 & 1 &  & 3\\
0 & -1 & -1 &  & -1
\end{bmatrix}\xrightarrow{R_{3}\rightarrow R_{3} +0.5R_{2}}\begin{bmatrix}
1 & 1 & -2 &  & 4\\
0 & 2 & 1 &  & 3\\
0 & 0 & -0.5 &  & 0.5
\end{bmatrix}
\end{equation*}
$$

Gathering the multipliers in the row reduction and transferring them to $\displaystyle L$, we have:

$$
\begin{equation*}
L=\begin{bmatrix}
1 & 0 & 0\\
1 & 1 & 0\\
2 & -0.5 & 1
\end{bmatrix} ,\ U=\begin{bmatrix}
1 & 1 & -2\\
0 & 2 & 1\\
0 & 0 & -0.5
\end{bmatrix}
\end{equation*}
$$

The RREF of the augmented matrix is $\displaystyle \begin{bmatrix}
1 & 0 & 0 &  & 0\\
0 & 1 & 0 &  & 2\\
0 & 0 & 1 &  & -1
\end{bmatrix}$. We see that:

$$
\begin{equation*}
x_{1} =0,x_{2} =2,x_{3} =-1
\end{equation*}
$$

:::