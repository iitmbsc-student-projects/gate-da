---
title: Question-24
pagetitle: Question-24
order: 24
categories: [orthogonal matrix]
---

Let $v = (3, 1, 2)$ be a vector in $\mathbb{R}^{3}$. If $(a, b, c)$ is the vector obtained from $v$ after an anti-clockwise rotation of the $XZ$ plane with angle $45^{\circ}$ about the $Y$-axis, then find the value of $\sqrt{2}(a + b + c - 1)$.

::: {.callout-note title="Answer" collapse=true}

$6$

:::

::: {.callout-note title="Solution" collapse=true}

We can form the rotation matrix as follows:

$$
Q=\begin{bmatrix}
\cos \theta  & 0 & -\sin \theta \\
0 & 1 & 0\\
\sin \theta  & 0 & \cos \theta 
\end{bmatrix}
$$

Setting $\displaystyle \theta =45^{\circ }$, we get:


$$
Q=\frac{1}{\sqrt{2}}\begin{bmatrix}
1 & 0 & -1\\
0 & \sqrt{2} & 0\\
1 & 0 & 1
\end{bmatrix}
$$

$\displaystyle Qv$ is the result of rotating $\displaystyle v$ by $\displaystyle 45^{\circ }$:

$$
\begin{aligned}
\begin{bmatrix}
a\\
b\\
c
\end{bmatrix} & =Qv\\
 & =\frac{1}{\sqrt{2}}\begin{bmatrix}
1 & 0 & -1\\
0 & \sqrt{2} & 0\\
1 & 0 & 1
\end{bmatrix}\begin{bmatrix}
3\\
1\\
2
\end{bmatrix}\\
 & =\frac{1}{\sqrt{2}}\begin{bmatrix}
1\\
\sqrt{2}\\
5
\end{bmatrix}
\end{aligned}
$$

Thus, $\displaystyle a=\frac{1}{\sqrt{2}} ,b=1,c=\frac{5}{\sqrt{2}}$. Now:

$$
\sqrt{2}( a+b+c-1) =6
$$


:::

