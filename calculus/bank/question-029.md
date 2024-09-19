---
title: Question-29
pagetitle: Question-29
order: 29
categories: [limit]
---

Evaluate:

$$
\begin{equation*}
\lim\limits _{x\rightarrow 0} \ \ \frac{\log( 5+x) -\log( 5-x)}{x}
\end{equation*}
$$

::: {.callout-note title="Hint" collapse=true}
$$
\lim\limits _{z\rightarrow 0} \ \frac{\log( 1+z)}{z} =1
$$
:::

::: {.callout-note title="Answer" collapse=true}

$\cfrac{2}{5}$

:::

::: {.callout-note title="Solution" collapse=true}

Let us make use of an existing limit:

$$
\begin{equation*}
\lim\limits _{z\rightarrow 0} \ \frac{\log( 1+z)}{z} =1
\end{equation*}
$$

We can try to bring the numerator in this form. To this end, let:

$$
\begin{equation*}
\begin{aligned}
1+y & =\frac{5+x}{5-x}\\
 & \\
\Longrightarrow y & =\frac{2x}{5-x}
\end{aligned}
\end{equation*}
$$

We can rewrite the limit as:

$$
\begin{equation*}
\begin{aligned}
\lim\limits _{x\rightarrow 0} \ \frac{\log\left( 1+\frac{2x}{5-x}\right)}{x} & =\lim\limits _{x\rightarrow 0}\left\{\ \frac{\log\left( 1+\frac{2x}{5-x}\right)}{\frac{2x}{5-x}} \times \frac{2}{5-x}\right\}\\
 & \\
 & =\left\{\lim\limits _{x\rightarrow 0} \ \frac{\log\left( 1+\frac{2x}{5-x}\right)}{\frac{2x}{5-x}}\right\} \times \lim\limits _{x\rightarrow 0} \ \frac{2}{5-x}\\
 & \\
 & =1\times \frac{2}{5}\\
 & \\
 & =\frac{2}{5}
\end{aligned}
\end{equation*}
$$

:::
