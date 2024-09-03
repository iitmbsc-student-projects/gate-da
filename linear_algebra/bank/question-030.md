---
title: Question-30
pagetitle: Question-30
order: 30
categories: [determinant]
---

Compute $\text{det}(A)$ where $A = \begin{bmatrix}1 & 2010 & 2020 \times 2030\\1 & 2020 & 2030 \times 2010\\1 & 2030 & 2010 \times 2020\end{bmatrix}$

::: {.callout-note title="Answer" collapse=true}

$2000$

:::

::: {.callout-note title="Solution" collapse=true}

$\text{det}(A)$ is of the form:
$$
\begin{vmatrix}
1 & a & bc\\
1 & b & ca\\
1 & c & ab
\end{vmatrix}
$$
We shall now compute this determinant:



<u>Step-1</u>: $R_2 \rightarrow R_2 - R_1$


$$
\begin{vmatrix}
1 & a & bc\\
1 & b & ca\\
1 & c & ab
\end{vmatrix} = \begin{vmatrix}
1 & a & bc\\
0 & b - a & c(a - b)\\
1 & c & ab
\end{vmatrix}
$$


<u>Step-2</u>: $R_3 \rightarrow R_3 - R_1$


$$
\begin{vmatrix}
1 & a & bc\\
1 & b & ca\\
1 & c & ab
\end{vmatrix} = \begin{vmatrix}
1 & a & bc\\
0 & b - a & c(a - b)\\
0 & c - a & b(a - c)
\end{vmatrix}
$$


<u>Step-3</u>: $R_2 \rightarrow \cfrac{1}{b - a} R_2$ and $R_{3} \rightarrow \cfrac{1}{c - a} R_{3}$



We can divide by $b - a$ and $c - a$ as $a, b, c$ are distinct.


$$
\begin{vmatrix}
1 & a & bc\\
1 & b & ca\\
1 & c & ab
\end{vmatrix} = (b - a)(c - a)\begin{vmatrix}
1 & a & bc\\
0 & 1 & -c\\
0 & 1 & -b
\end{vmatrix}
$$


We can now expand along the first column. After moving some minus signs around, we get:


$$
\begin{vmatrix}
1 & a & bc\\
1 & b & ca\\
1 & c & ab
\end{vmatrix} = (a - b)(b - c)(c - a)
$$


We can now plug in $a = 2010, b = 2020, c = 2030$ to get the desired determinant. This turns out to be $\boxed{2000}$.

:::

