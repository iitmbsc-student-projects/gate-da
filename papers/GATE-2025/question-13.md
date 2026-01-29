---
title: Question-13
pagetitle: Question-13
order: 13
categories: [eigenvalue, eigenvector, system of equations, DA-2025]
---

The sum of the elements in each row of $A\in \mathbb{R}^{n\times n}$ is $1$. If $B=A^{3} -2A^{2} +A$, which one of the following statements is correct (for $x\in \mathbb{R}^{n}$)?

 - [ ] The equation $Bx=0$ has no solution.
 - [ ] The equation $Bx=0$ has exactly two solutions.
 - [ ] The equation $Bx=0$ has infinitely many solutions.
 - [ ] The equation $Bx=0$ has a unique solution.

::: {.callout-note title="Answer" collapse=true}

 - [ ] The equation $Bx=0$ has no solution.
 - [ ] The equation $Bx=0$ has exactly two solutions.
 - [x] The equation $Bx=0$ has infinitely many solutions.
 - [ ] The equation $Bx=0$ has a unique solution.

:::

::: {.callout-note title="Solution" collapse=true}

We can factor $B$ as:

$$
\begin{aligned}
B & =A^{3} -2A^{2} +A\\
 & =A\left( A^{2} -2A+I\right)\\
 & =A( A-I)^{2}
\end{aligned}
$$

Now, if the sum of elements in each row of $A$ is $1$, then the sum of the columns of $A$ is equal to the vector $v=( 1,\cdots ,1)$. From here, we see that $Av=v$. That is, $v$ is an eigenvector of $A$ with eigenvalue $1$. It follows that $v$ is also an eigenvector of $A-I$ with eigenvalue $0$. If $( A-I) v=0$, then $( A-I)( kv) =0$ for $k\in \mathbb{R}$. Therefore, the system $( A-I) x=0$ has infinitely many solutions. It follows that $Bx=0$ has infinitely many solutions.

:::