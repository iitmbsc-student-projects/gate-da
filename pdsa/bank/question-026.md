---
title: Question-26
pagetitle: Question-26
categories: [Python programming, Heap]
---

Let A be a priority queue for maintaining a set of elements. Suppose A is implemented using a max-heap data structure. The operation EXTRACT-MAX(A) extracts and deletes the maximum element from A. The operation INSERT(A, key) inserts a new element key in A. The properties of a max-heap are preserved at the end of each of these operations. When A contains n elements, which one of the following statements about the worst-case running time of these two operations is TRUE?

- [ ] Both EXTRACT-MAX(A) and INSERT(A, key) run in $O(1)$.
- [ ] Both EXTRACT-MAX(A) and INSERT(A, key) run in $O(\log n)$.
- [ ] EXTRACT-MAX(A) runs in $O(1)$ whereas INSERT(A, key) runs in $O(n)$.
- [ ] EXTRACT-MAX(A) runs in $O(1)$ whereas INSERT(A, key) runs in $O(\log n)$.



::: {.callout-note title="Answer" collapse=true}

- [ ] Both EXTRACT-MAX(A) and INSERT(A, key) run in $O(1)$.
- [x] Both EXTRACT-MAX(A) and INSERT(A, key) run in $O(\log n)$.
- [ ] EXTRACT-MAX(A) runs in $O(1)$ whereas INSERT(A, key) runs in $O(n)$.
- [ ] EXTRACT-MAX(A) runs in $O(1)$ whereas INSERT(A, key) runs in $O(\log n)$.

:::



::: {.callout-note title="Solution" collapse=true}

In a max-heap:
- EXTRACT-MAX operation requires $O(\log n)$ time as it involves reorganizing the heap to maintain its properties after removing the maximum element.
- INSERT operation also requires $O(\log n)$ time to maintain the max-heap property by correctly placing the newly inserted element in the heap, considering it might need to traverse the height of the heap, which is $O(\log n)$.

Therefore, both EXTRACT-MAX and INSERT operations run in $O(\log n)$ time in the worst case scenario for a max-heap implementation.

:::