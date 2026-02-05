---
title: Question-64
pagetitle: Question-64
order: 64
categories: [data structure, stack, DA-2025]
---

Consider the following pseudocode.

```something
Create empty stack S
Set x=0, flag=0, sum=0
Push x onto S
while (S is not empty) {
    if (flag equals 0) {
        Set x = x+1
        Push x onto S
    }
    if (x equals 8):
        Set flag=1
    if (flag equals 1) {
        x = Pop(S)
        if (x is odd):
            Pop(S)
        Set sum = sum + x
    }
}
Output sum
```

The value of `sum` output by a program executing the above pseudocode is ___ (Answer in integer)

::: {.callout-note title="Answer" collapse=true}

24

:::

::: {.callout-note title="Solution" collapse=true}

- `0` gets pushed onto the stack to begin with.
- `flag` is toggled to `1` only when `x` becomes `8`. So all elements from `1` to `8` are pushed in sequence to the stack and only then `flag` becomes `1`. Once `flag` becomes `1`, we do not push anything to the stack. This is for two reasons:
  - We push only if `flag` is `0`
  - `flag` is never updated back to `0` once it becomes `1`
- The stack now reads `[0, 1, 2, 3, 4, 5, 6, 7, 8]`.
- We now start popping. 
 - `8` popped first is placed in `x` and then added to `sum`. The stack now reads `[0, 1, 2, 3, 4, 5, 6, 7]`.
 - `7` is popped next and is placed in `x`. However, since `7` is odd, `6` gets popped without updating `x`. `7` is now added to `sum` which becomes `8 + 7`. The stack now reads `[0, 1, 2, 3, 4, 5]`.
 - `5` is popped next and is placed in `x`. Since it is odd, `4` is popped uncerimoniously. `5` gets added to `sum`, which now holds `8 + 7 + 5`. The stack now reads `[0, 1, 2, 3]`.
 - Another iteration of the `while` loop reduces the stack to `[0, 1]` with `sum` holding `8 + 7 + 5 + 3`. And one final iteration empties the stack with `sum` finally being `8 + 7 + 5 + 3 + 1` which is `24`.

:::