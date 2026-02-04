---
title: Question-23
pagetitle: Question-23
order: 23
categories: [python, lists, DA-2025]
---

Consider the following Python declarations of two lists.

```python
A = [1, 2, 3]
B = [4, 5, 6]
```

Which one of the following results in `A = [1, 2, 3, 4, 5, 6]`?

 - [ ] `A.extend(B)`

 - [ ] `A.append(B)`

 - [ ] `A.update(B)`

 - [ ] `A.insert(B)`

::: {.callout-note title="Answer" collapse=true}

 - [x] `A.extend(B)`

 - [ ] `A.append(B)`

 - [ ] `A.update(B)`

 - [ ] `A.insert(B)`

:::

::: {.callout-note title="Solution" collapse=true}

`A.append(B)` will result in `[1, 2, 3, [4, 5, 6]]`. `update` is not a valid method for lists. `insert` is a valid method, but it requires two positional arguments, one is the index of the element to be entered and the other is the element itself. `A.extend(B)` extends the list by adding the elements of `B` to the end of `A`. It is an in-place operation.

:::