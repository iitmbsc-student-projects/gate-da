---
title: Question-14
pagetitle: Question-14
categories: [GATE-2023 (modified), Python programming, recursion]
---

Consider the following program:

```python
def main():
    f1()
    f2(2)
    f3()
    return 0

def f1():
    return 1

def f2(X):
    f3()
    if X == 1:
        return f1()
    else:
        return X * f2(X - 1)

def f3():
    return 5

main()
```

Which one of the following options represents the activation tree corresponding to the main function?


- [ ] Option A

    ```
    main
    ├── f1
    ├── f2
    │   ├── f3
    │   └── f2
    │       ├── f3
    │       └── f1
    └── f3
    ```
    
- [ ] Option B

    ```
    main
    ├── f1
    ├── f2
    │   ├── f3
    │   └── f1
    └── f3
    ```
- [ ] Option C

    ```
    main
    ├── f1
    ├── f2
    │   ├── f3
    │   └── f1
    └── 
    ```
- [ ] Option D

    ```
    main
    ├── f1
    ├── f2
    │   ├── f3
    │   ├── f2
    │   └── f1
    └── f3
    ```




::: {.callout-note title="Answer" collapse=true}

- [x] Option A

    ```
    main
    ├── f1
    ├── f2
    │   ├── f3
    │   └── f2
    │       ├── f3
    │       └── f1
    └── f3
    ```
- [ ] Option B

    ```
    main
    ├── f1
    ├── f2
    │   ├── f3
    │   └── f1
    └── f3
    ```
- [ ] Option C

    ```
    main
    ├── f1
    ├── f2
    │   ├── f3
    │   └── f1
    └── 
    ```
- [ ] Option D

    ```
    main
    ├── f1
    ├── f2
    │   ├── f3
    │   ├── f2
    │   └── f1
    └── f3
    ```


:::



::: {.callout-note title="Solution" collapse=true}

- main calls `f1`, `f2` and `f3`. and `f1` and `f3` returns.
- In `f2`, `f3` is called and `f2` is called again with `X=1` as the condition goes to else part.
- In the new `f2`, `f3` is called and `f1` is called end the calls end there.

:::