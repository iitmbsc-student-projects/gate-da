---
title: Question-42
pagetitle: Question-42
categories: [Data Structure, Stack, Queue]
---

Let `S` be a stack and `Q` be a queue supporting the following operations:

**Stack operation:**

* `Push(d)`: Insert element `d` in stack 
* `Pop()`: Remove element from the stack and return the removed element

**Queue Operation:**

* `Enqueue(d)`: Insert element `d` in queue 
* `dequeue()`: Remove element from the queue and return the removed element



Suppose initially elements A, B, C, D, E, F and G  are pushed onto stack `S` in reverse order, i.e., starting from G.

The following sequence of operations is performed on stack `S` and queue `Q`:

```python
Q.Enqueue(S.Pop())
Q.Enqueue(S.Pop())
Q.Enqueue(S.Pop())
Q.Enqueue(S.Pop())
Q.Enqueue(S.Pop())
S.Push(Q.Dequeue())
S.Push(Q.Dequeue())
Result = S.Pop()
```

What would be the value of `Result` after completion of operations ?

- [ ] A
- [ ] B
- [ ] E
- [ ] G
- [ ] F

::: {.callout-note title="Answer" collapse=true}

- [ ] A
- [x] B
- [ ] E
- [ ] G
- [ ] F

:::
