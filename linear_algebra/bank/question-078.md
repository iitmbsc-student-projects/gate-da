---
title: Question-78
pagetitle: Question-78
order: 78
categories: [basis, rank]
---

Consider the set of vectors given below:
 
$$
\displaystyle B = \{( x,1,1,1) ,( 1,x,1,1) ,( 1,1,x,1) ,( 1,1,1,x)\}
$$ 

Choose all values of $\displaystyle x$ for which $\displaystyle B$ is **not** a basis for $\displaystyle \mathbb{R}^{4}$.

- [ ] $x = 1$
- [ ] $x = -3$
- [ ] $x = 0$
- [ ] $x = -1$

::: {.callout-note title="Answer" collapse=true}

- [x] $x = 1$
- [x] $x = -3$
- [ ] $x = 0$
- [ ] $x = -1$

:::

::: {.callout-note title="Solution" collapse=true}

We have:

$$
\begin{bmatrix}
x & 1 & 1 & 1\\
1 & x & 1 & 1\\
1 & 1 & x & 1\\
1 & 1 & 1 & x
\end{bmatrix}
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

If $x = -3$, the last row is zero. The rank of the matrix is $3$. This shows that $B$ cannot be a basis for $\mathbb{R}^{4}$. Let us now assume that $x \neq -3$. This allows us to divide the last row by $x + 3$.


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

After a few more operations, we get the identity matrix. This shows that $\displaystyle A$ has rank $\displaystyle 4$ when $\displaystyle x\neq 1$ and $x \neq -3$. So $B$ is a basis for $\mathbb{R}^{4}$ so long as $x \not \in \{-3, 1\}$.

:::
