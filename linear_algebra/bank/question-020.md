---
title: Question-20
pagetitle: Question-20
order: 20
categories: [matrix, positive definiteness, eigenvalue]
---

If $A$ is a real matrix, select all true statements.

- [ ] $A^TA$ is positive semi-definite.
- [ ] $A^TA$ and $AA^T$ have the same eigenvectors.
- [ ] $A^TA$ is symmetric if and only if $A$ is symmetric.
- [ ] $A^TA$ and $AA^T$ have the same non-zero eigenvalues.

::: {.callout-note title="Answer" collapse=true}

- [x] $A^TA$ is positive semi-definite.
- [ ] $A^TA$ and $AA^T$ have the same eigenvectors.
- [ ] $A^TA$ is symmetric if and only if $A$ is symmetric.
- [x] $A^TA$ and $AA^T$ have the same non-zero eigenvalues.

:::

::: {.callout-note title="Solution" collapse=true}

Let $\displaystyle ( \lambda ,v)$ be an eigenpair of of $\displaystyle A^{T} A$ with $\displaystyle \lambda \neq 0$:


$$
\begin{aligned}
\left( A^{T} A\right) v & =\lambda v\\
\left( AA^{T}\right) (Av) & =\lambda ( Av)\\
\left( AA^{T}\right)( Av) & =\lambda ( Av)
\end{aligned}
$$


This is of the form $\displaystyle \left( AA^{T}\right) u=\lambda u$. For $\displaystyle ( \lambda ,u)$ to be an eigenpair of $\displaystyle AA^{T}$, $\displaystyle u=Av$ has to be non-zero. To show this, do the following. If $\displaystyle u=Av=0$, then $\displaystyle A^{T} Av=0\Longrightarrow \lambda v=0$. Since $\displaystyle \lambda \neq 0$, $\displaystyle v=0$ which contradicts the fact that $\displaystyle ( \lambda ,v)$ is an eigenpair of $\displaystyle A^{T} A$.

---

Let $\displaystyle ( \lambda ,v)$ be an eigenpair of $\displaystyle A^{T} A$. Then:


$$
\begin{aligned}
A^{T} Av & =\lambda v\\
v^{T} A^{T} Av & =\lambda \left( v^{T} v\right)\\
( Av)^{T}( Av) & =\lambda \left( v^{T} v\right)\\
\Longrightarrow \lambda  & =\frac{||Av||^{2}}{||v||^{2}} \geqslant 0
\end{aligned}
$$


We can divide by $\displaystyle ||v||^{2}$ as $\displaystyle v\neq 0$ for it is an eigenvector. Since all the eigenvalues of $\displaystyle A^{T} A$ are non-negative, $\displaystyle A^{T} A$ is positive semi definite.

:::