---
title: Question-6
pagetitle: Question-6
order: 6
categories: [probability]
---

Out of the students in a class, $60\%$ do well in mathematics, $70\%$ do well in physics and $50\%$ do well in both. Find the probability that a randomly selected student doesn't do well in both mathematics and physics.

::: {.callout-note title="Hint" collapse=true}

Define $A$ and $B$ as the following events:

- $A$: student does well in mathematics
- $B$: student does well in physics

What event are we interested in?

:::

::: {.callout-note title="Answer" collapse=true}

$0.2$

:::

::: {.callout-note title="Solution" collapse=true}

We have the following events:

- $A$: student does well in maths
- $B$: student does well in physics
- $P(A^{c})$: student doesn't do well in maths
- $P(B^{c})$: student doesn't do well in physics
- $P(A^{c} \cap B^{c})$: student doesn't do well both maths and physics

Using DeMorgan's laws, we have:
$$
A^{c} \cap B^{c} = (A \cup B)^{c}
$$
This gives us:
$$
\begin{aligned}
P(A^{c} \cap B^{c}) &= P(A \cup B)^{c}\\
&= 1 - P(A \cup B)\\
\end{aligned}
$$
We can now compute $P(A \cup B)$:
$$
\begin{aligned}
P(A \cup B) &= P(A) + P(B) - P(A \cap B)\\
&= 0.6 + 0.7 - 0.5\\
&= 0.8
\end{aligned}
$$
The required probability is therefore $\boxed{0.2}$.

:::