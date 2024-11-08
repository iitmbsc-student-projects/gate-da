---
title: Question-82
pagetitle: Question-82
order: 82
categories: [system of equations, row reduction]
---

Consider the following system:

$$
\begin{equation*}
\begin{aligned}
x+2y-2z & =b_{1}\\
2x+5y-4z & =b_{2}\\
4x+9y-8z & =b_{3}
\end{aligned}
\end{equation*}
$$

What conditions should $\displaystyle b_{1} ,b_{2} ,b_{3}$ satisfy so that the system has at least one solution?

- [ ] $\displaystyle 2b_{1} +b_{2} -b_{3} =0$
- [ ] $\displaystyle b_{2} =2b_{1}$
- [ ] $\displaystyle b_{3} =4b_{1}$
- [ ] This system always has a solution for any set of values for $\displaystyle b_{1} ,b_{2} ,b_{3}$
- [ ] This system doesn't have a solution for any set of values for $\displaystyle b_{1} ,b_{2} ,b_{3}$

::: {.callout-note title="Hint" collapse=true}

Row reduce the augmented matrix and enforce consistency

:::

::: {.callout-note title="Answer" collapse=true}

- [x] $\displaystyle 2b_{1} +b_{2} -b_{3} =0$
- [ ] $\displaystyle b_{2} =2b_{1}$
- [ ] $\displaystyle b_{3} =4b_{1}$
- [ ] This system always has a solution for any set of values for $\displaystyle b_{1} ,b_{2} ,b_{3}$
- [ ] This system doesn't have a solution for any set of values for $\displaystyle b_{1} ,b_{2} ,b_{3}$

:::

::: {.callout-note title="Solution" collapse=true}

The augmented matrix:

$$
\begin{equation*}
\begin{bmatrix}
1 & 2 & -2 &  & b_{1}\\
2 & 5 & -4 &  & b_{2}\\
4 & 9 & -8 &  & b_{3}
\end{bmatrix}
\end{equation*}
$$

We first compute the row echelon form of this matrix:

$$
\begin{equation*}
\begin{bmatrix}
1 & 2 & -2 &  & b_{1}\\
2 & 5 & -4 &  & b_{2}\\
4 & 9 & -8 &  & b_{3}
\end{bmatrix}\rightarrow \begin{bmatrix}
1 & 2 & -2 &  & b_{1}\\
0 & 1 & 0 &  & b_{2} -2b_{1}\\
4 & 9 & -8 &  & b_{3}
\end{bmatrix}
\end{equation*}
$$

$$
\begin{equation*}
\begin{bmatrix}
1 & 2 & -2 &  & b_{1}\\
0 & 1 & 0 &  & b_{2} -2b_{1}\\
4 & 9 & -8 &  & b_{3}
\end{bmatrix}\rightarrow \begin{bmatrix}
1 & 2 & -2 &  & b_{1}\\
0 & 1 & 0 &  & b_{2} -2b_{1}\\
0 & 1 & 0 &  & b_{3} -4b_{1}
\end{bmatrix}
\end{equation*}
$$

$$
\begin{equation*}
\begin{bmatrix}
1 & 2 & -2 &  & b_{1}\\
0 & 1 & 0 &  & b_{2} -2b_{1}\\
0 & 1 & 0 &  & b_{3} -4b_{1}
\end{bmatrix}\rightarrow \begin{bmatrix}
1 & 2 & -2 &  & b_{1}\\
0 & 1 & 0 &  & b_{2} -2b_{1}\\
0 & 0 & 0 &  & b_{3} -b_{2} -2b_{1}
\end{bmatrix}
\end{equation*}
$$

For this system to have at least one solution, the last row should be a zero row, from which we get:

$$
\begin{equation*}
2b_{1} +b_{2} -b_{3} =0
\end{equation*}
$$

:::
