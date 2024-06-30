---
title: Question-3
pagetitle: Question-3
categories: [python, GATE-2017(modified), Control Flow]
---

## Question 3

Consider the Python program fragment below, which is meant to divide `x` by `y` using repeated subtractions. The variables `x`, `y`, `q`, and `r` are all unsigned int.
```python
while r >= y:
    r = r - y
    q = q + 1
```
Which of the following conditions on the variables `x`, `y`, `q`, and `r` before the execution of the fragment will ensure that the loop terminates in a state satisfying the condition `x == (y * q + r)`?


### Choices
- [ ] q == r and r == 0
- [ ] x > 0 and r == x and y > 0
- [ ] q == 0 and r == x and y > 0
- [ ] q == 0 and y > 0



::: {.callout-note title="Answer" collapse=true}

`x > 0 and r == x and y > 0`

:::



::: {.callout-note title="Feedback" collapse=true}

To ensure that the loop terminates with the condition `x == (y * q + r)`, the following conditions must hold:

- `x` must be greater than 0.
- `r` must be equal to `x`.
- `y` must be greater than 0.

These conditions are met in `x > 0 and r == x and y > 0`

:::