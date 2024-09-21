---
title: Question-36
pagetitle: Question-36
order: 36
categories: [limit]
---

Consider a sequence $\displaystyle \{a_{n}\}$ with $\displaystyle a_{n} =\frac{n^{2} +1}{n^{2}}$. Let $\displaystyle \{b_{n}\}$ be another sequence defined as $\displaystyle b_{n} =2a_{n}^{2} +3a_{n} +1$. Which of the following options are true?

- [ ] $\displaystyle \{a_{n}\}$ is a decreasing, bounded sequence
- [ ] $\displaystyle \{a_{n}\}$ is an increasing, bounded sequence.
- [ ] $\displaystyle \{a_{n}\}$ is an increasing, unbounded sequence.
- [ ] $\displaystyle \{b_{n}\}$ is an increasing, unbounded sequence.
- [ ] $\displaystyle \lim\limits _{n\rightarrow \infty } \ a_{n} =2$
- [ ] $\displaystyle \lim\limits _{n\rightarrow \infty } \ b_{n} =6$
- [ ] $\displaystyle \lim\limits _{n\rightarrow \infty } b_{n} =\infty$


::: {.callout-note title="Answer" collapse=true}

- [x] $\displaystyle \{a_{n}\}$ is a decreasing, bounded sequence
- [ ] $\displaystyle \{a_{n}\}$ is an increasing, bounded sequence.
- [ ] $\displaystyle \{a_{n}\}$ is an increasing, unbounded sequence.
- [ ] $\displaystyle \{b_{n}\}$ is an increasing, unbounded sequence.
- [x] $\displaystyle \lim\limits _{n\rightarrow \infty } \ a_{n} =2$
- [x] $\displaystyle \lim\limits _{n\rightarrow \infty } \ b_{n} =6$
- [ ] $\displaystyle \lim\limits _{n\rightarrow \infty } b_{n} =\infty$


:::

::: {.callout-note title="Solution" collapse=true}


We have:

$$
\begin{equation*}
a_{n} =\frac{n^{2} +1}{n^{2}} =1+\frac{1}{n^{2}}
\end{equation*}
$$

As $\displaystyle n\uparrow$, $\displaystyle \frac{1}{n^{2}} \downarrow$, as a result, $\displaystyle a_{n} \downarrow$. We also see that $\displaystyle a_{n}$ is bounded since $\displaystyle \lim\limits _{n\rightarrow \infty } \ a_{n} =1$ and the sequence is decreasing. We have $\displaystyle a_{n} \leqslant 2$ for all $\displaystyle n\in \mathbb{N}$.

We have:

$$
\begin{equation*}
\begin{aligned}
b_{n} & =2a_{n}^{2} +3a_{n} +1
\end{aligned}
\end{equation*}
$$

We see that $\displaystyle b_{n}$ is also decreasing since it is a polynomial in $\displaystyle a_{n}$ with positive coefficients. Using algebra of limits:

$$
\begin{equation*}
\lim\limits _{n\rightarrow \infty } \ b_{n} =2\times 1+3\times 1+1=6
\end{equation*}
$$

:::
