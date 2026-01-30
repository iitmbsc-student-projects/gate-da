---
title: Question-35
pagetitle: Question-35
order: 35
categories: [classification, naive bayes, DA-2025]
---

The naive Bayes classifier is used to solve a two-class classification problem with class labels $y_{1} ,y_{2}$. Suppose the prior probabilities are $P( y_{1}) =\frac{1}{3}$ and $P( y_{2}) =\frac{2}{3}$. Assume a discrete feature space with 

$$
P( x\ |\ y_{1}) =\frac{3}{4} \ \ \text{and} \ \ P( x\ |\ y_{2}) =\frac{1}{4}
$$

for a specific feature vector $x$. The probability of misclassifying $x$ is ___ (Round off to two decimal places)


::: {.callout-note title="Answer" collapse=true}

$0.4$

:::

::: {.callout-note title="Solution" collapse=true}

We will first determine the predicted label $\hat{y}$. This can be done by comparing the posterior probabilities $P( y_{1} \ |\ x)$ and $P( y_{2} \ |\ x)$. Using Bayes' rule:

$$
\begin{aligned}
P( y_{1} |\ x) & =\frac{P( y_{1}) \cdot P( x\ |\ y_{1})}{P( x)}\\
 & \\
 & \varpropto \frac{1}{3} \cdot \frac{3}{4} =\frac{1}{4}
\end{aligned}
$$
And

$$
\begin{aligned}
P( y_{2} \ |\ x) & =\frac{P( y_{2}) \cdot P( x\ |\ y_{2})}{P( x)}\\
 & \\
 & \varpropto \frac{2}{3} \cdot \frac{1}{4} =\frac{1}{6}
\end{aligned}
$$

The predicted label is $y_{1}$. The probability of misclassification is therefore $P( y_{2} \ |\ x)$. Let us now go ahead and compute this:

$$
\begin{aligned}
P( y_{2} \ |\ x) & =\frac{P( y_{2}) \cdot P( x\ |\ y_{2})}{P( x)}\\
 & \\
 & =\frac{\frac{2}{3} \cdot \frac{1}{4}}{\frac{2}{3} \cdot \frac{1}{4} +\frac{1}{3} \cdot \frac{3}{4}}\\
 & \\
 & =\frac{\frac{1}{6}}{\frac{1}{6} +\frac{1}{4}}\\
 & \\
 & =\frac{2}{5}
\end{aligned}
$$

:::