---
title: Question-24
pagetitle: Question-24
categories: [Python programming, Queue]
---

Consider the queues Q1 containing four elements and Q2 containing none (shown as the Initial State in the figure). The only operations allowed on these two queues are Enqueue(Q, element) and Dequeue(Q). The minimum number of Enqueue operations on Q1 required to place the elements of Q1 in Q2 in reverse order (shown as the Final State in the figure) without using any additional storage is___________.
```
Initial State:  
Q1: |1|2|3|4|  
Q2: | | | | |  

Final State:  
Q1: | | | | |  
Q2: |4|3|2|1|  
```


::: {.callout-note title="Answer" collapse=true}

$0$

:::



::: {.callout-note title="Solution" collapse=true}

The operations performed demonstrate the reversal of elements between Q1 and Q2 without using additional storage, achieving the Final State with the elements reversed in Q2 from the Initial State of Q1. 

| Step | Q1      | Q2      | Operation                |
| ---- | ------- | ------- | ------------------------ |
| 1    | 1,2,3,4 |         |                          |
| 2    | 2,3,4   | 1       | Enqueue(Dequeue(Q1), Q2) |
| 3    | 3,4     | 1,2     | Enqueue(Dequeue(Q1), Q2) |
| 4    | 3,4     | 2,1     | Enqueue(Dequeue(Q2), Q2) |
| 5    | 4       | 2,1,3   | Enqueue(Dequeue(Q1), Q2) |
| 6    | 4       | 1,3,2   | Enqueue(Dequeue(Q2), Q2) |
| 7    | 4       | 3,2,1   | Enqueue(Dequeue(Q2), Q2) |
| 9    |         | 3,2,1,4 | Enqueue(Dequeue(Q1), Q2) |
| 9    |         | 2,1,4,3 | Enqueue(Dequeue(Q2), Q2) |
| 10   |         | 1,4,3,2 | Enqueue(Dequeue(Q2), Q2) |
| 11   |         | 4,3,2,1 | Enqueue(Dequeue(Q2), Q2) |

From the above table it is clear that no Enqueue operation is performed on Q1. THus The minimum number of Enqueue operations on Q1 required is 0.

:::