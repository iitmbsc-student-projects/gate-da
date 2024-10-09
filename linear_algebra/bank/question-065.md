---
title: Question-65
pagetitle: Question-65
order: 65
categories: [trace, matrix]
---

Let $\displaystyle A,B,C$ be three square matrices. Which of the following is equal to $\displaystyle \text{tr}( ABC)$?

- [ ] $\displaystyle \text{tr}( BCA)$
- [ ] $\displaystyle \text{tr}( CAB)$
- [ ] $\displaystyle \text{tr}( BAC)$
- [ ] $\displaystyle \text{tr}( ACB)$

::: {.callout-note title="Hint" collapse=true}
Use the property that $\text{tr}(AB) = \text{tr}(BA)$
:::

::: {.callout-note title="Answer" collapse=true}

- [x] $\displaystyle \text{tr}( BCA)$
- [x] $\displaystyle \text{tr}( CAB)$
- [ ] $\displaystyle \text{tr}( BAC)$
- [ ] $\displaystyle \text{tr}( ACB)$

:::

::: {.callout-note title="Solution" collapse=true}

We have:

$$
\begin{equation*}
\begin{aligned}
\text{tr}( ABC) & =\text{tr}( A( BC))\\
 & =\text{tr}(( BC) A)\\
 & =\text{tr}( BCA)
\end{aligned}
\end{equation*}
$$

Similarly:

$$
\begin{equation*}
\begin{aligned}
\text{tr}( ABC) & =\text{tr}(( AB) C)\\
 & =\text{tr}( C( AB))\\
 & =\text{tr}( CAB)
\end{aligned}
\end{equation*}
$$

As a counter example to options (3) and (4), consider the matrices:

$$
\begin{equation*}
A=\begin{bmatrix}
1 & 0\\
0 & 0
\end{bmatrix} ,\ B=\begin{bmatrix}
0 & 1\\
0 & 0
\end{bmatrix} ,\ C=\begin{bmatrix}
0 & 0\\
1 & 0
\end{bmatrix}
\end{equation*}
$$

We see that $\displaystyle \text{tr}( BAC) =\text{tr}( ACB) =0$. 

:::
