---
title: Question-12
pagetitle: Question-12
order: 12
categories: [gaussian elimination, system of equations, DA-2025]
---

The number of additions and multiplications involved in performing Gaussian elimination on any n × n upper triangular matrix is of the order

 - [ ] $O( n)$
 - [ ] $O\left( n^{2}\right)$
 - [ ] $O\left( n^{3}\right)$
 - [ ] $O\left( n^{4}\right)$

::: {.callout-note title="Answer" collapse=true}

 - [ ] $O( n)$
 - [x] $O\left( n^{2}\right)$
 - [ ] $O\left( n^{3}\right)$
 - [ ] $O\left( n^{4}\right)$

:::

::: {.callout-note title="Solution" collapse=true}

Gaussian elimination leads to an upper triangular matrix which is then used to solve the system $Ax=b$. However, we already have an upper triangular matrix. So all that we need to do is find the complexity involved in backward substitution. For the $i^{\text{th}}$ row, to solve for $x_{i}$, we would require about $i$ elementary operations. Overall:

$$
\sum\limits _{i=1}^{n} i=\frac{n( n+1)}{2}
$$

Hence, the complexity is $O\left( n^{2}\right)$.

:::