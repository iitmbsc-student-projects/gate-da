---
title: Question-21
pagetitle: Question-21
order: 21
categories: [eigenvalue, singular value]
---

Consider the matrix $A = \begin{bmatrix}1 & 0\\C & 1\end{bmatrix}$, where $C$ is some real number.

## Part-(a)

What are the eigenvalues of $A$?

- [ ] $1$ and $0$
- [ ] Only $0$
- [ ] Only $1$
- [ ] $A$ does not have any real eigenvalues.

::: {.callout-note title="Answer" collapse=true}

- [ ] $1$ and $0$
- [ ] Only $0$
- [x] Only $1$
- [ ] $A$ does not have any real eigenvalues.

:::

::: {.callout-note title="Solution" collapse=true}

Since $A$ is a lower triangular matrix, its eigenvalues are the elements on the diagonal. So $1$ is the only eigenvalue.

:::

## Part-(b)

Suppose $\sigma_1$ and $\sigma_2$ are the two singular values of $A$, what is $\sigma_1^2 + \sigma_2^2$?

- [ ] $0$
- [ ] $2$
- [ ] $C$
- [ ] $2 + C^2$
- [ ] Insufficient data

::: {.callout-note title="Answer" collapse=true}

- [ ] $0$
- [ ] $2$
- [ ] $C$
- [x] $2 + C^2$
- [ ] Insufficient data

:::

::: {.callout-note title="Solution" collapse=true}

The squares of the singular values of $A$ are the eigenvalues of $A^TA$. 
$$
A^TA = \begin{bmatrix}
1 + C^2 & C\\
C & 1
\end{bmatrix}
$$
The characterstic polynomial of $A^TA$ is:
$$
\lambda^2 - \left( 2 + C^2 \right)\lambda + 1 = 0
$$
The sum of the roots are $\sigma_1^2 + \sigma_2^2$. This is given by $2 + C^2$. 

:::