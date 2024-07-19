---
title: Question-21
pagetitle: Question-21
categories: [Python programming, Time complexity]
---

Consider the recurrence function $T(n)$:

$$ T(n) = \begin{cases} 2T\left(\frac{n}{2}\right) + 1 & \text{if } n > 2 \\ 2 & \text{if } n \leq 2 \end{cases} $$

Then $T(n)$ in terms of $\Theta$ notation is?

- [ ] $\Theta(\log \log n)$
- [ ] $\Theta(\log n)$
- [ ] $\Theta(n)$
- [ ] $\Theta(n^2)$



::: {.callout-note title="Answer" collapse=true}

- [ ] $\Theta(\log \log n)$
- [x] $\Theta(\log n)$
- [ ] $\Theta(n)$
- [ ] $\Theta(n^2)$

:::



::: {.callout-note title="Solution" collapse=true}

Breaking down the recurrence relation and solving for $T(n)$:

Given:
$$ T(n) = 2T\left(\frac{n}{2}\right) + 1 $$

1. $T(n) = 2T\left(\frac{n}{2}\right) + 1$ ... (1)
2. $T\left(\frac{n}{2}\right) = 2T\left(\frac{n}{4}\right) + 1$ ... (2)
3. $T(n) = 2[2T\left(\frac{n}{4}\right) + 1] + 1 = 4T\left(\frac{n}{4}\right) + 3$ ... (3)
4. $T\left(\frac{n}{2}\right) = 2T\left(\frac{n}{2^K}\right) + 1$ ... (4)
5. $K = \frac{1}{2} \cdot \log_2 n \Rightarrow 2^K = \sqrt{n}$
6. $T(n) = \log n \cdot T(2) + \log n - 1 = 2\log n + \log n - 1 = \Theta(\log n)$

Therefore, $T(n)$ in terms of $\Theta$ notation is $\Theta(\log n)$.


:::