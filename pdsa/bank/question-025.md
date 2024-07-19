---
title: Question-25
pagetitle: Question-25
categories: [Python programming, Stack, Queue]
---

Consider the following sequence of operations on an empty stack:  

1. push(54)
2. push(52)
3. pop()
4. push(55)
5. push(62)
6. s = pop()

Consider the following sequence of operations on an empty queue:

1. enqueue(21)
2. enqueue(24)
3. dequeue()
4. enqueue(28)
5. enqueue(32)
6. q = dequeue()

The value of \(s + q\) is _______


::: {.callout-note title="Answer" collapse=true}

$86$

:::



::: {.callout-note title="Solution" collapse=true}

**Stack Operations**

| Operation   | Stack   |
|-------------|---------|
| push(54)    | [54]    |
| push(52)    | [54, 52]|
| pop()       | [54]    |
| push(55)    | [54, 55]|
| push(62)    | [54, 55, 62] |
| s = pop()   | \(s = 62\), Stack: [54, 55] |

**Queue Operations**

| Operation       | Queue   |
|-----------------|---------|
| enqueue(21)     | [21]    |
| enqueue(24)     | [21, 24]|
| dequeue()       | [24]    |
| enqueue(28)     | [24, 28]|
| enqueue(32)     | [24, 28, 32]|
| q = dequeue()   | \(q = 24\), Queue: [28, 32] |

Therefore, \(s = 62\) and \(q = 24\). The value of \(s + q\) is \(62 + 24 = 86\).

:::