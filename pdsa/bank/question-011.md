---
title: Question-11
pagetitle: Question-11
categories: [GATE-2014, Data Structures, Linked List]
---

## Question 11

What is the worst-case time complexity of inserting $n$ elements into an empty linked list, maintaining sorted order?


### Choices
- [ ] $\Theta(n)$
- [ ] $\Theta(n \log n)$
- [ ] $\Theta(n^2)$
- [ ] $\Theta(1)$



::: {.callout-note title="Answer" collapse=true}

$\Theta(n^2)$

:::



::: {.callout-note title="Feedback" collapse=true}

Consider a sorted list where inserting an element requires traversing till the end, necessitating comparisons equal to the number of elements in the worst case.

For the 1st element, no comparison is needed.
For the 2nd element, 1 comparison is needed.
And so on, until the $n$th element requiring $(n - 1)$ comparisons.

The total comparisons needed to insert $n$ elements is the sum of the first $n - 1$ natural numbers, given by:
$$ 1 + 2 + \ldots + (n - 1) = \frac{n(n - 1)}{2} = O(n^2) $$

Therefore, in the worst case, the time complexity of inserting $n$ elements into a sorted linked list is $\Theta(n^2)$.

:::