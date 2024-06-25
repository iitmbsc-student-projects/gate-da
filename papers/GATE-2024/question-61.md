---
title: Question-61
pagetitle: Questioin-61
order: 61
categories: [linear algebra,singular value,eigenvalue,DA-2024]
---

Let $\mathbf{u} = \begin{bmatrix}1\\2\\3\\4\\5\end{bmatrix}$ and let $\sigma_1, \sigma_2, \sigma_3, \sigma_4, \sigma_5$ be the singular values of the matrix $\mathbf{M} = \mathbf{u} \mathbf{u}^T$ (where $\mathbf{u}^T$ is the transpose of $\mathbf{u}$). The value of $\sum \limits_{i = 1}^{5} \sigma_i$ is ________.

::: {.callout-note title="Answer" collapse=true}

$55$

:::

::: {.callout-note title="Solution" collapse=true}

Some useful results:

- A matrix $A$ of rank $r$ has $r$ positive singular values.
- The first $r$ eigenvalues of $A^TA$ are the squares of the first $r$ singular values.
- A matrix of the form $u u^T$ is unit rank.
- $(||u||^2, u)$ is an eigenpair of $uu^T$. In fact, $||u||^2$ is the only eigenvalue for this matrix.
- If $\lambda$ is an eigenvalue of $A$, $n\lambda$ is an eigenvalue of $nA$.

With these results, we see that $M$ has exactly one non-zero singular value, namely $\sigma_1$, assuming it is the largest of the lot. The rest are zero. The largest eigenvalue of $M^TM$ is therefore $\sigma_1^2$. Since $M = uu^T$, $M^TM = ||u||^2 M$. From the RHS, we gather that the largest singular value of $M^TM$ is $||u||^4$. This leads us to:
$$
\sigma_1^2 = ||u||^4 \implies \sigma_1 = ||u||^2
$$
Since $||u||^2 = 55$, $\sum \limits_{i = 1}^{5} \sigma_i = 55$.

:::

