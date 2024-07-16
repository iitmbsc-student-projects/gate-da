---
title: Question-13
pagetitle: Question-13
categories: [GATE-2018 (modified), Algorithms, recursion]
---

Consider the following program written in pseudo-code. Assume that `x` and `y` are integers:
```
Count(x, y) {
    if (y != 1) {
        if (x != 1) {
            print(“*”);
            Count(x/2, y);
        } else {
            y = y – 1;
            Count(1024, y);
        }
    }
}
```

The number of times that the print statement is executed by the call Count$(1024, 1024)$ is _____.


::: {.callout-note title="Solution" collapse=true}

$10230$

:::



::: {.callout-note title="Feedback" collapse=true}

For the call `Count(1024, 1024)`, the program initiates with $(x, y) = (1024, 1024)$. 

The print statement inside the `Count` function executes when $x$ is not $1$. Starting with $x = 1024$ and continuously dividing it by $2$ until it becomes $1$.

```
x = 1024 -> 512 -> 256 -> 128 -> 64 -> 32 -> 16 -> 8 -> 4 -> 2 (10 times)  
```
The `else` part inside the `Count` function reduces $y$ by $1$ and recursively calls `Count(1024, y)`. This reduction continues until $y$ becomes $1$. 

```
y = 1024 -> ... -> 2 ( 1023 times)   
```

Hence, the total number of executions of the print statement is $1023 \times 10 = 10230$.


:::