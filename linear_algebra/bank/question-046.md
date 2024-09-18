---
title: Question-46
pagetitle: Question-46
order: 46
categories: [idempotent matrix]
---

Select all true statements concerning an idempotent matrix $A$.

- [ ] $A^{n} = A$, for $n \geq 2$ and $n \in \mathbb{N}$
- [ ] If $\lambda$ is an eigenvalue of $A$, then $\lambda = 0, 1$
- [ ] If $A$ is invertible, then $A = I$
- [ ] $|\text{det}(A)| > 1$
- [ ] $A$ is full rank.
- [ ] $A$ is symmetric.

::: {.callout-note title="Answer" collapse=true}

- [x] $A^{n} = A$, for $n \geq 2$ and $n \in \mathbb{N}$
- [x] If $\lambda$ is an eigenvalue of $A$, then $\lambda = 0, 1$
- [x] If $A$ is invertible, then $A = I$
- [ ] $|\text{det}(A)| > 1$
- [ ] $A$ is full rank.
- [ ] $A$ is symmetric.

:::

::: {.callout-note title="Solution" collapse=true}

If $\displaystyle A$ is idempotent, then $\displaystyle A^{2} =A$. 

- It follows by induction that $\displaystyle A^{n} =A$ for $\displaystyle n\geqslant 2$ and $\displaystyle n\in \mathbb{N}$.
- If $\displaystyle A$ is invertible, we have:

\begin{equation*}
\begin{aligned}
A & =AI\\
 & =AAA^{-1}\\
 & =A^{2} A^{-1}\\
 & =AA^{-1}\\
 & =I
\end{aligned}
\end{equation*}

- If $\displaystyle ( \lambda ,v)$ is an eigenpair of $\displaystyle A$:

\begin{equation*}
\begin{aligned}
A^{2} v & =Av\\
\lambda ^{2} v & =\lambda v\\
\lambda ( \lambda -1) v & =0
\end{aligned} \Longrightarrow \lambda =0,1
\end{equation*}

:::
