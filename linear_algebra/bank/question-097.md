---
title: Question-97
pagetitle: Question-97
order: 97
categories: [LU decomposition, system of equations]
---
Consider a system of linear equations $PX = Q$ where $P \in \mathbb{R}^{3 \times 3}$ and $Q \in \mathbb{R}^{3 \times 1}$. Suppose $P$ has an LU decomposition, $P = LU$, where
$$L = \begin{bmatrix} 1 & 0 & 0 \\ l_{21} & 1 & 0 \\ l_{31} & l_{32} & 1 \end{bmatrix} \quad \text{and} \quad U = \begin{bmatrix} u_{11} & u_{12} & u_{13} \\ 0 & u_{22} & u_{23} \\ 0 & 0 & u_{33} \end{bmatrix}.$$

Which of the following statement(s) is/are true?

- [ ] The system $PX = Q$ can be solved by first solving $LY = Q$ and then $UX = Y$.
- [ ] If $P$ is invertible, then both $L$ and $U$ are invertible.
- [ ] If $P$ is singular, then at least one of the diagonal elements of $U$ is zero.
- [ ] If $P$ is symmetric, then both $L$ and $U$ are symmetric.

::: {.callout-note title="Answer" collapse=true}

- [x] The system $PX = Q$ can be solved by first solving $LY = Q$ and then $UX = Y$.
- [x] If $P$ is invertible, then both $L$ and $U$ are invertible.
- [x] If $P$ is singular, then at least one of the diagonal elements of $U$ is zero.
- [ ] If $P$ is symmetric, then both $L$ and $U$ are symmetric.
:::

::: {.callout-note title="Solution" collapse=true}

 - If we have $\displaystyle PX=Q$ with $\displaystyle P=LU$, then, $\displaystyle LUX=Q$. Setting $\displaystyle Y:=UX$, we can first solve $\displaystyle LY=Q$ for $\displaystyle Y$ and then use the value of $\displaystyle Y$ to solve for $\displaystyle X$ in $\displaystyle UX=Y$.

 - With $\displaystyle P=LU$ and $\displaystyle P$ being invertible, both $\displaystyle L$ and $\displaystyle U$ have to be invertible. To see why, assume that $\displaystyle L$ is not invertible, then $\displaystyle L$ is not full rank. The column space of $\displaystyle P$ is a subspace of the column space of $\displaystyle L$. The column space of $\displaystyle L$ is strictly smaller than $\displaystyle \mathbb{R}^{3}$, however, the column space of $\displaystyle P$ is $\mathbb{R}^{3}$. This is a contradiction.

 - If $\displaystyle P$ is singular, then $\displaystyle |P|=0$. It follows that $\displaystyle |LU|=0$. From this, we see that $\displaystyle |L|\cdot |U|=0$. At least one of $\displaystyle |L|$ or $\displaystyle |U|$ is zero. Since both $\displaystyle L$ and $\displaystyle U$ are triangular, their determinants are the products of their diagonal entries. $\displaystyle |L|=1$. Therefore, $\displaystyle |U|=0$ and at least one of the diagonal entries of $\displaystyle U$ has to be zero.

 - If $\displaystyle P$ is symmetric, there is no necessity for $\displaystyle L$ and $\displaystyle U$ to be symmetric. As a counterexample, consider:

$$
P=\begin{bmatrix}
1 & 1 & 1\\
1 & 0 & 1\\
1 & 1 & 0
\end{bmatrix}
$$

|            Then:

$$
L=\begin{bmatrix}
1 & 0 & 0\\
1 & 1 & 0\\
1 & 0 & 1
\end{bmatrix} ,\ U=\begin{bmatrix}
1 & 1 & 1\\
0 & -1 & 0\\
0 & 0 & -1
\end{bmatrix}
$$


:::
