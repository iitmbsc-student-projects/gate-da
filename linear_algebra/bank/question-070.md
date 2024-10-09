---
title: Question-70
pagetitle: Question-70
order: 70
categories: [eigenvalue, eigenvector]
---

Let $\displaystyle A,B,P$ be square matrices such that $\displaystyle A=PBP^{-1}$ for some invertible matrix $\displaystyle P$. Which of the following statements are true?

- [ ] $\displaystyle A$ and $\displaystyle B$ have the same eigenvalues.

- [ ] $\displaystyle A$ and $\displaystyle B$ have the same eigenvectors.

- [ ] If $\displaystyle v$ is an eigenvector of $\displaystyle B$, then $\displaystyle Pv$ is an eigenvector of $\displaystyle A$.

- [ ] If $\displaystyle Pv$ is an eigenvector of $\displaystyle A$, then $\displaystyle v$ is an eigenvector of $\displaystyle B$.

::: {.callout-note title="Answer" collapse=true}

- [x] $\displaystyle A$ and $\displaystyle B$ have the same eigenvalues.

- [ ] $\displaystyle A$ and $\displaystyle B$ have the same eigenvectors.

- [x] If $\displaystyle v$ is an eigenvector of $\displaystyle B$, then $\displaystyle Pv$ is an eigenvector of $\displaystyle A$.

- [x] If $\displaystyle Pv$ is an eigenvector of $\displaystyle A$, then $\displaystyle v$ is an eigenvector of $\displaystyle B$.

:::

::: {.callout-note title="Solution" collapse=true}


#### Option-1: $\displaystyle A$ and $\displaystyle B$ have the same eigenvalues

To see this, consider the characteristic polynomial of $\displaystyle A$:

$$
\begin{equation*}
\begin{aligned}
|A-\lambda I| & =|PBP^{-1} -\lambda I|\\
 & =|PBP^{-1} -\lambda PIP^{-1} |\\
 & =|P( B-\lambda I) P^{-1} |\\
 & =|P|\cdot |B-\lambda I|\cdot |P^{-1} |\\
 & =|B-\lambda I|
\end{aligned}
\end{equation*}
$$

We see that $\displaystyle A$ and $\displaystyle B$ have the same characteristic polynomials and hence the same eigenvalues.

#### Option-2: $\displaystyle A$ and $\displaystyle B$ needn't have the same eigenvectors

Consider:

$$
\begin{equation*}
A=\begin{bmatrix}
1 & 2\\
2 & 1
\end{bmatrix} ,\ P=\frac{1}{\sqrt{2}}\begin{bmatrix}
-1 & 1\\
1 & 1
\end{bmatrix} ,\ B=\begin{bmatrix}
-1 & 0\\
0 & 3
\end{bmatrix}
\end{equation*}
$$

Verify that $\displaystyle A=PBP^{-1}$. In fact, here $\displaystyle P^{-1} =P^{T}$. The columns of $\displaystyle P$ are the eigenvectors of $\displaystyle A$, while the vectors of the standard basis are the eigenvectors of $\displaystyle B$.

#### Option-3: $\displaystyle v$ is an eigenvector of $\displaystyle B$

Let $\displaystyle ( \lambda ,v)$ be an eigenpair of $\displaystyle B$. We know that $\displaystyle A=PBP^{-1}$ which implies that $\displaystyle AP=PB$. Now:

$$
\begin{equation*}
\begin{aligned}
A( Pv) & =PBv\\
 & =P( Bv)\\
 & =P( \lambda v)\\
 & =\lambda ( Pv)
\end{aligned}
\end{equation*}
$$

#### Option-4: $\displaystyle Pv$ is an eigenvector of $\displaystyle A$

Let $\displaystyle ( \lambda ,Pv)$ be an eigenpair of $\displaystyle A$. Then:

$$
\begin{equation*}
\begin{aligned}
A( Pv) & =\lambda ( Pv)\\
\left( P^{-1} AP\right) v & =\lambda v\\
Bv & =\lambda v
\end{aligned}
\end{equation*}
$$

We see that $\displaystyle ( \lambda ,v)$ is an eigenpair of $\displaystyle B$.

:::