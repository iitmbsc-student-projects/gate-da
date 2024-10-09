---
title: Question-33
pagetitle: Question-33
order: 33
categories: [limit, taylor series]
---

Which of the following are true?

- [ ] $\displaystyle \lim\limits _{x\rightarrow \infty } \ \frac{x^{2}}{e^{x}} =0$

- [ ] $\displaystyle \lim\limits _{x\rightarrow 3} \ \frac{x^{2} -9}{x^{3} -27} =\frac{2}{9}$ 

- [ ] $\displaystyle \lim\limits _{x\rightarrow -\infty } \ \frac{7}{e^{x}} =0$

- [ ] $\displaystyle \lim\limits _{x\rightarrow -2} \ \ \frac{( x+2)^{2}}{4-x^{2}} =-2$


::: {.callout-note title="Answer" collapse=true}

- [x] $\displaystyle \lim\limits _{x\rightarrow \infty } \ \frac{x^{2}}{e^{x}} =0$

- [x] $\displaystyle \lim\limits _{x\rightarrow 3} \ \frac{x^{2} -9}{x^{3} -27} =\frac{2}{9}$ 

- [ ] $\displaystyle \lim\limits _{x\rightarrow -\infty } \ \frac{7}{e^{x}} =0$

- [ ] $\displaystyle \lim\limits _{x\rightarrow -2} \ \ \frac{( x+2)^{2}}{4-x^{2}} =-2$


:::

::: {.callout-note title="Solution" collapse=true}

### First Limit

$$
\begin{equation*}
\lim\limits _{x\rightarrow \infty } \ \frac{x^{2}}{e^{x}} =0
\end{equation*}
$$

$\displaystyle e^{x}$ grows faster than $\displaystyle x^{2}$. More concretely, we can use the Taylor series expansion for $\displaystyle e^{x}$ and truncate it after the first four terms:

$$
\begin{equation*}
e^{x}  >1+x+\frac{x^{2}}{2} +\frac{x^{3}}{6} \Longrightarrow \frac{1}{e^{x}} < \frac{1}{1+x+\frac{x^{2}}{2} +\frac{x^{3}}{6}}
\end{equation*}
$$

Multiplying both sides by $\displaystyle x^{2}$ and simplifying, we have the following inequality:

$$
\begin{equation*}
0< \frac{x^{2}}{e^{x}} < \frac{1}{\frac{1}{x^{2}} +\frac{1}{x} +\frac{1}{2} +\frac{x}{6}}
\end{equation*}
$$

As $\displaystyle x\rightarrow \infty$, both the LHS and RHS tend to zero. We get the required limit by sandwich theorem.

### Second Limit

$$
\begin{equation*}
\begin{aligned}
\lim\limits _{x\rightarrow 3} \ \frac{x^{2} -9}{x^{3} -27} & =\lim\limits _{x\rightarrow 3} \ \frac{( x-3)( x+3)}{( x-3)\left( x^{2} +3x+9\right)}\\
 & \\
 & =\lim\limits _{x\rightarrow 3} \ \frac{x+3}{x^{2} +3x+9}\\
 & \\
 & =\frac{2}{9}
\end{aligned}
\end{equation*}
$$

### Third Limit

$$
\begin{equation*}
\lim\limits _{x\rightarrow -\infty } \ \frac{7}{e^{x}} =\infty 
\end{equation*}
$$

As $\displaystyle x\rightarrow -\infty $, the denominator tends to $\displaystyle 0$ and the fraction tends to infinity.

### Fourth Limit

$$
\begin{equation*}
\begin{aligned}
\lim\limits _{x\rightarrow -2} \ \ \frac{( x+2)^{2}}{4-x^{2}} & =\lim\limits _{x\rightarrow -2} \ \frac{x+2}{2-x} =0
\end{aligned}
\end{equation*}
$$

:::