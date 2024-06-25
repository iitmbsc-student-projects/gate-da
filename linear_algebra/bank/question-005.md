---
title: Question-5
pagetitle: Question-5
order: 5
categories: [orthogonal matrix]
---

$Q$ is an orthogonal matrix. If $||Qu|| = 4$, what is $||u||$?

::: {.callout-note title="Hint" collapse=true}

Expand $||Qu||^2$ and use the key property of orthogonal matrices.

:::

::: {.callout-note title="Answer" collapse=true}

$4$

:::

::: {.callout-note title="Solution" collapse=true}

Orthogonal matrices preserve the inner product:
$$
\begin{aligned}
||Qu||^2 &= (Qu)^T(Qu)\\
&= u^TQ^TQu\\
&= u^TIu\\
&= u^Tu\\
&= ||u||^2
\end{aligned}
$$
:::
