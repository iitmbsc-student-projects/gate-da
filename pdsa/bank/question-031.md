---
title: Question-31
pagetitle: Question-31
categories: [Python programming, Heap]
---

Consider the following array of elements 

$[89, 19, 50, 17, 12, 15, 2, 5, 7, 11, 6, 9, 100]$

The minimum number of interchanges needed to convert it into a max-heap is

- [ ] 4
- [ ] 5
- [ ] 2
- [ ] 3


::: {.callout-note title="Answer" collapse=true}

- [ ] 4
- [ ] 5
- [ ] 2
- [x] 3

:::



::: {.callout-note title="Solution" collapse=true}

The process of converting an array into a max-heap involves the process of heapification, which ensures that the max-heap property is satisfied.
For the given array:
```
Initially: [89, 19, 50, 17, 12, 15, 2, 5, 7, 11, 6, 9, 100]

89
├── 19
│   ├── 17
│   │   ├── 5
│   │   └── 7
│   └── 12
│       ├── 11
│       └── 6
└── 50
    ├── 15
    │   ├── 9
    │   └── 100
    └── 2
```
Only wrong entry is 100.

To make it a Max-heap:
```
1. Swap(100,15)
89
├── 19
│   ├── 17
│   │   ├── 5
│   │   └── 7
│   └── 12
│       ├── 11
│       └── 6
└── 50
    ├── 100
    │   ├── 9
    │   └── 15
    └── 2

2. Swap(100,50)
89
├── 19
│   ├── 17
│   │   ├── 5
│   │   └── 7
│   └── 12
│       ├── 11
│       └── 6
└── 100
    ├── 50
    │   ├── 9
    │   └── 15
    └── 2

3. Swap(100,89)
100
├── 19
│   ├── 17
│   │   ├── 5
│   │   └── 7
│   └── 12
│       ├── 11
│       └── 6
└── 89
    ├── 50
    │   ├── 9
    │   └── 15
    └── 2
```

Thus the number of interchanges required is 3.

:::