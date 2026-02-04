---
title: Question-47
pagetitle: Question-47
order: 47
categories: [python, sets, DA-2025]
---

Consider the following Python code snippet.

```python
A={"this", "that"}
B={"that", "other"}
C={"other", "this"}
while "other" in C:
    if "this" in A:
        A,B,C=A-B,B-C,C-A
    if "that" in B:
        A,B,C=C|A,A|B,B|C
```

When the program is executed, at the end, which of the following sets contains "this"?

 - [ ] Only A

 - [ ] Only B

 - [ ] Only C

 - [ ] A, C

::: {.callout-note title="Answer" collapse=true}

 - [ ] Only A

 - [x] Only B

 - [ ] Only C

 - [ ] A, C

:::

::: {.callout-note title="Solution" collapse=true}

A few points to note. 

 - The operator $\displaystyle |$ is the union operator. 
 - The operator $\displaystyle -$ is the difference operator. 
 - In the assignment statement `A, B, C = A - B, B - C, C - A`, the right hand side is evaluated first and it is packed into a tuple. The tuple is then unpacked into `A, B, C`.

Now it is a question of executing the loop and checking for the conditions.

 - Loop-1
   - After the first `if`, `A = {"this"}, B = {"that"}, C = {"other"}`
   - After the second `if`, `A = {"this", "other"}, B = {"that", "this"}, C = {"other", "that"}`
 - Loop-2
   - After the first `if`, `A = {"other"}, B = {"this"}, C = {"that"}`

Since `"that"` is not in `B` and `"other"` not in `C`, we exit the loop. Only `B` has `"this"`. 

:::