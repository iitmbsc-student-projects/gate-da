---
title: Question-15
pagetitle: Question-15
categories: [Python programming, Linked list]
---

What is the worst-case time complexity of inserting $n$ elements into an empty linked list, if the linked list needs to be maintained in sorted order?


- [ ] $\Theta(n \log n)$
- [ ] $\Theta(n)$
- [ ] $\Theta(1)$
- [ ] $\Theta(n^2)$



::: {.callout-note title="Solution" collapse=true}

- [ ] $\Theta(n \log n)$
- [ ] $\Theta(n)$
- [ ] $\Theta(1)$
- [x] $\Theta(n^2)$

:::



::: {.callout-note title="Feedback" collapse=true}

The total number of comparisons needed to insert $n$ elements into a sorted linked list can be computed as the sum of the first $n - 1$ natural numbers: $1 + 2 + 3 + \dots + (n - 1) = \frac{n(n - 1)}{2}$. This is of the order $O(n^2)$, which means it is also $\Omega(n^2)$ and therefore $\Theta(n^2)$.

:::