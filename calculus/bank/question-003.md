---
title: Question-3
pagetitle: Question-3
order: 3
categories: [limit]
---

Evaluate the following limit:

$$
\lim_{x \rightarrow \infty} \sqrt{x^2 + x + 1} - \sqrt{x^2 + 1}
$$


::: {.callout-note title="Hint" collapse=true}

Normalize the numerator.

:::

::: {.callout-note title="Answer" collapse=true}

$0.5$

:::

::: {.callout-note title="Solution" collapse=true}
$$
\begin{aligned}
    \lim_{x \rightarrow \infty} \sqrt{x^2 + x + 1} - \sqrt{x^2 + 1} &= \lim_{x \rightarrow \infty} \cfrac{(x^2 + x + 1) - (x^2 + 1)}{\sqrt{x^2 + x + 1} + \sqrt{x^2 + 1}}\\\\
    &= \lim_{x \rightarrow \infty} \cfrac{x}{\sqrt{x^2 + x + 1} + \sqrt{x^2 + 1}}\\\\
    &= \lim_{x \rightarrow \infty} \cfrac{1}{\sqrt{1 + \frac{1}{x} + \frac{1}{x^2}} + \sqrt{1 + \frac{1}{x^2}}}\\\\
    &= \cfrac{1}{2}
\end{aligned}
$$
:::