---
title: Question-28
pagetitle: Question-28
order: 28
categories: [limit]
---

Evaluate:

$$
\begin{equation*}
\lim\limits _{n\rightarrow \infty } \ \frac{( n+2) !+( n+1) !}{( n+2) !-( n+1) !}
\end{equation*}
$$

::: {.callout-note title="Hint" collapse=true}

Take $(n+1)!$ outside.

:::

::: {.callout-note title="Answer" collapse=true}

$1$

:::

::: {.callout-note title="Solution" collapse=true}

$$
\begin{equation*}
\begin{aligned}
\lim\limits _{n\rightarrow \infty } \ \frac{( n+2) !+( n+1) !}{( n+2) !-( n+1) !} & =\lim\limits _{n\rightarrow \infty } \ \frac{( n+1) ![( n+2) +1]}{( n+1) ![( n+2) -1]}\\
 & \\
 & =\lim\limits _{n\rightarrow \infty } \ \frac{n+3}{n+1}\\
 & \\
 & =\lim\limits _{n\rightarrow \infty } \ \frac{1+\frac{3}{n}}{1+\frac{1}{n}}\\
 & \\
 & =1
\end{aligned}
\end{equation*}
$$

:::
