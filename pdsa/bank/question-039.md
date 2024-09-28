---
title: Question-39
pagetitle: Question-39
categories: [Linear Probing, Hash Tables]
---

**Linear probing** is an open addressing scheme in computer programming for resolving hash collisions in hash tables. Linear probing takes the original hash index and increments the value by 1 until a free slot is found.

Consider the given hash table with hash function `h(key) = key mod 5` which uses linear probing for solving collisions.

| Index | Key  |
| ----- | ---- |
| 0     | 35   |
| 1     | 11   |
| 2     | 20   |
| 3     | 23   |
| 4     | 14   |

Which among the following options correspond to possible orders of insertion of values in the hash table?

- [ ] 11, 23, 35, 20, 14
- [ ] 14, 35, 23, 11, 20
- [ ] 23, 35, 14, 20, 11
- [ ] 23, 20, 35, 11, 14

::: {.callout-note title="Answer" collapse=true}

- [x] 11, 23, 35, 20, 14
- [x] 14, 35, 23, 11, 20
- [ ] 23, 35, 14, 20, 11
- [ ] 23, 20, 35, 11, 14

:::
