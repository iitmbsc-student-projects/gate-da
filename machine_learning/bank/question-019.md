---
title: Question-19
pagetitle: Question-19
order: 19
categories: [logistic regression]
---

Consider that you have trained a logistic regression model on a dataset for a binary classification problem. The model predicts the probability of a point being classified as $1$ based on two features, $x_1$ and $x_2$. After training, the model’s decision boundary is defined by the equation $w_0 + w_1 x_1 + w_2 x_2 = 0$. If the model's predicted probability for a given point $(x_1, x_2)$ is 0.7, what is the value of $w_0 + w_1 x_1 + w_2 x_2$ at this point?

- [ ] $\log(0.7)$

- [ ] $\log(0.7 / 0.3)$

- [ ] $\log(0.3 / 0.7)$

- [ ] $-\log(0.7)$

::: {.callout-note title="Answer" collapse=true}

- [ ] $\log(0.7)$

- [x] $\log(0.7 / 0.3)$

- [ ] $\log(0.3 / 0.7)$

- [ ] $-\log(0.7)$

:::

::: {.callout-note title="Solution" collapse=true}

We have:

$$
\begin{equation*}
\begin{aligned}
\frac{1}{1+e^{-\mathbf{w}^{T}\mathbf{x}}} & =p\\\\
\frac{1-p}{p} & =e^{-\mathbf{w}^{T}\mathbf{x}}\\\\
\mathbf{w}^{T}\mathbf{x} & =\ln\left(\frac{p}{1-p}\right)
\end{aligned}
\end{equation*}
$$

For $\displaystyle p=0.7$, we have:

$$
\begin{equation*}
\mathbf{w}^{T} \mathbf{x} = \ln\left(\frac{0.7}{0.3}\right)
\end{equation*}
$$

:::
