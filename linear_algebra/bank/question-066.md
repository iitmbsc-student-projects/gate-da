---
title: Question-66
pagetitle: Question-66
order: 66
categories: [determinant]
---

Which of the following statements are true for square matrices $\displaystyle A$ and $\displaystyle B$ of order $\displaystyle n$?

- [ ] $\displaystyle \text{det}( A) =\text{det}( -A)$
- [ ] $\displaystyle \text{det}( AB) =\text{det}( BA)$
- [ ] $\displaystyle \text{det}( A+B) =\text{det}( A) +\text{det}( B)$
- [ ] If the reduced row echelon form of $\displaystyle A$ is $\displaystyle I$, $\displaystyle \text{det}( A) =1$
- [ ] If the columns of $\displaystyle A$ are linearly dependent, $\displaystyle \text{det}( A) =0$

::: {.callout-note title="Answer" collapse=true}

- [ ] $\displaystyle \text{det}( A) =\text{det}( -A)$
- [x] $\displaystyle \text{det}( AB) =\text{det}( BA)$
- [ ] $\displaystyle \text{det}( A+B) =\text{det}( A) +\text{det}( B)$
- [ ] If the reduced row echelon form of $\displaystyle A$ is $\displaystyle I$, $\displaystyle \text{det}( A) =1$
- [x] If the columns of $\displaystyle A$ are linearly dependent, $\displaystyle \text{det}( A) =0$

:::

::: {.callout-note title="Solution" collapse=true}


#### Option-1

We have the following identity:

$$
\begin{equation*}
\text{det}( cA) =c^{n}\text{det}( A)
\end{equation*}
$$

Plugging $\displaystyle c=-1$, we see that $\displaystyle \text{det}( -A)$ being equal to $\displaystyle \text{det}( A)$ is dependent on the parity of $\displaystyle n$.

#### Option-2

We have the following identity:

$$
\begin{equation*}
\text{det}( AB) =\text{det}( A)\text{det}( B)
\end{equation*}
$$

It follows that $\displaystyle \text{det}( AB) =\text{det}( BA)$.

#### Option-3

As a counter example, consider $\displaystyle A=B=I$ with $\displaystyle n=2$.

$$
\begin{equation*}
\text{det}( A+B) =4,\ \text{det}( A) =\text{det}( B) =1
\end{equation*}
$$

#### Option-4

If the reduced row echelon form of $\displaystyle A$ is $\displaystyle I$, all that we can say is that $\displaystyle \text{det}( A) \neq 0$ since $\displaystyle A$ is invertible. We can furnish a counter example here:

$$
\begin{equation*}
A=\begin{bmatrix}
1 & 0\\
0 & -1
\end{bmatrix}
\end{equation*}
$$

$\displaystyle \text{det}( A) =-1$ even though its RREF is $\displaystyle I$.

#### Option-5

Without loss of generality, let the first column be expressible as a linear combination of the remaining $\displaystyle n-1$ columns:

$$
\begin{equation*}
C_{1} =a_{2} C_{2} +\cdots +a_{n} C_{n}
\end{equation*}
$$

We can now use the following column operation to get zeros in the first column:

$$
\begin{equation*}
C_{1}\rightarrow C_{1} -a_{2} C_{2} -\cdots -a_{n} C_{n}
\end{equation*}
$$

The determinant of the resulting matrix is zero. Since this column operation doesn't change the value of the determinant, we conclude that the original matrix also has determinant zero.

:::
