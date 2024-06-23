---
title: Question-1
pagetitle: Question-1
order: 1
categories: [function]
---

Let $f$ and $g$ be two real valued functions such that $g(x) = f(x) - 2$. Select all true options.

- [ ] If $f$ is odd, then $g$ is odd.
- [ ] If $f$ is even, then $g$ is even.
- [ ] If $g$ is odd, then $f$ is odd.
- [ ] If $g$ is even, then $f$ is even.

::: {.callout-note title="Hint" collapse=true}

- An odd function is one that satisfies $f(-x) = -f(x)$ for all $x \in \mathbb{R}$. 
- An even function is one that satisfies $f(-x) = f(x)$ for all $x \in \mathbb{R}$.

:::

::: {.callout-note title="Answer" collapse=true}

- [ ] If $f$ is odd, then $g$ is odd.
- [x] If $f$ is even, then $g$ is even.
- [ ] If $g$ is odd, then $f$ is odd.
- [x] If $g$ is even, then $f$ is even.

:::

::: {.callout-note title="Solution" collapse=true}

If $f$ is odd, then $f(-x) = -f(x)$. Then:
$$
\begin{aligned}
g(-x) &= f(-x) - 2\\
&= -f(x) - 2\\
&= -[f(x) + 2]
\end{aligned}
$$
This doesn't allow us to conclude anything about the nature of $g$. A simple counter-example will show that if $f$ is odd, $g$ need not be odd. For instance, if $f(x)= x$, we have $g(x) = x - 2$, which is neither odd nor even.

If $f$ is even, then $f(-x) = f(x)$. Then:
$$
\begin{aligned}
g(-x) &= f(-x) - 2\\
&= f(x) - 2\\
&= g(x)
\end{aligned}
$$
Therefore, if $f$ is even, then $g$ is also even. A similar argument holds for the case when $g$ is even.

:::