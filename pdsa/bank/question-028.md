---
title: Question-28
pagetitle: Question-28
categories: [Python programming, Heap]
---

Consider the array representation of a binary min-heap containing 1023 elements. The minimum number of comparisons required to find the maximum in the heap is_____.


::: {.callout-note title="Solution" collapse=true}

$511$

:::



::: {.callout-note title="Feedback" collapse=true}

In a binary min-heap with 1023 (2^10^-1) elements, the maximum elements will be at the leaves.
- Number of leaf nodes in a complete binary tree with 1023 elements is 2^9^ = 512.
- To find the maximum element of 2 elements we need 1 comparison, for 3 elements - 2 comparisons, etc.
- To find the maximum element of 512 elements, the minimum number of comparison required is 511.

:::