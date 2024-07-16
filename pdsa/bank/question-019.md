---
title: Question-19
pagetitle: Question-19
categories: [Python programming, Time complexity]
---

The running time of an algorithm is represented by the following recurrence relation:

$$ T(n) = \begin{cases} T\left(\frac{n}{3}\right) + cn & \text{if } n > 1 \\ T(1) & \text{otherwise} \end{cases} $$

Which of the following represents the time complexity of the algorithm?

- [ ] $\Theta(n)$
- [ ] $\Theta(n \log n)$
- [ ] $\Theta(n^2)$
- [ ] $\Theta(n^2 \log n)$



::: {.callout-note title="Solution" collapse=true}

- [x] $\Theta(n)$
- [ ] $\Theta(n \log n)$
- [ ] $\Theta(n^2)$
- [ ] $\Theta(n^2 \log n)$

:::



::: {.callout-note title="Feedback" collapse=true}

Using the master theorem to determine the time complexity:

Given:
- $a = 1$
- $b = 3$
- $f(n) = cn$

Master theorem conditions:
- $cn$ is $O(n^{0 - \epsilon})$ - Dissatisfied
- $cn$ is $O(n^{\log_3 1})$ - Dissatisfied
- $cn$ is $\Omega(n^{0 + \epsilon})$ - Satisfied

As $f(n/b) \leq \delta \cdot f(n)$ for $\delta = 1$:
$$ \frac{1 \cdot cn}{3} \leq 1 \cdot cn $$
$$ \frac{cn}{3} \leq cn $$
$$ \text{As } 3 < 1, \text{ the condition is not met.} $$

Hence, by the master theorem, $T(n)$ is $\Theta(n)$.

:::