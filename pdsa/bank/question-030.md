---
title: Question-30
pagetitle: Question-30
categories: [Python programming, Heap]
---

Let H be a binary min-heap consisting of \(n\) elements implemented as an array. What is the worst-case time complexity of an optimal algorithm to find the maximum element in H?

- [ ] $\Theta(1)$
- [ ] $\Theta(\log n)$
- [ ] $\Theta(n)$
- [ ] $\Theta(n \log n)$


::: {.callout-note title="Answer" collapse=true}

- [ ] $\Theta(1)$
- [ ] $\Theta(\log n)$
- [X] $\Theta(n)$
- [ ] $\Theta(n \log n)$

:::



::: {.callout-note title="Solution" collapse=true}

In a binary min-heap:
- The maximum element is always a leaf node in the heap, and to find the maximum element, we need to traverse all leaf nodes to identify the maximum among them.
- In the worst case, the number of leaf nodes in a binary heap is \(\lceil \frac{n}{2} \rceil\) (approximately half of the total nodes).
- Therefore, to find the maximum element in a binary min-heap, we need to perform a linear search among the leaf nodes, resulting in a time complexity of \(\Theta(n)\) in the worst case.

:::