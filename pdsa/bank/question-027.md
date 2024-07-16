---
title: Question-27
pagetitle: Question-27
categories: [Python programming, Heap]
---

Which one of the following sequences when stored in an array at locations \(A[1], \ldots, A[10]\) forms a max-heap?

- [ ] 23, 17, 10, 6, 13, 14, 1, 5, 7, 12
- [ ] 23, 17, 14, 7, 13, 10, 1, 5, 6, 12
- [ ] 23, 17, 14, 6, 13, 10, 1, 5, 7, 15
- [ ] 23, 14, 17, 1, 10, 13, 16, 12, 7, 5



::: {.callout-note title="Solution" collapse=true}

- [ ] 23, 17, 10, 6, 13, 14, 1, 5, 7, 12
- [x] 23, 17, 14, 7, 13, 10, 1, 5, 6, 12
- [ ] 23, 17, 14, 6, 13, 10, 1, 5, 7, 15
- [ ] 23, 14, 17, 1, 10, 13, 16, 12, 7, 5

:::



::: {.callout-note title="Feedback" collapse=true}

To form a max-heap, the elements must satisfy the heap property: every node should be greater than or equal to its children.

In the sequence B: 23, 17, 14, 7, 13, 10, 1, 5, 6, 12
When arranged in an array:
```
      23
     /   \
   17     14
  / \    /  \
 7  13  10   1
/ \  /
5 6 12
```
The sequence, when represented as a binary tree, follows the max-heap property. Therefore, sequence B forms a max-heap when stored in an array at locations \(A[1], \ldots, A[10]\).

:::