---
title: Question-27
pagetitle: Question-27
order: 27
categories: [binary search, array, linked list, DA-2025]
---

For which of the following inputs does binary search take $O(\log n)$ in the worst case?

 - [ ] An array of $n$ integers in any order.

 - [ ] A linked list of $n$ integers in any order.

 - [ ] An array of $n$ integers in increasing order.

 - [ ] A linked list of $n$ integers in increasing order.

::: {.callout-note title="Answer" collapse=true}

 - [ ] An array of $n$ integers in any order.

 - [ ] A linked list of $n$ integers in any order.

 - [x] An array of $n$ integers in increasing order.

 - [ ] A linked list of $n$ integers in increasing order.

:::

::: {.callout-note title="Solution" collapse=true}

The worst case for binary search would happen when the element we are searching for is not present in the collection. In the case of a linked list, we would have to traverse through the list linearly no matter what the algorithm. So it is $O( n)$ even in the best case. In the case of an array, binary search would break if the array is not sorted.

:::