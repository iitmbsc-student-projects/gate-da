---
title: Question-35
pagetitle: Question-35
order: 35
categories: [linear algebra,determinant,DA-2024]
---

Consider the $3 \times 3$ matrix $\mathbf{M} = \begin{bmatrix}1 & 2 & 3\\3 & 1 & 3\\4 & 3 & 6\end{bmatrix}$. The determinant of $\mathbf{M}^{2} + 12 \mathbf{M}$ is ________ .

::: {.callout-note title="Hint" collapse=true}

Add the first two rows.

:::

::: {.callout-note title="Answer" collapse=true}

$0$

:::

::: {.callout-note title="Solution" collapse=true}

Note the following:
$$
\begin{aligned}
\mathbf{M}^{2} + 12\mathbf{M} &= \mathbf{M}(\mathbf{M} + 12 \mathbf{I})\\\\
\implies \left|\mathbf{M}^2 + 12 \mathbf{M} \right| &= \left| \mathbf{M} \right| \cdot \left| \mathbf{M} + 12 \mathbf{I} \right|\\\\
\end{aligned}
$$
Let us first look at the determinant of $\mathbf{M}$. Note that the third row of $\mathbf{M}$ is equal to the sum of the first two rows. Hence, we see that $\left| \mathbf{M} \right| = 0$. It follows that the answer is $\boxed{0}$.

:::