---
title: Question-17
pagetitle: Question-17
order: 17
categories: [SVM]
---

You train a linear soft-margin SVM on a dataset with two features $x_1$ and $x_2$. If the dataset is linearly separable, which of the following is true about the margin?

- [ ] The margin increases as the regularization parameter $C$ increases.

- [ ] The margin is independent of the regularization parameter $C$.

- [ ] The margin increases as the regularization parameter $C$ decreases.

- [ ] The margin decreases as the data points are moved farther from the decision boundary.


::: {.callout-note title="Answer" collapse=true}

- [ ] The margin increases as the regularization parameter $C$ increases.

- [ ] The margin is independent of the regularization parameter $C$.

- [x] The margin increases as the regularization parameter $C$ decreases.

- [ ] The margin decreases as the data points are moved farther from the decision boundary.
:::

::: {.callout-note title="Solution" collapse=true}

As $C$ decreases, the margin becomes wider, allowing the hinge-loss to keep growing. 

:::
