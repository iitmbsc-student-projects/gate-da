---
title: Question-2
pagetitle: Question-2
order: 2
categories: [limit]
---

Evaluate the following limit:

$$
\lim_{x \rightarrow 2} \cfrac{x^6 -24x -16}{x^3 +2x - 12}
$$

::: {.callout-note title="Hint" collapse=true}

L'Hopital's rule

:::

::: {.callout-note title="Answer" collapse=true}

$12$

:::

::: {.callout-note title="Solution" collapse=true}

This limit has $\cfrac{0}{0}$ form. So we can try the L'Hopital's rule.
$$
\begin{aligned}
\lim \limits_{x \rightarrow 2} \cfrac{x^6 -24x -16}{x^3 +2x - 12} &= \lim \limits_{x \rightarrow 2} \cfrac{6x^5 -24}{3x^2 + 2} = 12
\end{aligned}
$$
Note that the L'Hopital rule works here because the quotient of the derivatives of the numerator and denominator exists and is equal to $12$. For all the conditions that have to be satisfied to apply the rule, check this [Wikipedia entry](https://en.wikipedia.org/wiki/L%27H%C3%B4pital%27s_rule).

:::