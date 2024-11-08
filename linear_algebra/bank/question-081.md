---
title: Question-81
pagetitle: Question-81
order: 81
categories: [subspace, column space, row space, null space]
---


Two matrices $\displaystyle A$ and $\displaystyle B$ have the same reduced row echelon form. Which of the following subspaces are the same for both $\displaystyle A$ and $\displaystyle B$? $\displaystyle \mathcal{N}( \cdot )$ and $\displaystyle \mathcal{C}( \cdot )$ refers to the nullspace and column space respectively.

- [ ] $\displaystyle \mathcal{N}( A) =\mathcal{N}( B)$
- [ ] $\displaystyle \mathcal{C}( A) =\mathcal{C}( B)$
- [ ] $\displaystyle \mathcal{N}\left( A^{T}\right) =\mathcal{N}\left( B^{T}\right)$
- [ ] $\displaystyle \mathcal{C}\left( A^{T}\right) =\mathcal{C}\left( B^{T}\right)$

::: {.callout-note title="Answer" collapse=true}

- [x] $\displaystyle \mathcal{N}( A) =\mathcal{N}( B)$
- [ ] $\displaystyle \mathcal{C}( A) =\mathcal{C}( B)$
- [ ] $\displaystyle \mathcal{N}\left( A^{T}\right) =\mathcal{N}\left( B^{T}\right)$
- [x] $\displaystyle \mathcal{C}\left( A^{T}\right) =\mathcal{C}\left( B^{T}\right)$

:::

::: {.callout-note title="Solution" collapse=true}

The null spaces of the two matrices are the same.

To see this, first we note that if $\displaystyle A$ and $\displaystyle B$ have the same RREF, there exist invertible matrices $\displaystyle E_{A}$ and $\displaystyle E_{B}$ such that $\displaystyle E_{A} A=E_{B} B$. This is because, each row operation corresponds to pre-multiplication by an elementary matrix and elementary matrices are invertible. With this information, we proceed:

$$
\begin{equation*}
\begin{array}{ l c }
 & x\in \mathcal{N}( A)\\
\Longleftrightarrow  & Ax=0\\
\Longleftrightarrow  & E_{A} Ax=0\\
\Longleftrightarrow  & E_{B} Bx=0\\
\Longleftrightarrow  & Bx=0\\
\Longleftrightarrow  & x\in \mathcal{N}( B)
\end{array}
\end{equation*}
$$

Since row operations are reversible, $\displaystyle A$ and $\displaystyle B$ have the same row space. This implies that $\displaystyle \mathcal{C}\left( A^{T}\right) =\mathcal{C}\left( B^{T}\right)$.

The other two spaces are not necessarily the same. As a counterexample, consider:

$$
\begin{equation*}
A=\begin{bmatrix}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 0
\end{bmatrix} ,\ B=\begin{bmatrix}
1 & 0 & 0\\
0 & 1 & 0\\
1 & 1 & 0
\end{bmatrix}
\end{equation*}
$$

Both $\displaystyle A$ and $\displaystyle B$ have the same RREF. We have:

$$
\begin{equation*}
\begin{aligned}
\mathcal{C}( A) & =\text{span}\{( 1,0,0) ,( 0,1,0)\}\\
\mathcal{C}( B) & =\text{span}\{( 1,0,1) ,( 0,1,1)\}
\end{aligned}
\end{equation*}
$$

Now, consider $\displaystyle A^{T}$ and $\displaystyle B^{T}$:

$$
\begin{equation*}
A^{T} =\begin{bmatrix}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 0
\end{bmatrix} ,\ B^{T} =\begin{bmatrix}
1 & 0 & 1\\
0 & 1 & 1\\
0 & 0 & 0
\end{bmatrix}
\end{equation*}
$$

We have:

$$
\begin{equation*}
\begin{aligned}
\mathcal{N}( A) & =\text{span}\{( 0,0,1)\}\\
\mathcal{N}( B) & =\text{span}\{( 1,1,-1)\}
\end{aligned}
\end{equation*}
$$
:::
