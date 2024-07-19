---
title: Question-22
pagetitle: Question-22
categories: [Python programming, Dequeue]
---

Consider a sequence \(a\) of elements \(a_0 = 1\), \(a_1 = 5\), \(a_2 = 7\), \(a_3 = 8\), \(a_4 = 9\), and \(a_5 = 2\). The following operations are performed on a stack \(S\) and a queue \(Q\), both of which are initially empty.

1. Push the elements of \(a\) from \(a_0\) to \(a_5\) in that order into \(S\).
2. Enqueue the elements of \(a\) from \(a_0\) to \(a_5\) in that order into \(Q\).
3. Pop an element from \(S\).
4. Dequeue an element from \(Q\).
5. Pop an element from \(S\).
6. Dequeue an element from \(Q\).
7. Dequeue an element from \(Q\) and push the same element into \(S\).
8. Repeat operation 7 three times.
9. Pop an element from \(S\).
10. Pop an element from \(S\).

The top element of \(S\) after executing the above operations is _______.



::: {.callout-note title="Answer" collapse=true}

$8$

:::



::: {.callout-note title="Solution" collapse=true}

This sequence of operations manipulates the stack and queue in a specific order. By following the given steps, the top element of the stack \(S\) after executing all the operations is \(8\).

| Step | Operation                              | Stack \(S\)                | Queue \(Q\)          |
| ---- | -------------------------------------- | -------------------------- | -------------------- |
| 1    | Push elements of \(a\) to \(S\)        | \(1, 5, 7, 8, 9, 2\)       | Empty                |
| 2    | Enqueue elements of \(a\) to \(Q\)     | \(1, 5, 7, 8, 9, 2\)       | \(1, 5, 7, 8, 9, 2\) |
| 3    | Pop from \(S\)                         | \(1, 5, 7, 8, 9\)          | \(1, 5, 7, 8, 9, 2\) |
| 4    | Dequeue from \(Q\)                     | \(1, 5, 7, 8, 9\)          | \(5, 7, 8, 9, 2\)    |
| 5    | Pop from \(S\)                         | \(1, 5, 7, 8\)             | \(5, 7, 8, 9, 2\)    |
| 6    | Dequeue from \(Q\)                     | \(1, 5, 7, 8\)             | \(7, 8, 9, 2\)       |
| 7    | Dequeue from \(Q\) and push into \(S\) | \(1, 5, 7, 8, 7\)          | \(8, 9, 2\)          |
| 8    | Repeat operation VII three times       | \(1, 5, 7, 8, 7, 8, 9, 2\) | Empty                |
| 9    | Pop from \(S\)                         | \(1, 5, 7, 8, 7, 8, 9\)    | Empty                |
| 10   | Pop from \(S\)                         | \(1, 5, 7, 8, 7, 8\)       | Empty                |   

Therefore, after executing these operations, the top element of stack \(S\) is \(8\).

:::