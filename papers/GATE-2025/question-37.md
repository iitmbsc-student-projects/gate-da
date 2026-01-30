---
title: Question-37
pagetitle: Question-37
order: 37
categories: [rank, invertibility, DA-2025]
---

Let $A\in \mathbb{R}^{n\times n}$ be such that $A^{3} =A$. Which one of the following statements is always correct?

 - [ ] $A$ is invertible
 - [ ] Determinant of $A$ is $0$
 - [ ] The sum of the diagonal elements of $A$ is $1$
 - [ ] $A$ and $A^{2}$ have the same rank

::: {.callout-note title="Answer" collapse=true}

 - [ ] $A$ is invertible
 - [ ] Determinant of $A$ is $0$
 - [ ] The sum of the diagonal elements of $A$ is $1$
 - [x] $A$ and $A^{2}$ have the same rank

:::

::: {.callout-note title="Solution" collapse=true}

Let us work with the equation given:

$$
\begin{array}{ r l l }
 & A^{3} & =A\\
\Longrightarrow  & A\left( A^{2} -I\right) & =0\\
\Longrightarrow  & A( A+I)( A-I) & =0
\end{array}
$$

A few observations follow:

 - $A=0$ satisfies the above equation. This suggests that $A$ is not always invertible.
 - $A=I$ satisfies the above equation. This suggests that the determinant of $A$ is not always zero. This also suggests that the trace of $A$ is not always $1$.
 
By elimination, we are left with the last option. However, let us go ahead and prove this. Note that matrix multiplication can never increase the rank. That is, if $A$ and $B$ are compatible for multiplication, then $\text{rank}( AB) \leqslant \underset{}{\min}\left(\text{rank}( A) ,\text{rank}( B)\right)$. From this, we have:

$$
\text{rank}\left( A^{3}\right) \leqslant \text{rank}\left( A^{2}\right) \leqslant \text{rank}( A)
$$

Since $A=A^{3}$, we see that $A$ and $A^{2}$ have the same rank.

:::