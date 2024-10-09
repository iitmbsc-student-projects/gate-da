---
title: Question-61
pagetitle: Question-61
order: 61
categories: [rank]
---

Consider the following square matrix of order $\displaystyle n$ that is given by:

$$
\begin{equation*}
A=( x-1) I+vv^{T}
\end{equation*}
$$

Here, $\displaystyle x\in ( 1-\epsilon ,1+\epsilon )$ for $\displaystyle \epsilon \ll 1$, $\displaystyle v=( 1,\cdots ,1)$ is a vector of ones and $\displaystyle I$ is the identity matrix. Which of the following are true?

- [ ] If $\displaystyle x=1$, the rank of $\displaystyle A$ is $\displaystyle 1$
- [ ] If $\displaystyle x=1$, the rank of $\displaystyle A$ is equal to $\displaystyle n$
- [ ] If $\displaystyle x\neq 1$, the rank of $\displaystyle A$ is equal to $\displaystyle 1$
- [ ] If $\displaystyle x\neq 1$, the rank of $\displaystyle A$ is equal to $\displaystyle n$

::: {.callout-note title="Hint" collapse=true}

Take a simple $3 \times 3$ or $4 \times 4$ matrix and perform row reduction. Generalise.

:::

::: {.callout-note title="Answer" collapse=true}

- [x] If $\displaystyle x=1$, the rank of $\displaystyle A$ is $\displaystyle 1$
- [ ] If $\displaystyle x=1$, the rank of $\displaystyle A$ is equal to $\displaystyle n$
- [ ] If $\displaystyle x\neq 1$, the rank of $\displaystyle A$ is equal to $\displaystyle 1$
- [x] If $\displaystyle x\neq 1$, the rank of $\displaystyle A$ is equal to $\displaystyle n$

:::

::: {.callout-note title="Solution" collapse=true}


Let us take a look at a simple case of $\displaystyle n=4$. $\displaystyle vv^{T}$ is just a matrix of ones.

$$
\begin{equation*}
\begin{bmatrix}
x-1 & 0 & 0 & 0\\
0 & x-1 & 0 & 0\\
0 & 0 & x-1 & 0\\
0 & 0 & 0 & x-1
\end{bmatrix} +\begin{bmatrix}
1 & 1 & 1 & 1\\
1 & 1 & 1 & 1\\
1 & 1 & 1 & 1\\
1 & 1 & 1 & 1
\end{bmatrix} =\begin{bmatrix}
x & 1 & 1 & 1\\
1 & x & 1 & 1\\
1 & 1 & x & 1\\
1 & 1 & 1 & x
\end{bmatrix}
\end{equation*}
$$


If $\displaystyle x=1$, this is clearly a matrix of rank $\displaystyle 1$. So let us assume that $\displaystyle x\neq 1$. We now proceed with row reduction:

#### Step-1

$$
\begin{equation*}
\begin{bmatrix}
x & 1 & 1 & 1\\
1 & x & 1 & 1\\
1 & 1 & x & 1\\
1 & 1 & 1 & x
\end{bmatrix}\xrightarrow{R_{4}\rightarrow R_{4} +R_{3} +R_{2} +R_{1}}\begin{bmatrix}
x & 1 & 1 & 1\\
1 & x & 1 & 1\\
1 & 1 & x & 1\\
x+3 & x+3 & x+3 & x+3
\end{bmatrix}
\end{equation*}
$$

#### Step-2

Since $\displaystyle x\in ( 1-\epsilon ,1+\epsilon )$ for a small $\displaystyle \epsilon$, $\displaystyle x+3\neq 0$. This allows us to do the following row operation:

$$
\begin{equation*}
\begin{bmatrix}
x & 1 & 1 & 1\\
1 & x & 1 & 1\\
1 & 1 & x & 1\\
x+3 & x+3 & x+3 & x+3
\end{bmatrix}\xrightarrow{R_{4}\rightarrow \frac{1}{x+3} R_{4}}\begin{bmatrix}
x & 1 & 1 & 1\\
1 & x & 1 & 1\\
1 & 1 & x & 1\\
1 & 1 & 1 & 1
\end{bmatrix}
\end{equation*}
$$

#### Step-3

We can use the last row to eliminate a lot of entries in the first three rows:

$$
\begin{equation*}
\begin{bmatrix}
x & 1 & 1 & 1\\
1 & x & 1 & 1\\
1 & 1 & x & 1\\
1 & 1 & 1 & 1
\end{bmatrix}\rightarrow \begin{bmatrix}
x-1 & 0 & 0 & 0\\
0 & x-1 & 0 & 0\\
0 & 0 & x-1 & 0\\
1 & 1 & 1 & 1
\end{bmatrix}
\end{equation*}
$$

#### Step-4

Since $\displaystyle x\neq 1$, we can divide by $\displaystyle x-1$ in each of the first three rows:

$$
\begin{equation*}
\begin{bmatrix}
x-1 & 0 & 0 & 0\\
0 & x-1 & 0 & 0\\
0 & 0 & x-1 & 0\\
1 & 1 & 1 & 1
\end{bmatrix}\rightarrow \begin{bmatrix}
1 & 0 & 0 & 0\\
0 & 1 & 0 & 0\\
0 & 0 & 1 & 0\\
1 & 1 & 1 & 1
\end{bmatrix}
\end{equation*}
$$

After a few more operations, we get the identity matrix. This shows that $\displaystyle A$ has rank $\displaystyle 4$ when $\displaystyle x\neq 1$. These steps readily generalise to any $\displaystyle n$.

:::
