---
title: Question-2
pagetitle: Question-2
categories: [python, GATE-2019(modified), Python Programming, Control Flow]
---

Consider the following Python program:

```python=
sum_value = 0.0
j = 1.0
i = 2.0

while i / j > 0.0625:
    j = j + j
    sum_value = sum_value + i / j
    print(sum_value)

```

The number of times the variable `sum_value` will be printed when the above program is executed is ________

::: {.callout-note title="Answer" collapse=true}

$5$

:::

::: {.callout-note title="Feedback" collapse=true}

The variable `sum_value` will be printed 5 times when the program is executed. This is because the program uses a while loop, and the condition `i / j > 0.0625` is checked in each iteration. The loop continues until this condition becomes false. Analyzing the values of `i` and `j` in each iteration, we can see that it is printed in the first 5 iterations:

1. `j = 1.0`, `i/j = 2.0/1.0 > 0.0625` (True, Printed)
2. `j = 2.0`, `i/j = 2.0/2.0 > 0.0625` (True, Printed)
3. `j = 4.0`, `i/j = 2.0/4.0 > 0.0625` (True, Printed)
4. `j = 8.0`, `i/j = 2.0/8.0 > 0.0625` (True, Printed)
5. `j = 16.0`, `i/j = 2.0/16.0 > 0.0625` (True, Printed)

:::