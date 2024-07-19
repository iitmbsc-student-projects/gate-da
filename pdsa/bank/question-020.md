---
title: Question-20
pagetitle: Question-20
categories: [Python programming, Time complexity]
---

The running time of an algorithm is represented by the following recurrence relation:

$$ T(n) = \begin{cases} T\left(\frac{n}{3}\right) + cn & \text{if } n > 1 \\ T(1) & \text{otherwise} \end{cases} $$

Which one of the following options is correct?

- [ ] $T(n) = \Theta(n \log n)$
- [ ] $T(n) = \Theta(n^{5/2})$
- [ ] $T(n) = \Theta(n)$
- [ ] $T(n) = \Theta(\log n)^{5/2}$



::: {.callout-note title="Answer" collapse=true}

- [ ] $T(n) = \Theta(n \log n)$
- [ ] $T(n) = \Theta(n^{5/2})$
- [x] $T(n) = \Theta(n)$
- [ ] $T(n) = \Theta(\log n)^{5/2}$

:::



::: {.callout-note title="Solution" collapse=true}

Expanding the recurrence relation:

$$ T(n) = T\left(\frac{n}{2}\right) + T\left(\frac{2n}{5}\right) + 7n, \text{ if } n > 0 $$

Solving this recursively and analyzing the total time:

The total time complexity sums up to $O(n) = \Omega(n) = \Theta(n)$. Therefore, $T(n)$ has a time complexity of $\Theta(n)$.

:::