---
title: Question-53
pagetitle: Question-53
order: 53
categories: [matrix, matrix inverse]
---

$\displaystyle A$ is a square matrix that satisfies the following equation:

$$
\begin{equation*}
A^{3} -4A^{2} +3A-5I=0
\end{equation*}
$$

where $\displaystyle I$ is the identity matrix. Which of the following statements are true?

- [ ] $\displaystyle A$ is invertible

- [ ] $\displaystyle A$ is not invertible

- [ ] $\displaystyle A^{-1} =\frac{1}{5}( A-3I)( A-I)$

- [ ] $\displaystyle A^{-1} =A$


::: {.callout-note title="Hint" collapse=true}

Factorize the matrix expression on the LHS after moving $5I$ out of the way.

:::

::: {.callout-note title="Answer" collapse=true}

- [x] $\displaystyle A$ is invertible

- [ ] $\displaystyle A$ is not invertible

- [x] $\displaystyle A^{-1} =\frac{1}{5}( A-3I)( A-I)$

- [ ] $\displaystyle A^{-1} =A$

:::

::: {.callout-note title="Solution" collapse=true}

We can work with the matrix equation on the left as though we were factorizing a polynomial:

$$
\begin{equation*}
\begin{aligned}
A^{3} -4A^{2} +3A-5I & =0\\
A^{3} -4A^{2} +3A & =5I\\
A\left( A^{2} -4A+3I\right) & =5I\\
A\left(\frac{A^{2} -4A+3I}{5}\right) & =I
\end{aligned}
\end{equation*}
$$

Since $\displaystyle A$ is a square matrix and since we have $\displaystyle AB=I$ where $\displaystyle B$ is some other square matrix, $\displaystyle A$ is invertible and $\displaystyle B$ is its inverse. We can factor the inverse as follows:

$$
\begin{equation*}
A^{-1} =\frac{1}{5}( A-3I)( A-I)
\end{equation*}
$$

:::
