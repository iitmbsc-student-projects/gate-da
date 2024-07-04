---
title: Question-5
pagetitle: Question-5
categories: [GATE-2021, Algorithms, Sorting]
---

## Question 5

What is the least number of comparisons required among the array elements to sort the given array in ascending order using the following sorting algorithms?
```
23, 32, 45, 69, 72, 73, 89, 97
```

### Choices
- [ ] Quicksort using the last element as a pivot
- [ ] Selection sort
- [ ] Mergesort
- [ ] Insertion sort



::: {.callout-note title="Answer" collapse=true}

`Insertion sort`

:::



::: {.callout-note title="Feedback" collapse=true}

The given array is already sorted. Insertion sort takes the least number of comparisons $O(n)$ in this case because, for a number to be inserted into an already sorted array, only one comparison is required. Hence, Insertion sort uses the least number of comparisons in this scenario.

:::