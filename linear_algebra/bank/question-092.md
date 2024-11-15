---
title: Question-92
pagetitle: Question-92
order: 92
categories: [orthogonal matrix, symmetric matrix, eigenvalue, eigenvector]
---

Let $\displaystyle A$ be square matrix of order $\displaystyle 2$ that reflects vectors about a unit vector $\displaystyle v$. $\displaystyle v^{\perp }$ is a unit vector orthogonal to $\displaystyle v$. Find the number of true statements from the ones given below.

- $\displaystyle v$ is an eigenvector of $\displaystyle A$ with eigenvalue $\displaystyle 1$
- $\displaystyle v^{\perp }$ is an eigenvector of $\displaystyle A$ with eigenvalue $\displaystyle -1$
- $\displaystyle A=vv^{T} -v^{\perp } v{^{\perp }}^{T}$
- $\displaystyle A$ is invertible
- $\displaystyle A$ is symmetric
- $\displaystyle A$ is orthogonal

::: {.callout-note title="Answer" collapse=true}

$6$

:::

::: {.callout-note title="Solution" collapse=true}

Since $\displaystyle A$ is a reflector about $\displaystyle v$, it will leave $\displaystyle v$ unchanged. That is, $\displaystyle Av=v$, which implies that $\displaystyle ( 1,v)$ is an eigenpair of $\displaystyle A$. Since $\displaystyle v^{\perp }$ is orthogonal to $\displaystyle v$, reflecting it on $\displaystyle v$ will result in $\displaystyle -v^{\perp }$. That is, $\displaystyle Av^{\perp } =-v^{\perp }$, which implies that $\displaystyle \left( -1,v^{\perp }\right)$ is an eigenpair of $\displaystyle A$. Using these two results and the fact that the matrix whose columns are $\displaystyle v,v^{\perp }$ is orthogonal:

$$
\begin{equation*}
\begin{aligned}
A\begin{bmatrix}
| & |\\
v & v^{\perp }\\
| & |
\end{bmatrix} & =\begin{bmatrix}
| & |\\
Av & Av^{\perp }\\
| & |
\end{bmatrix}\\
 & =\begin{bmatrix}
| & |\\
v & -v^{\perp }\\
| & |
\end{bmatrix}\\
\Longrightarrow A & =\begin{bmatrix}
| & |\\
v & -v^{\perp }\\
| & |
\end{bmatrix}\begin{bmatrix}
- & v^{T} & -\\
- & v{^{\perp }}^{T} & -
\end{bmatrix}\\
 & \\
 & =vv^{T} -v^{\perp } v{^{\perp }}^{T}
\end{aligned}
\end{equation*}
$$

We see that $\displaystyle A^{T} =A$, so $\displaystyle A$ is symmetric. If $\displaystyle Q_{1} =\begin{bmatrix}
| & |\\
v & -v^{\perp }\\
| & |
\end{bmatrix}$ and $\displaystyle Q_{2} =\begin{bmatrix}
| & |\\
v & v^{\perp }\\
| & |
\end{bmatrix}$ then $\displaystyle A=Q_{1} Q_{2}^{T}$, showing that $\displaystyle A$ is orthogonal (product of orthogonal matrices is orthogonal). Since $\displaystyle A$ is orthogonal, it is invertible.

All the statements given above are true.

:::