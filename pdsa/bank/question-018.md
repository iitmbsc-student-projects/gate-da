---
title: Question-18
pagetitle: Question-18
categories: [Python programming, Time complexity]
---

Two alternative packages A and B are available for processing a database having $10k$ records. Package A requires $0.0001n^2$ time units, and package B requires $10n \log_{10} n$ time units to process $n$ records. What is the smallest value of $k$ for which package B will be preferred over A?

- [ ] $12$
- [ ] $10$
- [ ] $6$
- [ ] $5$



::: {.callout-note title="Solution" collapse=true}

- [ ] $12$
- [ ] $10$
- [x] $6$
- [ ] $5$

:::



::: {.callout-note title="Feedback" collapse=true}

To determine when package B is preferred over package A, we set up the inequality:
$$10n \log_{10} n < 0.0001n^2k$$

Solving for $k$:
$$10 \cdot 10^4 \cdot 2^{-k} < k$$

By observation, when $k = 6$, $10 \cdot 10^4 \cdot 2^{-6} = \frac{10^5}{64} < 6$. Thus, $k$ needs to be at least $6$ for package B to be preferred over package A.

:::