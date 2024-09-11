---
title: Question-2
pagetitle: Question-2
order: 2
categories: [classification]
---

Which of the following classifiers produce a linear decision boundary in the feature space?

- [ ] Perceptron
- [ ] Logistic regression
- [ ] Kernel SVM with Gaussian kernel
- [ ] A neural network with two hidden layers that has ReLU activations in the hidden layers

::: {.callout-note title="Answer" collapse=true}

- [x] Perceptron
- [x] Logistic regression
- [ ] Kernel SVM with Gaussian kernel
- [ ] A neural network with two hidden layers that has ReLU activations in the hidden layers

:::

::: {.callout-note title="Solution" collapse=true}

The boundary for a perceptron and logistic regression is linear and is of the form $\mathbf{w}^{T} \mathbf{x} + b = 0$. Kernel SVM with a Gaussian kernel will have a non-linear boundary. Same is the case with a neural network with non-linear activation functions in the hidden layers.

:::