---
title: Question-20
pagetitle: Question-20
order: 20
categories: [expectation, variance, random variable, probability, DA-2025]
---

Let $X=aZ+b$, where $Z$ is a standard normal random variable, and $a,b$ are two unknown constants. It is given that

\begin{gather*}
E[ X] =1,\ \ E[( X-E[ X]) Z] =-2,\ \ \\
\\
E\left[( X-E[ X])^{2}\right] =4
\end{gather*}

where $E[ X]$ denotes the expectation of the random variable $X$. The values of $a,b$ are:

 - [ ] $a=-2,b=1$

 - [ ] $a=2,b=-1$

 - [ ] $a=-2,b=-1$

 - [ ] $a=1,b=1$

::: {.callout-note title="Answer" collapse=true}

 - [x] $a=-2,b=1$

 - [ ] $a=2,b=-1$

 - [ ] $a=-2,b=-1$

 - [ ] $a=1,b=1$

:::

::: {.callout-note title="Solution" collapse=true}

Since $Z$ is a standard normal random variable, $E[ Z] =0$ and $E\left[ Z^{2}\right] =1$. Also, given $X=aZ+b$, we have $E[ X] =b$ and $E\left[( X-E[ X])^{2}\right] =a^{2}$. From the given data, we see that $b=1$ and $a=\pm 2$. Using the final piece of information:

$$
\begin{array}{ r l c }
 & E[( X-E[ X]) Z] & =-2\\
\Longrightarrow  & E\left[ aZ^{2}\right] & =-2\\
\Longrightarrow  & aE\left[ Z^{2}\right] & =-2\\
\Longrightarrow  & a & =-2
\end{array}
$$

:::