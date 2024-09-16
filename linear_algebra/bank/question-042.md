---
title: Question-42
pagetitle: Question-42
order: 42
categories: [orthogonal matrix]
---

How many orthogonal matrices of order $\displaystyle n$ exist that are made up of only zeros and ones?

- [ ] $n$
- [ ] $n^2$
- [ ] $n!$
- [ ] $n^n$

::: {.callout-note title="Hint" collapse=true}

Permute

:::

::: {.callout-note title="Answer" collapse=true}

- [ ] $n$
- [ ] $n^2$
- [x] $n!$
- [ ] $n^n$

:::

::: {.callout-note title="Solution" collapse=true}

Since the columns are orthonormal, given any two rows, zeros and ones should not appear in identical locations. Additionally, since each column/row is unit norm, there is exactly one position with a one while the rest are zeros, in each column/row. We can see that all such matrices can be obtained by permuting the columns/rows of the identity matrix. Such matrices are termed permutation matrices. Therefore, the required count is $\displaystyle n!$

:::
