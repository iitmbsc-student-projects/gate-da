---
title: Question-25
pagetitle: Question-25
order: 25
categories: [linear independence, orthogonality, orthonormal basis, DA-2025]
---

Which of the following statements is/are correct?

 - [ ] $\mathbb{R}^{n}$ has a unique set of orthonormal basis vectors.

 - [ ] $\mathbb{R}^{n}$ does not have a unique set of orthonormal basis vectors.

 - [ ] Linearly independent vectors in $\mathbb{R}^{n}$ are orthonormal.

 - [ ] Orthonormal vectors in $\mathbb{R}^{n}$ are linearly independent.

::: {.callout-note title="Answer" collapse=true}

 - [ ] $\mathbb{R}^{n}$ has a unique set of orthonormal basis vectors.

 - [x] $\mathbb{R}^{n}$ does not have a unique set of orthonormal basis vectors.

 - [ ] Linearly independent vectors in $\mathbb{R}^{n}$ are orthonormal.

 - [x] Orthonormal vectors in $\mathbb{R}^{n}$ are linearly independent.

:::

::: {.callout-note title="Solution" collapse=true}

 - $\mathbb{R}^{n}$ has infinitely many orthonormal bases. One non-standard example for $\mathbb{R}^{2}$ is $\left\{\frac{1}{\sqrt{2}}( 1,1) ,\frac{1}{\sqrt{2}}( 1,-1)\right\}$.

 - Independence doesn't imply orthogonality. For example, $\{( 1,1) ,( 2,1)\}$ are independent but not orthogonal.

 - Orthonormality implies independence. To show this, let $\{v_{1} ,\cdots ,v_{m}\}$ be an orthonormal set, then let $\begin{aligned}
c_{1} v_{1} +\cdots +c_{m} v_{m} & =0
\end{aligned}$. Multiplying both sides by $v_{i}^{T}$, we get $c_{i} =0$. Since $c_{1} =\cdots =c_{m} =0$ is the only combination that sends the linear combination to zero, $\{v_{1} ,\cdots ,v_{m}\}$ is an independent set of vectors.

:::