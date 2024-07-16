---
title: Question-23
pagetitle: Question-23
categories: [Python programming, Stack, Queue]
---

Suppose a stack implementation supports an instruction REVERSE, which reverses the order of elements on the stack, in addition to the PUSH and POP instructions. Which one of the following statements is TRUE (with respect to this modified stack)?

- [ ] A queue cannot be implemented using this stack.
- [ ] A queue can be implemented where ENQUEUE takes a single instruction and DEQUEUE takes a sequence of two instructions.
- [ ] A queue can be implemented where ENQUEUE takes a sequence of three instructions and DEQUEUE takes a single instruction.
- [ ] A queue can be implemented where both ENQUEUE and DEQUEUE take a single instruction each.

::: {.callout-note title="Solution" collapse=true}

- [ ] A queue cannot be implemented using this stack.
- [ ] A queue can be implemented where ENQUEUE takes a single instruction and DEQUEUE takes a sequence of two instructions.
- [x] A queue can be implemented where ENQUEUE takes a sequence of three instructions and DEQUEUE takes a single instruction.
- [ ] A queue can be implemented where both ENQUEUE and DEQUEUE take a single instruction each.

:::



::: {.callout-note title="Feedback" collapse=true}

With the REVERSE instruction, a queue can be implemented using this modified stack where ENQUEUE would require a sequence of three instructions (PUSH, REVERSE, PUSH), and DEQUEUE would require a single instruction (POP).

:::