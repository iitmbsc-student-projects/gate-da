---
title: Question-7
pagetitle: Question-7
categories: [GATE-2021, Data Structures, Heaps]
---

## Question 7

Let H be a binary min-heap consisting of n elements implemented as an array. What is the worst case time complexity of an optimal algorithm to find the maximum element in H?


### Choices
- [ ] $\Theta(1)$
- [ ] $\Theta(\log n)$
- [ ] $\Theta(n)$
- [ ] $\Theta(n \log n)$



::: {.callout-note title="Answer" collapse=true}

$\Theta(n)$

:::



::: {.callout-note title="Feedback" collapse=true}

The largest element in a min-heap will always be found at a leaf node since every node in a min-heap satisfies the property that its value is smaller than its children's values. The largest element can't have any children, making it reside in a leaf node. In a heap with $n$ elements, there are approximately $\frac{n}{2}$leaf nodes. To find the maximum among these leaves, it would take $\Theta(\frac{n}{2})$ operations, which simplifies to $\Theta(n)$.

:::