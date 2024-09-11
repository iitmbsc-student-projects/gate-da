---
title: Question-10
pagetitle: Question-10
order: 10
categories: [PCA]
---

$\displaystyle k:\mathbb{R}^{2} \times \mathbb{R}^{2}\rightarrow \mathbb{R}$ is a kernel defined as:

\begin{equation*}
k(\mathbf{x} ,\mathbf{y}) =\left( 1+\mathbf{x}^{T}\mathbf{y}\right)^{2}
\end{equation*}

$\displaystyle \phi :\mathbb{R}^{2}\rightarrow \mathbb{R}^{D}$ is a transformation corresponding to this kernel such that:

\begin{equation*}
k(\mathbf{x} ,\mathbf{y}) =\phi (\mathbf{x})^{T} \phi (\mathbf{y})
\end{equation*}
Find $\displaystyle D$.

::: {.callout-note title="Hint" collapse=true}

Expand the kernel's output and separate the terms into those that belong to $\mathbf{x}$ and those that belong to $\mathbf{y}$.

:::

::: {.callout-note title="Answer" collapse=true}

$6$

:::

::: {.callout-note title="Solution" collapse=true}

Expanding the action of the kernel on $\displaystyle \mathbf{x} =( x_{1} ,x_{2}) ,\mathbf{y} =( y_{1} ,y_{2})$:

\begin{equation*}
\begin{aligned}
k(\mathbf{x} ,\mathbf{y}) & =( 1+x_{1} y_{1} +x_{2} y_{2})^{2}\\
 & \\
 & =1+x_{1}^{2} y_{1}^{2} +x_{2}^{2} y_{2}^{2} +2x_{1} x_{2} y_{1} y_{2} +2x_{1} y_{1} +2x_{2} y_{2}\\
 & \\
 & =\phi (\mathbf{x})^{T} \phi (\mathbf{y})
\end{aligned}
\end{equation*}

Here:

\begin{equation*}
\phi (\mathbf{x}) =\begin{bmatrix}
1\\
x_{1}^{2}\\
x_{2}^{2}\\
\sqrt{2} x_{1} x_{2}\\
\sqrt{2} x_{1}\\
\sqrt{2} x_{2}
\end{bmatrix}
\end{equation*}
We see that $\displaystyle D=6$.

:::
