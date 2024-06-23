---
title: Question-1
pagetitle: Question-1
order: 1
categories: [classification]
---

$\mathbf{w} = \begin{bmatrix}1 \\ 2 \\ 3\end{bmatrix}$ is the weight vector of a linear classifier for a binary classification problem whose labels lie in the set $\{0, 1\}$. If the bias of the classifier is set to $0$, which of the following is the equation of the decision boundary for this classifier?

- [ ] $x_1 + 2x_2 + 3x_3 = 1$
- [ ] $x_1 + 2x_2 + 3x_3 = -1$
- [ ] $x_1 + 2x_2 + 3x_3 = 0$
- [ ] $x_1 - 2x_3 + 3x_3 = 0$

::: {.callout-note title="Answer" collapse=true}

- [ ] $x_1 + 2x_2 + 3x_3 = 1$
- [ ] $x_1 + 2x_2 + 3x_3 = -1$
- [x] $x_1 + 2x_2 + 3x_3 = 0$
- [ ] $x_1 - 2x_3 + 3x_3 = 0$

:::

::: {.callout-note title="Solution" collapse=true}

The decision boundary for a linear classifier is given by $\mathbf{w}^{T} \mathbf{x} + b = 0$. Since $b = 0$, this just becomes $\mathbf{w}^{T} \mathbf{x} = 0$ which results in $x_1 + 2x_2 + 3x_3 = 0$.

:::