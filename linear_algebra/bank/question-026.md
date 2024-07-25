---
title: Question-26
pagetitle: Question-26
order: 26
categories: [system of equations]
---

If the following system has a non-trivial solution:
$$
\begin{aligned}
px + qy + rz &= 0\\
qx + ry + pz &= 0\\
rx + py + qz &= 0
\end{aligned}
$$
Then which one of the following options is true?

- [ ] $p - q + r = 0$ or $q = p = -r$

- [ ] $p + q - r = 0$ or $p = -q = r$ 

- [ ] $p + q + r = 0$ or $p = q = r$

- [ ] $p - q + r = 0$ or $p = -q = -r$

::: {.callout-note title="Answer" collapse=true}

- [ ] $p - q + r = 0$ or $q = p = -r$

- [ ] $p + q - r = 0$ or $p = -q = r$ 

- [x] $p + q + r = 0$ or $p = q = r$

- [ ] $p - q + r = 0$ or $p = -q = -r$

:::

::: {.callout-note title="Solution" collapse=true}

This is a homogenous system of linear equations. For this system to have a non-trivial solution, its nullspace should be non-trivial. Now for some row operations:
$$
\begin{bmatrix}
p & q & r\\
q & r & p\\
r & p & q
\end{bmatrix} \xrightarrow[]{R_1 \rightarrow R_1 + R_2 + R_3}
\begin{bmatrix}
p + q + r & p + q + r & p + q + r\\
q & r & p\\
r & p & q
\end{bmatrix}
$$
If $p + q + r = 0$ then the nullity is at least $1$. So this is one condition. Let us now assume that $p + q + r \neq 0$ and proceed:
$$
\begin{bmatrix}
p + q + r & p + q + r & p + q + r\\
q & r & p\\
r & p & q
\end{bmatrix} \xrightarrow[]{R_1 \rightarrow \frac{1}{p + q + r} R_1} \begin{bmatrix}
1 & 1 & 1\\
q & r & p\\
r & p & q
\end{bmatrix}
$$
We can now proceed further:
$$
\begin{bmatrix}
1 & 1 & 1\\
q & r & p\\
r & p & q
\end{bmatrix} \rightarrow \begin{bmatrix}
1 & 1 & 1\\
0 & r - q & p - r\\
0 & p - r & q - r
\end{bmatrix}
$$
The nullity can be non-zero if one of the last two rows is zero or one of them is a multiple of the other. If the second or third row is zero, we get $p = q = r$. If not, then we have:
$$
r - q = k(p - r) \text{ and } p - r = k(q - r)
$$
This is impossible for any real $k$. Therefore, we have:
$$
\boxed{p + q + r = 0 \text{ or } p = q = r}
$$


:::

